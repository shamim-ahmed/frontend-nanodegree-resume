/*
This is empty on purpose! Your code to build the resume will go here.
 */

 /* bio object */
 var bio = {
   "name": "Shamim Ahmed",
   "role": "Software Developer",
   "contacts": {
     "mobile": "0450289581",
     "email": "shamim.buet.99@gmail.com",
     "github": "shamim-ahmed",
     "twitter": "dreamsmith7",
     "location": "Sydney, Australia"
   },
   "welcmeMessage": "Welcome",
   "skills": ["Java", "J2EE", "Python", "HTML5", "CSS3"],
   "biopic": "images/shamim.jpg",
   "display": function() {}
 };

 /* education object */
 var education = {
   schools: [
     {
       name: "BUET",
       location: "Dhaka, Bangladesh",
       degree: "B.Sc in Computer Science and Engineering",
       majors: ["Computer Science", "Computer Engineering"],
       dates: "August 2001 - April 2006",
       url: "http://www.buet.ac.bd"
     },
     {
       name: "Macquarie University",
       location: "Sydney, Australia",
       degree: "Master of Information Technology",
       majors: ["Information Technology", "Web Technologies"],
       dates: "Jaunary 2012 - April 2013",
       url: "http://www.mq.edu.au"
     }
   ],
   onlineCourses: [
     {
       title: "Android Nanodegree",
       school: "Udacity",
       dates: "August 2015 - August 2016",
       url: "https://www.udacity.com/course/android-developer-nanodegree-by-google--nd801"
     },
     {
       title: "Frontend Developer Nanodegree",
       school: "Udacity",
       dates: "August 2016 - Present",
       url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
     }
   ],
   display: function() {}
 };

 /* work object */
 var work = {
   jobs: [
     {
       employer: "Escenic Bangladesh",
       title: "Software Developer",
       location: "Dhaka, Bangladesh",
       dates: "January 2007 - December 2011",
       description: "I worked as a Java/J2EE developer at Escenic Bangladesh."
     },
     {
       employer: "Sandstone Technology",
       title: "Software Developer",
       location: "Sydney, Australia",
       dates: "July 2013 - Present",
       description: "I am currently working for Sandstone Technology as a Java developer."
     }
   ],
   display: function() {}
 };

 /* projects object */
 var projects = {
   projects: [
     {
       title: "Escenic Widget Framework",
       dates: "June 2009 - December 2011",
       description: "",
       images: []
     },
     {
       title: "Escenic Demo Kit",
       dates: "June 2009 - December 2011",
       description: "",
       images: []
     },
     {
       title: "Warehouse Money",
       dates: "January 2015 - October 2015",
       description: "",
       images: []
     },
     {
       title: "INGD Orange One",
       dates: "November 2015 - May 2016",
       description: "",
       images: []
     }
   ],
   display: function() {}
 };

/* the logic starts here */

/* name and role */
var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedHeaderRole);
$("#header").prepend(formattedHeaderName);

/* contact details */
var mobileItem = HTMLmobile.replace("%data%", bio.contacts.mobile);
var emailItem = HTMLemail.replace("%data%", bio.contacts.email);
var githubItem = HTMLgithub.replace("%data%", bio.contacts.github);
var twitterItem = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var locationItem = HTMLlocation.replace("%data%", bio.contacts.location);

$("#topContacts").append(mobileItem).append(emailItem).append(githubItem).append(twitterItem).append(locationItem);
