import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Code,
  Users,
  Wrench,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies for optimal performance, security, and user experience.",
    features: ["Responsive Design", "E-commerce Solutions", "Progressive Web Apps"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
    features: ["iOS & Android", "Cross-Platform", "Enterprise Apps"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design that combines aesthetics with functionality to create intuitive, engaging digital experiences.",
    features: ["User Research", "Prototyping", "Design Systems"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services on AWS, Azure, and Google Cloud for maximum flexibility and reliability.",
    features: ["Cloud Migration", "DevOps", "Infrastructure Management"],
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Bespoke software solutions tailored to your unique business processes and requirements for maximum efficiency.",
    features: ["Enterprise Software", "API Development", "System Integration"],
  },
  {
    icon: Users,
    title: "IT Consulting",
    description:
      "Strategic technology guidance to help you make informed decisions and optimize your IT investments.",
    features: ["Digital Strategy", "Technology Assessment", "Process Optimization"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Comprehensive support services ensuring your systems run smoothly with proactive monitoring and rapid issue resolution.",
    features: ["24/7 Support", "Performance Monitoring", "Security Updates"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="section-padding bg-secondary/30"
      ref={ref}
    >
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive IT Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment and beyond, we provide end-to-end technology 
            services that cover every aspect of your digital transformation journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              className="group card-elevated p-8 hover:shadow-large transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/btn">
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Not sure which service fits your needs? Let's discuss your project.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary inline-flex items-center gap-2"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
