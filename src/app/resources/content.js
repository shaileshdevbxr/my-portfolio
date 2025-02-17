import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Shailesh",
  lastName: "Maurya",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "Buxar/Noida",
  languages: ["English", "Hindi"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I share insights on software development, tech trends, and innovative engineering solutions.
    </>

  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/shaileshdevbxr",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/shailesh-maurya-b33643268"
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/shailesh_maurya54?igsh=MTY0cDgxdmxoYnM2ZA==",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:shaileshkumar2000bxr@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software engineer or developer</>,
  subline: (
    <>
      I'm Shailesh, a software developer at <InlineCode>Srishta technology</InlineCode>, where I build scalable and
      <br /> efficient applications. After hours, I work on real world projects and explore new technologies.
    </>

  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "tel:6204918454",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Shailesh Maurya is a software developer with a passion for solving complex
        challenges through clean and efficient code. His work spans web applications, scalable
        systems, and the intersection of software and technology.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Srishta technology",
        timeframe: "2024 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            Optimized applications performance for the Srishta platform, reducing API response times by 50%
            and improving scalability.
          </>,
          <>
            Led the migration to a modern tech stack, enhancing system efficiency and reducing
            deployment time by 50%.
          </>,
        ],

        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2022 - 2024",
        role: "Frontend Developer",
        achievements: [
          <>
            Built and maintained a scalable component library, improving development speed and
            consistency across multiple projects.
          </>,
          <>
            Optimized frontend performance, reducing load times by 35% and enhancing user experience.
          </>,
          <>
            Collaborated with backend teams to implement API integrations, improving data efficiency
            and reducing errors by 20%.
          </>,
        ],

        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "University of ARA",
        description: <>Studied Computer Science with a focus on software development and system architecture.</>,
      },
      {
        name: "Ananya Infotech",
        description: <>Completed advanced courses in full-stack development, cloud computing..</>,
      },
    ],

  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "JavaScript & TypeScript",
        description: <>Proficient in modern JavaScript (ES6+) and TypeScript for scalable and maintainable code.</>,
        images: [],
      },
      {
        title: "React.js & Next.js",
        description: <>Experienced in building high-performance, SEO-friendly web applications using React.js and Next.js.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-04.png",
            alt: "React.js Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Node.js & Express.js",
        description: <>Developing robust backend services and APIs with Node.js and Express.js.</>,
        images: [],
      },
      {
        title: "MySQL & PostgreSQL",
        description: <>Designing and managing relational databases, ensuring optimized queries and performance.</>,
        images: [],
      },
      {
        title: "MongoDB",
        description: <>Working with NoSQL databases to handle dynamic and large-scale applications.</>,
        images: [],
      },

    ],
  },

};

const blog = {
  label: "Blog",
  title: "Writing about developent and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Development and sol projects by ${person.name}`,
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
