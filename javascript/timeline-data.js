var Months = Object.freeze({ JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5, JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11 });

var timelineData = {
   height: 2500, //px
   events: [
      {
         title: "Moved in Together",
         description: "Tom and Carrie met when they moved in together with Hunter and Emily",
         date: new Date(2012, Months.AUG),
         day: false,
         photo: ""
      },
      {
         title: "Adult Swim",
         description: "We hung out for the first time at the Madison Children's Museum",
         date: new Date(2012, Months.SEP, 28),
         day: true,
         photo: ""
      },
      {
         title: "Freakfest",
         description: "We dressed up for a Halloween party on State Street, after watching 'Masque of the Red Death'",
         date: new Date(2012, Months.OCT, 27),
         day: true,
         photo: ""
      },
      {
         title: "Got Our Own Place",
         description: "Affectionately dubbed the 'Crappy Dumphole Full of Spiders,' it boasted a roving dishwasher and many spiders",
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
         description: "We got engaged at Heritage during restaurant week",
         date: new Date(2015, Months.JAN),
         day: false,
         photo: ""
      },
      {
         title: "First Kiss",
         description: "Best birthday present :)",
         date: new Date(2013, Months.OCT, 15),
         day: true,
         photo: ""
      },
      {
         title: "First Thanksgiving Together",
         description: "We spent it in Ohio with Carrie's Aunt and Uncle",
         date: new Date(2014, Months.NOV, 27),
         day: false,
         photo: ""
      },
      {
         title: "Road Trip",
         description: "Tom and Carrie spent three weeks on the road between leases. We visited cities from Minneapolis to Boston",
         date: new Date(2014, Months.JUL, 31),
         day: true,
         photo: ""
      },
      {
         title: "ACL Reconstruction",
         description: "Carrie's hamstring tendon was repurposed as an ACL, and Tom was repurposed as a nurse",
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
         description: "Tom, Carrie, and Tom's parents visited Tom's sister Mary, traveling to Antwerp, Bruges, Brussels, Namur, and Ghent",
         date: new Date(2015, Months.JUL),
         day: false,
         photo: ""
      },
      {
         title: "Wedding",
         description: "We will get married June 2, 2018!",
         date: new Date(2018, Months.JUN, 2),
         day: false,
         photo: ""
      },
      {
         title: "Today",
         description: "",
         date: new Date(),
         day: true,
         photo: "",
      },
      {
         title: "Moving Day",
         description: "Tom and Carrie spent the day moving furniture, and had a late lunch on the rooftop garden of Brickhouse BBQ",
         date: new Date(2013, Months.AUG, 4),
         photo: ""
      },
      {
         title: "Governor Dodge Boulder Bash",
         description: "Tom takes Carrie rock climbing outside for the first time",
         date: new Date(2015, Months.OCT, 3),
         photo: ""
      }
   ]
};
