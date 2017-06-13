(function() {

angular.module('app').controller('TimelineController', function() {

   this.height = timelineData.height;
   this.events = parseTimeline(timelineData);
   
});

function parseTimeline(timelineData) {
   timelineData.events.sort(compareDates);
   
   var firstDate = timelineData.events[0].date,
       lastDate = timelineData.events[timelineData.events.length - 1].date,
       dateDistance = lastDate - firstDate;

   timelineData.events.forEach(parseEvent, {
      firstDate: firstDate,
      dateDistance: dateDistance,
      height: timelineData.height
   });

   return timelineData.events;
}

function compareDates(eventA, eventB) {
   return eventA.date - eventB.date;
}

function parseEvent(event) {
   event.readableDate = readableDate(event.date, event.day);
   event.abbreviatedDate = abbreviatedDate(event.date, event.day);

   var positionFraction = (event.date - this.firstDate) / this.dateDistance;
   event.position = Math.round(this.height * positionFraction);

   event.lineLength = 5;
}

var Months = Object.freeze([ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]);

function readableDate(date, day) {
   var string = Months[date.getMonth()];

   if(day) {
      var dayOfMonth = date.getDate();
      string += " " + dayOfMonth + ordinal(dayOfMonth) + ",";
   }

   string += " " + date.getFullYear();

   return string;
}

function abbreviatedDate(date, day) {
   var string = date.getMonth() + 1;

   if(day) {
      string += "/" + date.getDate();
   }

   string += "/" + date.getFullYear();

   return string;
}

function ordinal(number) {
   var ord;

   if(number > 3 && number < 21) {
      ord = "th";
   } else {
      var lastDigit = parseInt(number) % 10;
      
      switch(lastDigit) {
         case 1: ord = "st"; break;
         case 2: ord = "nd"; break;
         case 3: ord = "rd"; break;
         default:
            ord = "th";
      }
   }

   return ord;
}

})();
