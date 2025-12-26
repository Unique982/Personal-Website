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
  status?: "completed" | "ongoing" | "pending";
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
    liveUrl:
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
    status: "ongoing",
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
      "https://v0-responsive-sidebar-component-three.vercel.app/analytics-dashboard.png",
    ],
  },

  {
    id: "2",
    slug: "hospital-management-system-mern",
    title: "Hospital Management System (MERN)",
    description:
      "A full-stack hospital system with appointments, billing, and medical reporting.",
    longDescription:
      "The Hospital Management System (HMS) is a comprehensive full‑stack web application designed to automate, streamline, and enhance the everyday operations of a healthcare facility. Built using the MERN stack—which typically includes MongoDB / PostgreSQL, Express.js, React.js, and Node.js—this system provides a centralized platform where hospital staff, doctors, administrators, and patients can interact and manage key healthcare workflows in a user‑friendly, secure, and efficient way. In traditional hospital settings, many administrative tasks such as patient registration, appointment scheduling, record keeping, and report generation are performed manually or using outdated software. Such manual processes are prone to human error, duplication of data, data silos, limited accessibility, and operational delays. The HMS solves these challenges by digitizing processes, consolidating functions into a unified, scalable web application, and enhancing clinical efficiency through real‑time data access. It supports multiple user roles (Admin, Doctor, Nurse) with tailored dashboards and secure authentication. Core modules include Patient Management, Appointment Scheduling, Medical Records, Department & Staff Management, and Billing & Invoicing. The system is deployable to cloud platforms and scalable for performance, making it a reliable tool for modern healthcare operations.",
    image: "/hospital.png",
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
      "Bootstrap",
    ],
    status: "completed",
    features: [
      "User Authentication & Authorization (Admin / Doctor / Patient)",
      "Secure Login & Session Management (JWT / hashed passwords)",
      "Role-based Dashboards and Access Control",
      "Patient Registration & Profile Management",
      "Doctor Profile Creation & Specialty Management",
      "Department Management (Cardiology, Orthopedics, etc.)",
      "Appointment Scheduling Module",
      "View / Cancel / Reschedule Appointments",
      "Medical Record Storage & Access",
      "Prescription Documentation & Review",
      "Manage Users (CRUD operations)",
      "Manage Hospital Departments",
      "Assign Doctors & Staff to Departments",
      "Monitor System Logs & Reports",
      "Generate Analytics & Usage Reports",
      "Doctor Login & Availability Status",
      "View Scheduled Appointments",
      "Access Patient Histories",
      "Record Treatment & Diagnosis",
      "Update Profile & Work Schedule",
      "Patient Registration / Login",
      "Book / Cancel Appointments",
      "View Medical History & Prescriptions",
      "Update Personal / Contact Details",
      "View Available Doctors & Specializations",
      "RESTful API Backend",
      "Responsive UI with React",
      "Secure Data Storage",
      "Error Handling & Validation",
      "Deployment-ready Architecture",
    ],
    githubUrl:
      "https://github.com/Unique982/Hospital-Management-System-MERN-Full-Stack.git",
    screenshots: ["/hospital.png"],
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
    status: "completed",
    githubUrl:
      "https://github.com/Unique982/Hospital-Management-System-Project.git",
    screenshots: ["/hospitalphp.png"],
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
    status: "completed",
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
      "The Restaurant Management System (RMS) is a comprehensive web application designed to automate and simplify restaurant operations. It provides a centralized platform for restaurant owners, managers, and staff to manage day-to-day activities such as order handling, table management, menu updates, billing, and staff assignments. The system is designed to enhance efficiency, reduce manual errors, and improve overall customer experience.\n\nRMS offers a user-friendly interface, ensuring that even staff members with minimal technical expertise can navigate the system easily. The application streamlines communication between front-of-house and back-of-house operations, allowing staff to manage orders, track table availability, and update statuses in real-time. This reduces delays, prevents miscommunication, and ensures timely service.\n\nThe menu management feature allows administrators to add, update, or remove menu items with detailed descriptions, prices, and images. Staff members can take orders efficiently, mark orders as completed, and communicate any special instructions directly through the system. The order management module keeps track of all active orders, allowing staff and managers to monitor progress and avoid confusion during peak hours.\n\nA key component of RMS is the table reservation system. Customers can book tables in advance, and the system automatically tracks table availability, helping restaurants optimize seating and reduce waiting times. The system supports user authentication and role-based access control, enabling admins to have full control, staff to manage daily operations, and customers (if applicable) to make bookings and view menu items.\n\nRMS also provides a robust dashboard that displays analytics and reports, including total sales, most popular dishes, daily orders, and customer activity. These insights assist restaurant owners in making informed business decisions, such as adjusting inventory, planning promotions, and improving service quality. Real-time notifications keep staff updated about new orders, reservations, or changes, ensuring a smooth workflow.",
    image: "/rsm.png",
    techStack: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "React.js",
      "Tailwind CSS",
    ],
    status: "completed",
    features: [
      "User Authentication and Role Management (Admin,Customer)",
      "Menu Management (Add, Update, Delete with descriptions and images)",
      "Table Reservation System with real-time availability",
      "Order Management (Place, Update, Track Orders)",
      "Billing and Invoice Generation",
      "Real-time Notifications for Orders and Reservations",
      "Dashboard with Analytics and Reports",
      "Responsive Design for Desktop, Tablet, and Mobile",
      "Easy-to-use interface for staff with minimal training",
      "Optimized workflows to reduce operational delays and errors",
    ],
    githubUrl: "https://github.com/Unique982/Restaurant-Management-System.git",
    screenshots: ["/rsm.png"],
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
    screenshots: [
      "https://images.unsplash.com/photo-1760199789464-7d3989e22758?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3cyVFMiU4MCU5MXdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
    ],
    status: "completed",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}
