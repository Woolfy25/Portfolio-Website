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
    quote:
      "Ramon was an invaluable asset to the team at Sneaker Supply. His programming expertise and proactive problem-solving approach consistently elevated our projects. Always collaborative and eager to help, Ramon contributed innovative solutions that made a real impact on our team's efficiency and success.",
    name: "Alexandru Petcoviciu",
    title: "Director of Sneaker Supply",
  },
  {
    quote:
      "As a mentor, I appreciate your dedication and progress. You have excellently learned TypeScript, React.js, Node.js and so many more, managing to complete complex applications. You are a talented and promising student! One of the best and most ambitious students I've had, congratulations Ramon!",
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
    quote:
      "I greatly appreciated the collaboration with Ramon. His professionalism, combined with an always open and friendly attitude, made the whole experience a pleasant and productive one. Ramon demonstrated a deep understanding of technical concepts and was always willing to share his knowledge. In addition, his ability to collaborate effectively and come up with quick solutions was a real help to the team.",
    name: "Melissa Ionela",
    title: "Programming Colleague",
  },
  {
    quote:
      "Working with Ramon was a great experience. His friendly and approachable nature, combined with deep technical expertise, made him a valuable team member. He was always ready to share his knowledge and contribute quick, effective solutions, which greatly supported our team’s success.",
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
    nameImg: "Snkr Supply",
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
    title: "Full Stack Developer Intern at GoIT",
    desc: "I developed responsive web applications using React, TypeScript, JavaScript, Node.js, NoSQL, Express, Redux, Git and many many more. showcasing my ability to create functional and attractive websites independently.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer & Sales Manager at Sneaker Supply",
    desc: "I develop JavaScript bots for my company to streamline workflows and enhance productivity. These bots automate repetitive tasks, reduce errors, and improve efficiency, making it easier for our team to focus on more strategic work.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Full-stack Developer & Retail Director at Self Employed",
    desc: "I maintained 2 websites using JavaScript, Html, CSS and Ruby for Shopify. I managed a Shopify website, focusing on theme customization, plugin development, and seamless e-commerce operations.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Vast personal projects Portfolio",
    desc: "Developed and maintained applications using modern full-stack technologies such as TypeScript, React.js, Node.js, NoSQL, Redux.js, Express, Tailwind, Next.js and more.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://github.com/Woolfy25",
    img: "/git.svg",
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/ramon-ciutre/",
    img: "/link.svg",
  },
];
