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
    "twitter": "@dreamsmith7",
    "location": "Sydney, Australia"
  },
  "welcomeMessage": "Hi there! Thanks for your interest in my resume.",
  "skills": ["Java", "J2EE", "Python", "HTML5/CSS3"],
  "biopic": "images/shamim.png",
  "display": displayBiographicalInfo
};

/* education object */
var education = {
  "schools": [
    {
      "name": "BUET",
      "location": "Dhaka, Bangladesh",
      "degree": "B.Sc in Computer Science and Engineering",
      "majors": ["Computer Science", "Computer Engineering"],
      "dates": "August 2001 - April 2006",
      "url": "http://www.buet.ac.bd"
    },
    {
      "name": "Macquarie University",
      "location": "Sydney, Australia",
      "degree": "Master of Information Technology",
      "majors": ["Information Technology", "Web Technologies"],
      "dates": "Jaunary 2012 - April 2013",
      "url": "http://www.mq.edu.au"
    }
  ],
  "onlineCourses": [
    {
      "title": "Android Nanodegree",
      "school": "Udacity",
      "dates": "August 2015 - August 2016",
      "url": "https://www.udacity.com/course/android-developer-nanodegree-by-google--nd801"
    },
    {
      "title": "Frontend Developer Nanodegree",
      "school": "Udacity",
      "dates": "August 2016 - Present",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ],
  "display": function() {}
};

/* work object */
var work = {
  "jobs": [
    {
      "employer": "Escenic Bangladesh",
      "title": "Software Developer",
      "location": "Dhaka, Bangladesh",
      "dates": "January 2007 - December 2011",
      "description": "I worked as a Java/J2EE developer at Escenic Bangladesh."
    },
    {
      "employer": "Sandstone Technology",
      "title": "Software Developer",
      "location": "Sydney, Australia",
      "dates": "July 2013 - Present",
      "description": "I am currently working for Sandstone Technology as a Java developer."
    }
  ],
  "display": displayWorkExperience
};

/* projects object */
var projects = {
  "projects": [
    {
      "title": "Escenic Widget Framework",
      "dates": "June 2009 - December 2011",
      "description": "The goal of this project was to create a set of highly configurable widgets (reusable components with specific functionalities) that would be available on the Escenic platform. These widgets provide an excellent starting point for more elaborate customer projects. As a senior developer, I contributed to both JSP template development and back-end Java development. I also had to be well-versed in various web technologies like HTML, CSS, JavaScript and JQuery. ",
      "images": ["images/widget-framework/photo_1.png", "images/widget-framework/photo_2.png"]
    },
    {
      "title": "Escenic Demo Kit",
      "dates": "June 2009 - December 2011",
      "description": "This project focused on creating a VMware image for the Sales department that would contain Escenic and all other necessary software, along with some demonstrable web publications. My responsibilities in this project included maintaining the JSP templates and scripts used in the VMware image. Periodically, I also had to upgrade the operating system used in the image and update the installation scripts.",
      "images": ["images/demo-kit/photo_1.png", "images/demo-kit/photo_2.png"]
    },
    {
      "title": "Warehouse Money",
      "dates": "January 2015 - October 2015",
      "description": "The aim of this project was to implement a personal banking portal for the Warehouse Group, which is the largest retail group operating in New Zealand. I was involved in both design and implementation phase of the project. I also worked closely with the infrastructure team to ensure that the portal solution is installed and configured properly.",
      "images": ["images/warehouse-money/photo_1.png", "images/warehouse-money/photo_2.png"]
    },
    {
      "title": "INGD Orange One",
      "dates": "November 2015 - May 2016",
      "description": "In this project, we customized LendFast (a Sandstone product) so that it can be used to process credit card applications. Our client was ING Direct, which is a subsidiary of the ING Group. This project was a unique experience for me, as I had to work at client premises for a few months as an external consultant. This gave me the opportunity to interact with the client on a day-to-day basis.",
      "images": ["images/ingd-orange/photo_1.png", "images/ingd-orange/photo_2.png"]
    }
  ],
  "display": displayProjects
};

function displayBiographicalInfo() {
  /* name and role */
  var headerName = HTMLheaderName.replace("%data%", bio.name);
  var headerRole = HTMLheaderRole.replace("%data%", bio.role);

  var headerElem = $("#header");

  headerElem.prepend(headerName);
  headerElem.prepend(headerRole);

  /* contact details */
  var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var email = HTMLemail.replace("%data%", bio.contacts.email);
  var github = HTMLgithub.replace("%data%", bio.contacts.github);
  var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var loc = HTMLlocation.replace("%data%", bio.contacts.location);

  $("#topContacts").append(mobile).append(email).append(github).append(twitter).append(loc);

  /* biopic and welcome message */
  var biopic = HTMLbioPic.replace("%data%", bio.biopic);
  var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  headerElem.append(biopic).append(welcomeMessage);

  /* skill set */
  headerElem.append(HTMLskillsStart);

  var skillListElem = $("#skills");
  var i;

  for (i = 0; i < bio.skills.length; i++) {
    var skill = HTMLskills.replace("%data%", bio.skills[i]);
    skillListElem.append(skill);
  }
}

function displayWorkExperience() {
  /* work experience */
  var workExperienceElem = $("#workExperience");

  for (i = 0; i < work.jobs.length; i++) {
    workExperienceElem.append(HTMLworkStart);

    var job = work.jobs[i];
    var workEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var workTitle = HTMLworkTitle.replace("%data%", job.title);
    var employerInfo = workEmployer + workTitle;
    var workDates = HTMLworkDates.replace("%data%", job.dates);
    var loc = HTMLworkLocation.replace("%data%", job.location);
    var description = HTMLworkDescription.replace("%data%", job.description);

    var workEntryElem = $(".work-entry:last", workExperienceElem);
    workEntryElem.append(employerInfo).append(workDates).append(loc).append(description);
  }
}

function displayProjects() {
  /* projects */
  var projectsElem = $("#projects");

  for (i = 0; i < projects.projects.length; i++) {
    projectsElem.append(HTMLprojectStart);

    var project = projects.projects[i];
    var projectTitle = HTMLprojectTitle.replace("%data%", project.title);
    var projectDates = HTMLprojectDates.replace("%data%", project.dates);
    var projectDescription = HTMLprojectDescription.replace("%data%", project.description);

    var projectEntry = $(".project-entry:last", projectsElem);
    projectEntry.append(projectTitle).append(projectDates).append(projectDescription);

    var j;
    for (j = 0; j < project.images.length; j++) {
      var projectImage = HTMLprojectImage.replace("%data%", project.images[j]);
      projectEntry.append(projectImage);
    }
  }
}

/* the logic starts here */
bio.display();
work.display();
projects.display();
