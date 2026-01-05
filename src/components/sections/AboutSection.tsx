import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Shield, Zap, Users, Award } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Reliability",
    description: "Delivering consistent, dependable solutions that your business can count on, every time.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Leveraging cutting-edge technologies to solve complex challenges and create competitive advantages.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Working as an extension of your team, deeply invested in your long-term success.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Maintaining the highest standards in code quality, security, and performance.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Trusted Technology Partner
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            For over a decade, Infynix Solutions has been at the forefront of digital 
            transformation, helping businesses navigate the evolving technology landscape 
            with confidence and clarity.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-elevated p-8 md:p-10"
          >
            <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower businesses with innovative, reliable, and scalable technology 
              solutions that drive sustainable growth. We are committed to understanding 
              each client's unique challenges and delivering tailored solutions that 
              create measurable business value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-elevated p-8 md:p-10"
          >
            <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the most trusted IT services partner globally, recognized for our 
              technical excellence, customer-centric approach, and commitment to innovation. 
              We envision a future where technology seamlessly enables business success 
              for organizations of all sizes.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Why Choose Infynix Solutions?
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine deep technical expertise with genuine partnership to deliver 
            solutions that work for your business.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="group p-6 rounded-2xl bg-secondary/30 border border-border/50 hover:bg-card hover:border-border hover:shadow-medium transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
