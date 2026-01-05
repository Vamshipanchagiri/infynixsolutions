import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  Upload,
  X,
  Coffee,
  TrendingUp,
  Heart,
  GraduationCap,
  CheckCircle,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "@/hooks/use-toast";

const openPositions = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    location: "Remote / Hybrid",
    type: "Full-time",
    department: "Engineering",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    location: "Remote",
    type: "Full-time",
    department: "Design",
  },
  {
    id: 3,
    title: "Cloud Solutions Architect",
    location: "On-site",
    type: "Full-time",
    department: "Engineering",
  },
  {
    id: 4,
    title: "Project Manager",
    location: "Hybrid",
    type: "Full-time",
    department: "Operations",
  },
];

const benefits = [
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible hours, remote options, and generous PTO",
  },
  {
    icon: TrendingUp,
    title: "Growth & Learning",
    description: "Annual learning budget and career development programs",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs",
  },
  {
    icon: GraduationCap,
    title: "Mentorship",
    description: "Learn from industry experts and grow your skills",
  },
];

const CareersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null as File | null,
  });
  const { toast } = useToast();

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Application Submitted!",
      description: `Thank you for applying for ${selectedJob}. We'll review your application and get back to you soon.`,
    });
    
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "", resume: null });
    setSelectedJob(null);
  };

  return (
    <>
      <section id="careers" className="section-padding bg-background" ref={ref}>
        <div className="container-max">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
              Careers
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Join Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Build your career with a team that values innovation, collaboration, 
              and continuous growth. We're always looking for talented individuals 
              to join our journey.
            </p>
          </motion.div>

          {/* Why Work With Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold text-foreground text-center mb-10">
              Why Work With Us
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-secondary/30 border border-border/50"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Open Positions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-foreground text-center mb-10">
              Open Positions
            </h3>
            <div className="space-y-4 max-w-3xl mx-auto">
              {openPositions.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="card-elevated p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {job.title}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleApply(job.title)}
                    className="btn-primary shrink-0"
                  >
                    Apply Now
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/20 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-2xl p-8 max-w-md w-full shadow-large border border-border"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-foreground">
                  Apply for {selectedJob}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Resume
                  </label>
                  <label className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary/50 transition-colors">
                    <Upload className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {formData.resume ? formData.resume.name : "Upload your resume"}
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) =>
                        setFormData({ ...formData, resume: e.target.files?.[0] || null })
                      }
                    />
                  </label>
                </div>

                <Button type="submit" className="w-full btn-primary">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Submit Application
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CareersSection;
