import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Decebal",
  lastName: "Dobrica",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Architect",
  avatar: "/images/avatar.jpg",
  location: "Europe/London", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Romanian"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about software architecture, technology, and share
      thoughts on the intersection of people management and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/decebal",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/decebaldobrica",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/ddonprogramming",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:decebal.dobrica@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Architect and Fractional CTO</>,
  subline: [
    // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
    <p>
      Dynamic technical leader and architect who engineered scalable solutions,
      slashing costs by up to 75% with advanced serverless and
      Infrastructure-as-Code (IAC) strategies.
    </p>,
    // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
    <br />,
    // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
    <p>
      Amplified developer productivity by 300% through strategic tech stack
      overhauls and unified code management.
    </p>,
    // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
    <br />,
    // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
    <p className="mb-2">
      Mobilized high-performing teams to fast-track MVP launches, bringing
      projects to life in as little as three months. Adept in multiple
      programming like{" "}
      <InlineCode>NodeJS, Golang, Rust, ReactJS, and Solidity</InlineCode>, with
      deep roots in cloud architecture and microservices.
    </p>,
    // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
    <br />,
    // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
    <p>
      Driven to cultivate collaborative, adaptive work environments, empowering
      teams with continuous learning, and streamlining processes for maximum
      impact.
    </p>,
  ],
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/decebal-dobrica-2vu7ph",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: [
      // biome-ignore lint/complexity/noUselessFragments: <explanation>
      // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
      <p>
        With a rich tapestry of expertise woven from the threads of blockchain
        development, cloud architecture, and engineering management, Decebal
        Dobrica stands as a paragon of technological leadership. His tenure in
        the tech industry is marked by a consistent track record of driving
        growth and enhancing operational efficiencies across diverse
        organizations.
      </p>,

      // biome-ignore lint/complexity/noUselessFragments: <explanation>
      // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
      <p>
        Decebal's impact as Technical Lead at Breakout Clips was nothing short
        of transformative, achieving an unprecedented 300% increase in developer
        productivity through strategic pruning of the tech stack and adoption of
        trunk development. His forward-thinking approach to monolithic
        repository management exemplifies his ability to streamline processes
        and foster a culture of collaboration.
      </p>,

      // biome-ignore lint/complexity/noUselessFragments: <explanation>
      // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
      <p>
        At Tellimer, Decebal embraced the role of Software Architect with vigor,
        spearheading efforts that culminated in a staggering 75% reduction in
        AWS costs. His mastery over cloud architecture and Infrastructure as
        Code (IaC) is reflective of his commitment to both fiscal responsibility
        and technological advancement. The scope of Decebal's influence extends
        beyond his professional achievements.
      </p>,

      // biome-ignore lint/complexity/noUselessFragments: <explanation>
      // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
      <p>
        He is lauded by colleagues for his leadership qualities—his proactive
        identification of improvement areas and unwavering support for team
        success are frequently highlighted in testimonials. His ability to
        distill complex technical concepts into accessible insights using
        football metaphors showcases his unique pedagogical style.
      </p>,

      // biome-ignore lint/complexity/noUselessFragments: <explanation>
      // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
      <p>
        Decebal's journey also includes roles such as Ethereum PoW Miner, where
        he demonstrated proficiency in maintaining GPU rigs with diverse
        configurations, further underscoring his versatility within the tech
        domain.
      </p>,

      // biome-ignore lint/complexity/noUselessFragments: <explanation>
      // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
      <p>
        His formative years were spent honing skills at notable institutions
        such as Military Highschool, Breaza and Military Technical Academy where
        he pursued Maths and Computer Science.
      </p>,

      // biome-ignore lint/complexity/noUselessFragments: <explanation>
      // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
      <p>
        In addition to his professional pursuits, Decebal is an avid learner and
        educator who has completed multiple courses ranging from Solidity
        Mastery Bootcamp to Linux/Unix Administration Security. His commitment
        to continuous growth is evident not only in his career trajectory but
        also in his dedication to coaching tech leaders and contributing as a
        volunteer for AngelHack.
      </p>,
    ],
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Breakout Clips",
        timeframe: "Mar 2023 - Jul 2024",
        role: "Technical Lead",
        achievements: [
          // biome-ignore lint/complexity/noUselessFragments: <explanation>
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
          <>
            Boosted developer productivity by 300% through smart tech stack
            optimizations.
          </>,
          // biome-ignore lint/complexity/noUselessFragments: <explanation>
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
          <>
            Unified codebase by switching to a single monorepo, enabling better
            code management and a smoother development process.
          </>,
          // biome-ignore lint/complexity/noUselessFragments: <explanation>
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
          <>
            Streamlined tech focus by leading a clean-up of existing
            technologies, allowing the team to concentrate on the most effective
            tools.
          </>,
          // biome-ignore lint/complexity/noUselessFragments: <explanation>
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
          <>
            Simplified collaboration for a team of 15 engineers by moving to
            trunk development, reducing integration hassles and enhancing
            teamwork.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Breakout Clips",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Tellimer",
        timeframe: "Aug 2019 - Mar 2023",
        role: "Software Architect",
        achievements: [
          // biome-ignore lint/complexity/noUselessFragments: <explanation>
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
          <>
            Orchestrated rapid MVP launches by designing tech stacks and
            mobilizing skilled teams for projects like "Parsel.io" and
            "Scriber.to," demonstrating expertise by delivering MVPs in three
            and six months, respectively.
          </>,
          // biome-ignore lint/complexity/noUselessFragments: <explanation>
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
          <>
            Optimized cost efficiency by streamlining operations using
            Infrastructure as Code (IAC) and serverless technologies, slashing
            AWS expenses by 75%.
          </>,
          // biome-ignore lint/complexity/noUselessFragments: <explanation>
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
          <>
            Accelerated professional growth by empowering colleagues through
            training in Infrastructure as Code (IAC) and serverless
            technologies.
          </>,
          // biome-ignore lint/complexity/noUselessFragments: <explanation>
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
          <>
            Cultivated high-performing teams of over 25 engineers as a seasoned
            tech leader, showcasing expertise in team building and project
            delivery.
          </>,
          // biome-ignore lint/complexity/noUselessFragments: <explanation>
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
          <>
            Demonstrated expertise in cutting-edge technologies with proficiency
            in NodeJS, ReactJS, Rust, Golang, Postgres, and AWS.
          </>,
        ],
        images: [],
      },
      {
        company: "Flyt (Acq. by Just Eat Takeaway.com)",
        timeframe: "Mar 2019 - Aug 2019",
        role: "Software Engineer",
        achievements: [
          // biome-ignore lint/complexity/noUselessFragments: <explanation>
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
          <>
            Adapted to industry evolution by navigating the rapidly changing
            food delivery and service sector, demonstrating continuous learning
            and adaptability.
          </>,
        ],
        images: [],
      },
      {
        company: "Funeral Zone",
        timeframe: "Jun 2015 - Mar 2019",
        role: "Software Engineer",
        achievements: [
          // biome-ignore lint/complexity/noUselessFragments: <explanation>
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
          <>
            Optimized and elevated a suite of microservices for a mobile app and
            metrics platform, leveraging advanced technologies for GraphQL,
            Graph Databases, and Python.
          </>,
          // biome-ignore lint/complexity/noUselessFragments: <explanation>
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
          <>
            Pioneered the development of an internal content moderation system
            and custom CMS, streamlining content publishing.
          </>,
        ],
        images: [],
      },
      {
        company: "eMag",
        timeframe: "Nov 2013 - Jun 2015",
        role: "Software Engineer",
        achievements: [
          // biome-ignore lint/complexity/noUselessFragments: <explanation>
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
          <>
            Contributed to the eMag team that delivered record-breaking Black
            Friday sales in Romania, achieving an average of 100 products
            ordered per second within the first 4 minutes.
          </>,
        ],
        images: [],
      },
      {
        company: "eRepublik Labs Limited",
        timeframe: "Aug 2013 - Oct 2013",
        role: "Software Engineer",
        achievements: [
          // biome-ignore lint/complexity/noUselessFragments: <explanation>
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
          <>
            As a dedicated Backend Support Engineer, I have played a pivotal
            role in a dynamic team of five, driving the success of engaging
            events through innovative game features.
          </>,
        ],
        images: [],
      },
      {
        company: "H Grup IT Expert",
        timeframe: "Jan 2013 - Aug 2013",
        role: "Software Engineer",
        achievements: [
          // biome-ignore lint/complexity/noUselessFragments: <explanation>
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
          <>
            As an accomplished software developer and team leader, I have
            successfully navigated complex projects that demonstrate my
            technical expertise and innovative approach to problem-solving.
          </>,
        ],
        images: [],
      },
      {
        company: "Agile Outsourcing",
        timeframe: "Nov 2012 - Jan 2013",
        role: "Software Engineer",
        achievements: [
          // biome-ignore lint/complexity/noUselessFragments: <explanation>
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
          <>
            As a software developer, I have navigated complex projects that
            demonstrate my technical expertise and innovative approach to
            problem-solving in the adTech industry.
          </>,
        ],
        images: [],
      },
      {
        company: "ContentSpeed",
        timeframe: "Oct 2010 - Oct 2012",
        role: "Software Engineer",
        achievements: [
          // biome-ignore lint/complexity/noUselessFragments: <explanation>
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
          <>
            As a software developer, I have built complex e-commerce solutions
            for b2b and b2c startups in Romania.
          </>,
          // biome-ignore lint/complexity/noUselessFragments: <explanation>
          // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
          <>
            I helped the company develop a new product department and grow from
            a team of 6 into an office of over 50 people.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Military Technical Academy",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Military HighSchool, Breaza",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "NodeJs",
        description: <></>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Generative AI.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Proof of Skill and Proof of Concepts by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
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
    // {
    //   src: "/images/gallery/img-14.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
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
      src: "/images/gallery/img-11.webp",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ethglobal-certificate.jpg",
      alt: "document",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/hackerrank-certificate.jpg",
      alt: "document",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
