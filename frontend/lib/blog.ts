export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  description: string;
  longDescription: string;
  image: string;
  subImage: string;
  date: string;
  readTime: string;
  category: string;
  publishedAt: string;
}

export const post: Blog[] = [
  {
    id: "1",
    title: "How AI Is Shaping Modern Web Development in 2025",
    slug: "ai-shaping-modern-web-development-2025",
    excerpt:
      "AI is transforming how modern web applications are built, optimized, and scaled in 2025.",
    description:
      "A detailed analysis of AI integration in modern web development, including personalization, performance optimization, and automation.",
    longDescription: `
Artificial Intelligence (AI) has become a game-changer in web development by 2025. Modern applications are leveraging AI in multiple ways to enhance user experience, reduce development time, and improve performance.

Some key AI integrations include:
- **Personalized content recommendations** that adapt in real-time based on user behavior.
- **Automated testing and debugging**, helping developers catch errors faster.
- **Intelligent chatbots** for customer support.
- **Performance optimization tools** that automatically analyze and improve page load times.

AI is no longer an experimental technology; it’s a necessity. Developers need to learn AI-driven frameworks, libraries, and best practices to remain competitive in 2025.
`,
    date: "Jan 10, 2025",
    publishedAt: "2025-01-10",
    readTime: "8 min read",
    category: "AI",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee9814?auto=format&fit=crop&w=800&q=80",
    subImage:
      "https://images.unsplash.com/photo-1612832021232-c8a5f71f2c0d?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: "2",
    title: "Why Node.js Is Still the Best Backend Choice in 2025",
    slug: "nodejs-best-backend-choice-2025",
    excerpt:
      "Node.js remains a powerful backend technology due to its scalability and performance.",
    description:
      "Explore why Node.js continues to dominate backend development, offering speed, scalability, and robust ecosystem.",
    longDescription: `
Node.js is widely regarded as the top backend framework in 2025. Its **event-driven, non-blocking I/O model** makes it ideal for building fast, scalable applications.

Key advantages:
- **Scalability**: Handles multiple concurrent connections efficiently.
- **Massive package ecosystem (npm)**: Offers reusable modules and libraries.
- **Full-stack JavaScript**: Enables seamless integration with frontend frameworks like React and Vue.
- **Community support**: Strong developer community keeps it updated with modern patterns.

Node.js is perfect for building APIs, real-time chat applications, microservices, and serverless functions. Companies continue to adopt it due to faster development cycles and reduced operational costs.
`,
    date: "Feb 5, 2025",
    publishedAt: "2025-02-05",
    readTime: "9 min read",
    category: "Backend",
    image: "/images/blog2.png",
    subImage: "/images/blog2-sub.png",
  },

  {
    id: "3",
    title: "Frontend vs Backend Development: Career Guide 2025",
    slug: "frontend-vs-backend-career-guide-2025",
    excerpt:
      "Choosing between frontend and backend development depends on your skills and interests.",
    description:
      "A comprehensive career guide helping developers decide whether to specialize in frontend or backend development in 2025.",
    longDescription: `
In 2025, the software industry offers strong opportunities for both frontend and backend developers. Making the right choice depends on your **skills, interests, and career goals**.

**Frontend Development:**
- Focus on UI/UX, performance optimization, accessibility, and responsive design.
- Work with frameworks like React, Vue, and Angular.
- Skills: HTML, CSS, JavaScript, TypeScript, and design principles.

**Backend Development:**
- Handle servers, databases, APIs, authentication, and business logic.
- Work with Node.js, Python, Go, or Java.
- Skills: API design, SQL/NoSQL databases, security, and scaling applications.

Choosing the right path early helps focus learning, portfolio building, and career growth.
`,
    date: "Mar 1, 2025",
    publishedAt: "2025-03-01",
    readTime: "7 min read",
    category: "Career",
    image: "/images/blog3.png",
    subImage: "/images/blog3-sub.png",
  },

  {
    id: "4",
    title: "REST API Best Practices Every Developer Should Follow",
    slug: "rest-api-best-practices-2025",
    excerpt:
      "Clean and secure REST APIs are crucial for scalable applications.",
    description:
      "Learn how to design REST APIs that are secure, scalable, and maintainable in 2025.",
    longDescription: `
REST APIs are critical for connecting modern frontend and backend systems. By 2025, **best practices** ensure that APIs remain reliable, maintainable, and secure.

Key practices include:
- **Use proper HTTP methods** (GET, POST, PUT, DELETE).
- **Implement authentication & authorization** securely.
- **Version your API** to prevent breaking changes.
- **Clear and concise documentation** for developers.
- **Meaningful status codes** to indicate success, errors, or redirects.

Following these practices reduces bugs, improves performance, and enhances collaboration across development teams.
`,
    date: "Mar 20, 2025",
    publishedAt: "2025-03-20",
    readTime: "6 min read",
    category: "API",
    image: "/images/blog4.png",
    subImage: "/images/blog4-sub.png",
  },

  {
    id: "5",
    title: "Automation Tools That Save Developers Time in 2025",
    slug: "automation-tools-for-developers-2025",
    excerpt:
      "Automation tools help developers reduce repetitive tasks and increase efficiency.",
    description:
      "Discover essential automation tools and workflows that boost developer productivity in 2025.",
    longDescription: `
Automation is a key factor in increasing development efficiency in 2025. Developers use tools like:

- **CI/CD Pipelines**: Automate testing, building, and deployment.
- **Task schedulers & workflow automation**: Reduce repetitive tasks.
- **Monitoring & alerting systems**: Quickly detect issues in production.

Automation reduces human error, accelerates feature releases, and frees developers to focus on problem-solving and innovation.
`,
    date: "Apr 8, 2025",
    publishedAt: "2025-04-08",
    readTime: "7 min read",
    category: "Automation",
    image: "/images/blog5.png",
    subImage: "/images/blog5-sub.png",
  },

  {
    id: "6",
    title: "Clean Code Principles for Scalable Applications",
    slug: "clean-code-principles-scalable-apps-2025",
    excerpt:
      "Writing clean code makes applications easier to maintain and scale.",
    description:
      "Essential clean code principles that every developer should follow to maintain scalable and sustainable software.",
    longDescription: `
Clean code is vital for building software that is **maintainable, readable, and scalable**. In 2025, teams prioritize:

- **Meaningful naming conventions** for variables, functions, and classes.
- **Small, modular functions** for reusability.
- **Proper documentation** for team collaboration.
- **Consistent structure** across projects to reduce technical debt.

By following clean code principles, teams reduce bugs, enhance collaboration, and ensure long-term project sustainability.
`,
    date: "May 2, 2025",
    publishedAt: "2025-05-02",
    readTime: "10 min read",
    category: "Software",
    image: "/images/blog6.png",
    subImage: "/images/blog6-sub.png",
  },
];

export function getAllBlog(): Blog[] {
  return [...post].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getBlogPostBySlug(slug: string): Blog | undefined {
  return post.find((post) => post.slug === slug);
}
