var Months = Object.freeze({ JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5, JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11 });

var timelineData = {
   height: 2500, //px
   events: [
      {
         title: "Moved in Together",
         description: "Tom and Carrie met when the moved in together with mutual friends",
         date: new Date(2012, Months.AUG),
         day: false,
         photo: ""
      },
      {
         title: "Adult Swim",
         description: "First hangout",
         date: new Date(2012, Months.SEP, 28),
         day: true,
         photo: ""
      },
      {
         title: "Freakfest",
         description: "Also first hangout?",
         date: new Date(2012, Months.OCT, 27),
         day: true,
         photo: ""
      },
      {
         title: "Got own Place",
         description: "Crappy Dumphole Full of Spiders",
         date: new Date(2014, Months.AUG, 19),
         day: true,
         photo: ""
      },
      {
         title: "The Kittening",
         description: "Spirit and Curiosity joined the family",
         date: new Date(2016, Months.JUN, 24),
         day: true,
         photo: ""
      },
      {
         title: "Engaged",
         description: "Tom and Carrie got engaged at Heritage during restaurant week",
         date: new Date(2015, Months.JAN),
         day: false,
         photo: ""
      },
      {
         title: "First Kiss",
         description: "Best birthday present",
         date: new Date(2013, Months.OCT, 15),
         day: true,
         photo: ""
      },
      {
         title: "First Thanksgiving Together",
         description: "Drove down to Ohio",
         date: new Date(2014, Months.NOV),
         day: false,
         photo: ""
      },
      {
         title: "Road Trip",
         description: "Tom and Carrie spent three weeks on the road when they were homeless",
         date: new Date(2014, Months.JUL, 31),
         day: true,
         photo: ""
      },
      {
         title: "ACL Reconstruction",
         description: "Carrie's hamstring tendon was repurposed as an ACL",
         date: new Date(2014, Months.APR),
         day: false,
         photo: ""
      },
      {
         title: "First Christmas Together",
         description: "Spent Christmas at the Smilack home in Virginia",
         date: new Date(2016, Months.DEC),
         day: false,
         photo: ""
      },
      {
         title: "Belgium",
         description: "Tom and Carrie visit Tom's sister Mary in Antwerp",
         date: new Date(2015, Months.JUL),
         day: false,
         photo: ""
      },
      {
         title: "Wedding",
         description: "The main event!",
         date: new Date(2018, Months.JUN),
         day: false,
         photo: ""
      },
      {
         title: "Today",
         description: "",
         date: new Date(),
         day: true,
         photo: "",
      }
   ]
};
