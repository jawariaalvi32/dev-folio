import shoesstore from './assets/images/shoestore.png'
import coronatracker from './assets/images/coronatracker.png'
import todo from './assets/images/todo.png'

/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';


const greeting = {
  username: 'Jawaria Alvi',
  title: "Hi, I'm Jawaria",
  subTitle: emoji(
    'A passionate Developer having experience in web with Javascript, React and some more cool libaries'
  ),
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/jawariaalvi32',
  linkedin: 'https://www.linkedin.com/in/jawariaalvi/',
  gmail: 'jawariaalvi32@gmail.com',
  facebook: 'https://www.facebook.com/jawaria.alvi.9',
  medium: 'https://medium.com/@jawariaalvi32',
  twitter: 'https://twitter.com/alvi_jawaria',
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skills = {
  title: 'What I do',
  subTitle: 'A FULL STACK DEVELOPER WHO LOVES TO EXPLORE NEW THINGS. Currently I am focusing on MERN Technology',
  softwareSkills: [
  {
    skillName: 'html-5',
    fontAwesomeClassname: 'fab fa-html5',
    color: "#e34c26"
  },
  {
    skillName: 'css3',
    fontAwesomeClassname: 'fab fa-css3-alt',
    color: "#264de4"
  },
  {
    skillName: 'JavaScript',
    fontAwesomeClassname: 'fab fa-js',
    color: "#f0db4f"
  },
  {
    skillName: 'Php',
    fontAwesomeClassname: 'fab fa-php',
    color: "#8993be"
  },
  {
    skillName: 'Laravel',
    fontAwesomeClassname: 'fab fa-laravel',
    color: "#fb503b"
  },
  {
    skillName: 'reactjs',
    fontAwesomeClassname: 'fab fa-react',
    color: "#61DBFB"
  },
  // {
  //   skillName: 'nodejs',
  //   fontAwesomeClassname: 'fab fa-node',
  //   color: "#303030"
  // },
  {
    skillName: 'npm',
    fontAwesomeClassname: 'fab fa-npm',
    color: "#CC3534"
  },
  {
    skillName: 'sql-database',
    fontAwesomeClassname: 'fas fa-database',
    color: "#00758F"
  },
  {
    skillName: 'firebase',
    fontAwesomeClassname: 'fas fa-fire',
    color: "#FFA611"
  },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Some  projects you have worked on

const buildProjects = {
  projects: [
    {
      image: coronatracker,
      projectName: "Corona Tracker",
      projectDesc: "Project shows the numbers of people affected, recovered and deceased due to COVID-19.",
      githubLink: "https://github.com/jawariaalvi32/corona-tracker",
      hostedLink: "https://coronacovid19-tracker.netlify.app/"
    },
    {
      image: shoesstore,
      projectName: "Shoe Store",
      projectDesc: "A simple shoe store built using react.",
      githubLink: "https://github.com/jawariaalvi32/Shoe-store",
      hostedLink: "https://react-shoesstore.netlify.app/"
    },
    {
      image: todo,
      projectName: "Todo List",
      projectDesc: "A simple todo app with firebase integration.",
      githubLink: "https://github.com/jawariaalvi32/web-mobile-app/tree/master/Assignment10",
      hostedLink: "https://webmobile-3375f.web.app/Assignment10/"
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};


const contactInfo = {
  title: "Reach Out to me",
  subtitle: '',
    // 'Discuss a project or just want to say hi? My Inbox is open for all.',
  emailAddress: 'jawariaalvi32@gmail.com',
};

export {
  greeting,
  socialMediaLinks,
  skills,
  buildProjects,
  contactInfo,
};