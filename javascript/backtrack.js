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
   run(animate = false) {
      var timelineContainer = document.querySelector("#timeline-container"),
          eventElements = Array.from(timelineContainer.querySelectorAll(".event")),
          lineElements = Array.from(timelineContainer.querySelectorAll(".line")),

          timeline = angular.element(timelineContainer),
          scope = timeline.scope(),
          
          controller = timeline.controller(),
          allEvents = controller.events;
      
      this.resetEvents(allEvents, scope);
      this.arrangeEvents(allEvents, eventElements, lineElements, scope, animate);
   },

   check() {
      var timelineContainer = document.querySelector("#timeline-container"),
          eventElements = Array.from(timelineContainer.querySelectorAll(".event"));

      return this.isOk(eventElements);
   },

   resetEvents(events, scope) {
      events.forEach(event => { event.lineLength = 5; });
      scope.$digest();
   },

   async arrangeEvents(allEvents, eventElements, lineElements, scope, animate) {
      var i = 0,
          iterations = 0,
          MAX_ITERS = allEvents.length * allEvents.length * (70 - 5) / 5;

      while(i >= 0 && i < allEvents.length && iterations < MAX_ITERS) {
         iterations++;

         let theseEvents = allEvents.slice(0, i + 1),
             event = theseEvents[theseEvents.length - 1];

         let theseEventElements = eventElements.slice(0, i + 1),
             theseLineElements = lineElements.slice(0, i + 1),
             elements = this.interleave(theseEventElements, theseLineElements);

         while(event.lineLength <= 70 && !this.isOk(elements)) {
            event.lineLength += 5;
            scope.$digest();

            if(animate) {
               await this.sleep(10);
            }
         }

         if(event.lineLength > 70) {
            event.lineLength = 5;
            i--;
            allEvents[i].lineLength += 5;

            scope.$digest();
         } else {
            i++;
         }
      }

      if(i < 0 || iterations > MAX_ITERS) {
         this.resetEvents(allEvents, scope);
      }
   },

   isOk(elements) {
      var allRects = elements.map(element => element.getBoundingClientRect());
      var totalOverlap = this.totalOverlap(allRects);

      return  totalOverlap < 100;
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
   },

   interleave(arr1, arr2) {
      return arr1.reduce(function(memo, element, index) {
                memo.push(element);
                memo.push(arr2[index]);
                return memo;
             }, []);
   },

   sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }
};

})();
