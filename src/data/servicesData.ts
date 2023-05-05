export interface Service {
  title: string;
  id: number;
  features: Feature[];
}

interface Feature {
  id: number;
  description: string;
}

export const servicesInformation: Service[] = [
  {
    title: "UI/UX Design",
    id: 1,
    features: [
      {
        id: 1,
        description:
          "Custom website design with a focus on user experience and interface, utilizing Figma to bring your ideas to life.",
      },
      {
        id: 2,
        description:
          "Responsive designs for both desktop and mobile devices, including landing pages, blogs, and more.",
      },
      {
        id: 3,
        description:
          "Regular sharing of prototypes for easy tracking of progress and modifications.",
      },
    ],
  },
  {
    title: "Front End Development",
    id: 2,
    features: [
      {
        id: 1,
        description:
          "Creation of fully responsive websites with Flexbox and CSS Grid.",
      },
      {
        id: 2,
        description:
          "Use of modern technologies like React, TypeScript, SASS, Tailwind and Express for creating a professional website.",
      },
      {
        id: 3,
        description:
          "API integrations, component creation, organized stylesheets, and various frontend functionalities like forms and authentication are implemented to ensure your website is tailored to your needs.",
      },
    ],
  },
  {
    title: "Back End Development",
    id: 3,
    features: [
      {
        id: 1,
        description:
          "Creation of custom API routes and basic authentication with NodeJS, Express, and Firebase.",
      },
      {
        id: 2,
        description:
          "Database entity and table creation using MySQL and Prisma, including complex relationship handling.",
      },
      {
        id: 3,
        description:
          "Deployment of websites and applications using Vercel, Netlify, or custom hosting.",
      },
      {
        id: 4,
        description: "Creation of NoSQL databases using MongoDB and Mongoose.",
      },
    ],
  },
];
