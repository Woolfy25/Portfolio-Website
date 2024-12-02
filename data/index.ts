export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently widening my knowledge & concepts of backend technologies.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Money Guard App",
    des: "A money management app in React, JavaScript, Node.js using backend, Api`s, routes & many more.",
    img: "/MoneyGuard.jpg",
    iconLists: [
      "/re.svg",
      "/redux.svg",
      "/js.svg",
      "/nodejs.svg",
      "/webpack.svg",
    ],
    link: "https://woolfy25.github.io/Money-Guard-App/#/login",
  },
  {
    id: 2,
    title: "Animated Apple Iphone 3D Website",
    des: "Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/Apple.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/js.svg", "/three.svg", "/gsap.svg"],
    link: "https://woolfy25.github.io/Apple-Website/",
  },
  {
    id: 3,
    title: "Tasty Treats",
    des: "A recipes website using advanced filtering, pagination, Api's & more in JavaScript & HTML.",
    img: "/tasty.jpg",
    iconLists: [
      "/js.svg",
      "/tail.svg",
      "/nodejs.svg",
      "/webpack.svg",
      "/redux.svg",
    ],
    link: "https://cristinabubu.github.io/proiect/",
  },
  {
    id: 4,
    title: "Health App",
    des: "Calculate and track your calories with a custom backend and server and amazing visuals.",
    img: "/health.jpg",
    iconLists: [
      "/nodejs.svg",
      "/tail.svg",
      "/ts.svg",
      "/docker.svg",
      "/server.svg",
    ],
    link: "https://woolfy25.github.io/Health-App/",
  },
  {
    id: 5,
    title: "Rest API Backend Server",
    des: "Using MongoDB and Express to store and retrieve data from a cloud DB with an authorization token using JWT, each User has its own contacts and cannot delete, update or list another users data but his. Also added account activation through an email",
    img: "/backend.png",
    iconLists: ["/js.svg", "/mongo.svg", "/server.svg"],
    link: "https://github.com/Woolfy25/REST-API-application-Authentication-CurrentUser-EmailVerification",
  },
  {
    id: 6,
    title: "React Phone Book",
    des: "A Phone Book app in React, Tailwind & JavaScript using backend, redux, login & many more.",
    img: "/phonebook.jpg",
    iconLists: [
      "/tail.svg",
      "/js.svg",
      "/webpack.svg",
      "/nodejs.svg",
      "/redux.svg",
    ],
    link: "https://woolfy25.github.io/react-phonebook-app/#/login",
  },
];

export const testimonials = [
  {
    quote: "Placeholder",
    name: "Alexandru Petcoviciu",
    title: "Director of Sneaker Supply",
  },
  {
    quote: "Placeholder",
    name: "Iani Misoc",
    title: "GoIT Mentor",
  },
  {
    quote:
      "I highly recommend Ramon, a motivated and skilled full stack developer from GoIT. His dedication to client satisfaction, exceptional work quality, and commitment to continuous improvement make him an invaluable addition to any team.",
    name: "Diana Braga",
    title:
      "LinkedIn TOP Voice | Contractor | IT Talent Acquisition | CV Writer | Career Coach | Founder of SwiftCareer",
  },
  {
    quote: "Placeholder",
    name: "Melissa Ionela",
    title: "Programming Colleague",
  },
  {
    quote: "Placeholder",
    name: "Levi Popescu",
    title: "Programming Colleague",
  },
];

export const companies = [
  {
    id: 1,
    name: "GoIT",
    img: "/goit.png",
    nameImg: "GoIT",
  },
  {
    id: 2,
    name: "AWS",
    img: "/aws.svg",
    nameImg: "amazon",
  },
  {
    id: 3,
    name: "sneakersupply",
    img: "/sneakersupply.png",
    nameImg: "Sneaker Supply",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "docker",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
