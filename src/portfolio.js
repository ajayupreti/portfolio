
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Ajay Upreti",
  title: "Hi all, I'm Ajay",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Angular / Vue.js / Nodejs and some other cool libraries and frameworks. Have experience working in a startup."),
  resumeLink: "https://drive.google.com/file/d/1-dsONNX5FZVjZJFyzIWdXWOeYxnXLqA3/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/ajayupreti",
  linkedin: "https://www.linkedin.com/in/ajay-upreti-3915a1a1/",
  gmail: "ajayupreti20194@gmail.com",
  gitlab: "https://gitlab.com/ajayupreti",
  facebook: "https://www.facebook.com/ajju.aj.585/",
  medium: "https://medium.com/@ajayupreti20194",
  stackoverflow: "https://stackoverflow.com/users/10028913/ajay-upreti"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Graphic Era Hill University",
      logo: require("./assets/images/graphic-era-logo.jpeg"),
      subHeader: "B.Tech. in Computer Science & Engineering",
      duration: "July 2012 - June 2016",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Army Public School",
      logo: require("./assets/images/aps-logo.jpeg"),
      subHeader: "12th",
      duration: "April 2011 - March 2012",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Designing",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Publicis Sapient",
      companylogo: require("./assets/images/sapient.jpeg"),
      date: "May 2021 – Present",
      desc: "Involved in setup the Front-end Architecture for different products which include best coding practice, scalable and modular architecture for Angular application, reusable code.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Senior Software Engineer",
      company: "Capgemini Engineering",
      companylogo: require("./assets/images/capgemini-logo.jpeg"),
      date: "Dec 2018 – Present",
      desc: "Involved in setup the Front-end Architecture for different products which include best coding practice, scalable and modular architecture for Angular application, reusable code.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Front-End Developer",
      company: "Crownstack",
      companylogo: require("./assets/images/crown-logo.jpeg"),
      date: "May 2017 – Dec 2018",
      desc: "Worked on creating multiple web apps from scratch using Angular & Rxjs",
      descBullets: [
        "Involved in setup the Front-end Architecture for different products which include best coding practice, scalable and modular architecture for Angular application, reusable code."
      ]
    },
    {
      role: "Front-End Developer",
      company: "Talkcharge",
      companylogo: require("./assets/images/talk-logo.png"),
      date: "Sep 2016 – Apr 2017",
      desc: "Worked on creating a web app product from scratch using javascript."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "ajayupreti", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME BIG PROJECTS THAT I HAVE WORKED WITH",
  projects: [
    {
      image: require("./assets/images/cisco-logo.jpeg"),
      link: ""
    },
    {
      image: require("./assets/images/unilever-logo.jpeg"),
      link: ""
    },
    {
      image: require("./assets/images/samsung-logo.jpeg"),
      link: ""
    },
    {
      image: require("./assets/images/airbus-logo.jpeg"),
      link: ""
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Certifications 🏆 "),
  subtitle: "Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Next.js : Server-Side Rendering",
      subtitle: "Completed Certifcation from Linkedin Learning for Next.js",
      image: require("./assets/images/linkedin-logo.jpeg"),
      footerLink: [{ name: "Certification", url: "https://www.linkedin.com/learning/react-server-side-rendering-2018/welcome?u=2130370" }]
    },
    {
      title: "React - The Complete Guide",
      subtitle: "Completed Certifcation from Udemy for React.js",
      image: require("./assets/images/udemy-logo.jpeg"),
      footerLink: [
        { name: "Certification", url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/" }
      ]
    },
    {
      title: "Learning Node.js",
      subtitle: "Completed Certifcation from Linkedin Learning for Node.js",
      image: require("./assets/images/linkedin-logo.jpeg"),
      footerLink: [{ name: "Certification", url: "https://www.linkedin.com/learning/react-server-side-rendering-2018/welcome?u=2130370" }]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@ajayupreti/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/ajayupreti-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8267832583",
  email_address: "ajayupreti20194@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, contactInfo , twitterDetails};
