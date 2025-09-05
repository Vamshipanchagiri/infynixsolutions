import { Cog, Code, Cloud, ShieldCheck, BarChart, Server } from 'lucide-react';

export const servicesData = [
  {
    id: 'custom-software',
    icon: Cog,
    title: "Custom Software Engineering",
    items: ["ERP Systems", "SaaS Platforms", "Automation Tools"],
    shortDescription: "We build scalable and robust custom software solutions tailored to your specific business needs.",
    longDescription: "Our custom software engineering services focus on delivering high-quality, scalable, and maintainable applications. We work closely with you from ideation to deployment, ensuring the final product aligns perfectly with your business goals. Whether you need a complex Enterprise Resource Planning (ERP) system, a market-ready Software-as-a-Service (SaaS) platform, or powerful automation tools to streamline your operations, our expert team has you covered.",
    details: [
        {
            title: "Enterprise Resource Planning (ERP)",
            description: "Integrate all facets of an operation, including product planning, development, manufacturing, sales, and marketing, in a single database, application, and user interface."
        },
        {
            title: "Software-as-a-Service (SaaS)",
            description: "Develop and deploy cloud-native applications that are accessible from anywhere, with flexible subscription models and seamless updates."
        },
        {
            title: "Automation Tools",
            description: "Build custom scripts and applications to automate repetitive tasks, reduce human error, and increase overall efficiency in your business processes."
        }
    ]
  },
  {
    id: 'web-mobile-apps',
    icon: Code,
    title: "Web & Mobile Applications",
    items: ["Responsive Websites", "iOS & Android Apps", "Cross-platform Solutions"],
    shortDescription: "Crafting beautiful, responsive, and user-friendly web and mobile applications for a seamless digital experience.",
    longDescription: "In today's digital-first world, a strong online and mobile presence is crucial. We specialize in creating stunning, high-performance web and mobile applications that captivate your audience and drive engagement. From responsive websites that look great on any device to native iOS and Android apps and efficient cross-platform solutions, we deliver digital experiences that are both visually appealing and functionally powerful.",
    details: [
        {
            title: "Responsive Websites",
            description: "Designing and developing websites that provide an optimal viewing experience across a wide range of devices from desktop computers to mobile phones."
        },
        {
            title: "Native iOS & Android Apps",
            description: "Building platform-specific mobile applications that leverage the full power of the underlying operating system for maximum performance and user experience."
        },
        {
            title: "Cross-platform Solutions",
            description: "Using modern frameworks like React Native to build applications that run on both iOS and Android from a single codebase, saving time and resources."
        }
    ]
  },
  {
    id: 'cloud-devops',
    icon: Cloud,
    title: "Cloud & DevOps",
    items: ["Cloud Migration", "CI/CD Pipelines", "Infrastructure Automation"],
    shortDescription: "Leveraging the power of the cloud and DevOps to accelerate your development lifecycle and enhance scalability.",
    longDescription: "Embrace the agility and scalability of the cloud with our expert Cloud & DevOps services. We help you migrate your infrastructure to leading cloud providers like AWS, Azure, and Google Cloud, set up robust Continuous Integration/Continuous Deployment (CI/CD) pipelines for faster release cycles, and automate your infrastructure management for improved reliability and reduced operational overhead. Let us help you build a modern, resilient, and efficient IT backbone.",
    details: [
        {
            title: "Cloud Migration",
            description: "Seamlessly move your applications, data, and infrastructure to the cloud with minimal downtime and disruption, unlocking greater flexibility and cost savings."
        },
        {
            title: "CI/CD Pipelines",
            description: "Automate your build, test, and deployment processes to deliver new features and updates to your users faster and more reliably."
        },
        {
            title: "Infrastructure as Code (IaC)",
            description: "Manage and provision your cloud infrastructure using code, enabling version control, collaboration, and automated, repeatable deployments."
        }
    ]
  },
  {
    id: 'cybersecurity',
    icon: ShieldCheck,
    title: "Cybersecurity Advisory",
    items: ["Risk Assessment", "Data Protection", "Compliance Support"],
    shortDescription: "Protecting your digital assets with comprehensive cybersecurity strategies and proactive risk management.",
    longDescription: "In an era of increasing cyber threats, protecting your business is non-negotiable. Our cybersecurity advisory services provide you with the expertise and tools to safeguard your digital assets. We conduct thorough risk assessments to identify vulnerabilities, implement robust data protection measures to secure your sensitive information, and provide compliance support to help you navigate the complex landscape of data privacy regulations like GDPR and CCPA.",
    details: [
        {
            title: "Risk Assessment",
            description: "Identify, analyze, and evaluate potential security risks to your organization's assets and operations to prioritize mitigation efforts effectively."
        },
        {
            title: "Data Protection",
            description: "Implement a multi-layered security strategy, including encryption, access control, and monitoring, to protect your data from unauthorized access and breaches."
        },
        {
            title: "Compliance Support",
            description: "Navigate complex regulatory requirements with our expert guidance, ensuring your organization meets its legal and ethical obligations for data privacy and security."
        }
    ]
  },
  {
    id: 'ai-data',
    icon: BarChart,
    title: "AI & Data Intelligence",
    items: ["Predictive Analytics", "Business Dashboards", "Machine Learning Models"],
    shortDescription: "Transforming data into actionable insights with advanced AI, machine learning, and business intelligence.",
    longDescription: "Unlock the hidden value in your data with our AI & Data Intelligence services. We help you make smarter, data-driven decisions by leveraging the power of predictive analytics, intuitive business intelligence dashboards, and custom machine learning models. From forecasting future trends to optimizing business processes, our solutions empower you to turn raw data into a strategic asset that drives growth and innovation.",
    details: [
        {
            title: "Predictive Analytics",
            description: "Utilize statistical algorithms and machine learning techniques to analyze historical data and make predictions about future outcomes and trends."
        },
        {
            title: "Business Intelligence Dashboards",
            description: "Create interactive, real-time visualizations of your key performance indicators (KPIs) to monitor business health and facilitate informed decision-making."
        },
        {
            title: "Machine Learning Models",
            description: "Develop and deploy custom machine learning models to solve complex business problems, such as customer segmentation, fraud detection, and recommendation systems."
        }
    ]
  },
  {
    id: 'managed-it',
    icon: Server,
    title: "Managed IT Support",
    items: ["24/7 Monitoring", "Remote Support", "Infrastructure Management"],
    shortDescription: "Reliable, proactive, and comprehensive IT support to keep your business running smoothly around the clock.",
    longDescription: "Focus on your core business while we handle your IT. Our Managed IT Support services offer a proactive approach to technology management, ensuring your systems are always running at peak performance. We provide 24/7 monitoring to detect and resolve issues before they impact your operations, offer expert remote support for your team, and manage your entire IT infrastructure, from servers to endpoints. Enjoy peace of mind with a reliable IT partner by your side.",
    details: [
        {
            title: "24/7 Proactive Monitoring",
            description: "Continuously monitor the health and performance of your IT systems to identify and address potential issues before they become critical problems."
        },
        {
            title: "Help Desk & Remote Support",
            description: "Provide your employees with fast and friendly technical support to resolve their IT issues quickly and efficiently, minimizing downtime and frustration."
        },
        {
            title: "Full Infrastructure Management",
            description: "Take complete responsibility for your IT infrastructure, including servers, networks, and security, ensuring it is secure, up-to-date, and aligned with your business needs."
        }
    ]
  },
];