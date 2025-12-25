export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "edtech-saas-lms",
    title: "EdTech – SaaS Learning Management Platform",
    description:
      "A SaaS-based learning management system with role-based access and secure learning features.",
    longDescription:
      "EdTech is a modern SaaS Learning Management Platform focused on scalability and security. It provides role-based user and institute management, secure course enrollment, protected learning content, and JWT-based RESTful APIs.",
    image:
      "https://v0-responsive-sidebar-component-three.vercel.app/analytics-dashboard.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT",
      "Tailwind CSS",
    ],
    features: [
      "Role-based user and institute management",
      "Secure course enrollment",
      "Protected learning content",
      "JWT-based authentication",
      "RESTful API architecture",
      "Scalable SaaS platform",
    ],
    githubUrl: "https://github.com/Unique982/Saas-EdTech-Backend.git",
    screenshots: [
      "https://picsum.photos/seed/edtech1/1200/700",
      "https://picsum.photos/seed/edtech2/1200/700",
    ],
  },

  {
    id: "2",
    slug: "hospital-management-system-mern",
    title: "Hospital Management System (MERN)",
    description:
      "A full-stack hospital system with appointments, billing, and medical reporting.",
    longDescription:
      "A MERN-based Hospital Management System supporting Admin, Doctor, and Nurse roles. Features include appointment scheduling, billing management, secure authentication, and detailed medical reports.",
    image: "/hospital.png",
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
      "Bootstrap",
    ],
    features: [
      "Role-based access (Admin, Doctor, Nurse)",
      "Appointment scheduling",
      "Billing system",
      "Medical reporting",
      "Secure authentication",
      "Dashboard for staff",
    ],
    githubUrl:
      "https://github.com/Unique982/Hospital-Management-System-MERN-Full-Stack.git",
    screenshots: [
      "https://picsum.photos/seed/hospital1/1200/700",
      "https://picsum.photos/seed/hospital2/1200/700",
    ],
  },

  {
    id: "3",
    slug: "hospital-management-system-php",
    title: "Hospital Management System (PHP)",
    description:
      "A PHP-based hospital system with doctor, nurse, and admin roles.",
    longDescription:
      "This PHP Hospital Management System includes login for doctors, nurses, and admins with features like appointments, prescriptions, and billing.",
    image: "/hospitalphp.png",
    techStack: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
    features: [
      "Doctor, Nurse, Admin login",
      "Appointment management",
      "Prescription system",
      "Billing module",
      "Simple authentication",
    ],
    githubUrl:
      "https://github.com/Unique982/Hospital-Management-System-Project.git",
    screenshots: ["https://picsum.photos/seed/phphospital/1200/700"],
  },

  {
    id: "4",
    slug: "blog-management-system",
    title: "Blog Management System",
    description:
      "A blog platform with JWT authentication and role-based dashboards.",
    longDescription:
      "A full-stack Blog Management System supporting post CRUD, commenting, JWT authentication, and separate admin/user dashboards.",
    image: "blog.png",
    techStack: ["Node.js", "Express.js", "MongoDB", "JWT", "React.js"],
    features: [
      "Post CRUD operations",
      "Comment system",
      "JWT-based authentication",
      "Admin & user dashboards",
      "Secure REST APIs",
    ],
    githubUrl: "https://github.com/Unique982/Blog-Management-System.git",
    screenshots: ["https://picsum.photos/seed/blog1/1200/700"],
  },
  {
    id: "6",
    slug: "restaurant-management-system-mern",
    title: "Restaurant Management System (MERN + MySQL)",
    description:
      "A full-stack restaurant management system built with Next.js, Node.js, Express, and MySQL.",
    longDescription:
      "This full-stack Restaurant Management System includes login for managers, chefs, waiters, and admins. Features include table booking, order management, menu management, billing, and invoice generation. Built with Next.js frontend and Node.js + Express backend connected to MySQL database.",
    image: "/rsm.png",
    techStack: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "React.js",
      "Tailwind CSS",
    ],
    features: [
      "Customer, Admin login",
      "Table booking system",
      "Order management",
      "Menu management",
      "Billing & invoice generation",
      "JWT authentication",
      "RESTful APIs with Express.js",
      "Responsive UI with Next.js & Tailwind CSS",
    ],
    githubUrl: "https://github.com/Unique982/Restaurant-Management-System.git",
    screenshots: [
      "https://picsum.photos/seed/restaurant-mern1/1200/700",
      "https://picsum.photos/seed/restaurant-mern2/1200/700",
    ],
  },
  {
    id: "7",
    slug: "online-news-portal",
    title: "Online News Portal System",
    description: "A responsive news portal with reporter and admin roles.",
    longDescription:
      "An Online News Portal System featuring role-based access for reporters and admins, customizable frontend, and fully responsive UI.",
    image:
      "https://images.unsplash.com/photo-1760199789464-7d3989e22758?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3cyVFMiU4MCU5MXdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
    techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    features: [
      "Reporter & Admin roles",
      "News post management",
      "Responsive UI",
      "Category-based content",
      "Custom frontend",
    ],
    githubUrl: "https://github.com/Unique982/Online-News-Portal-System.git",
    screenshots: ["https://picsum.photos/seed/newsportal/1200/700"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}
