(function() {

var app = angular.module('app');

app.directive('resize', ['$window', function($window) {
   return {
      link: link,
      restrict: 'E'
   };

   function link(scope, element, attrs) {
      function onResize() {
         if(!TimelineBacktrack.check()) {
            TimelineBacktrack.run();
         }
      }

      function cleanUp() {
         angular.element($window).off('resize', onResize);
      }

      angular.element($window).on('resize', onResize);
      scope.$on('$destroy', cleanUp);
   }
}]);

var TimelineBacktrack = {
   run() {
      var timelineContainer = document.querySelector("#timeline-container"),
          eventElements = Array.from(timelineContainer.querySelectorAll(".event")),

          timeline = angular.element(timelineContainer),
          scope = timeline.scope(),
          
          controller = timeline.controller(),
          allEvents = controller.events;
      
      this.setUpEvents(allEvents);
      this.arrangeEvents(allEvents, eventElements, scope);
      this.saveResults(allEvents);

      scope.$digest();
   },

   check() {
      var timelineContainer = document.querySelector("#timeline-container"),
          eventElements = Array.from(timelineContainer.querySelectorAll(".event"));

      return this.isOk(eventElements);
   },

   setUpEvents(events) {
      events.forEach(event => { event.hPos = 5; });
   },

   saveResults(events) {
      events.forEach(event => { event.lineLength = event.hPos });
   },

   arrangeEvents(allEvents, eventElements, scope) {
      var i = 0;
      while(i < allEvents.length) {
         let theseEvents = allEvents.slice(0, i + 1),
             event = theseEvents[theseEvents.length - 1],
             theseEventElements = eventElements.slice(0, i + 1);

         event.hPos -= 5;
         
         do {
            event.hPos += 5;
            this.saveResults(theseEvents);
            scope.$digest();

         } while(event.hPos <= 70 && !this.isOk(theseEventElements));

         if(event.hPos > 70) {
            event.hPos = 5;
            i--;
         } else {
            i++;
         }
      }
   },

   isOk(elements) {
      var allRects = elements.map(element => element.getBoundingClientRect());
      return this.totalOverlap(allRects) < 1;
   },

   totalOverlap(allRects) {
      var totalOverlappingArea = 0;

      for(let i = 0; i < allRects.length; i++) {
         for(let j = i + 1; j < allRects.length; j++) {
            totalOverlappingArea += this.overlappingArea(allRects[i], allRects[j]);
         }
      }

      return totalOverlappingArea;
   },

   overlappingArea(rect1, rect2) {
      var x1 = Math.max(rect1.left, rect2.left),
          x2 = Math.min(rect1.left + rect1.width, rect2.left + rect2.width),
          width = Math.max(0, x2 - x1);

      var y1 = Math.max(rect1.top, rect2.top),
          y2 = Math.min(rect1.top + rect1.height, rect2.top + rect2.height),
          height = Math.max(0, y2 - y1);

      return width * height;
   }
};

})();
