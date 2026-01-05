import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", showText = true, size = "md" }: LogoProps) => {
  const sizes = {
    sm: { icon: 28, text: "text-lg" },
    md: { icon: 36, text: "text-xl" },
    lg: { icon: 48, text: "text-2xl" },
  };

  const { icon, text } = sizes[size];

  return (
    <motion.div
      className={`flex items-center gap-2.5 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo Icon - Abstract infinity/tech symbol */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(215, 25%, 27%)" />
            <stop offset="100%" stopColor="hsl(215, 20%, 45%)" />
          </linearGradient>
        </defs>
        
        {/* Abstract tech icon - interconnected nodes forming infinity-like shape */}
        <g>
          {/* Left node */}
          <circle cx="12" cy="24" r="6" fill="url(#logoGradient)" />
          {/* Right node */}
          <circle cx="36" cy="24" r="6" fill="url(#logoGradient)" />
          {/* Top node */}
          <circle cx="24" cy="12" r="4" fill="url(#logoGradient)" opacity="0.7" />
          {/* Bottom node */}
          <circle cx="24" cy="36" r="4" fill="url(#logoGradient)" opacity="0.7" />
          
          {/* Connecting lines */}
          <path
            d="M16 21 L20 14"
            stroke="url(#logoGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M28 14 L32 21"
            stroke="url(#logoGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16 27 L20 34"
            stroke="url(#logoGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M28 34 L32 27"
            stroke="url(#logoGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M18 24 L30 24"
            stroke="url(#logoGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>
      </svg>

      {showText && (
        <span className={`font-semibold tracking-tight text-foreground ${text}`}>
          Infynix
          <span className="text-muted-foreground font-normal"> Solutions</span>
        </span>
      )}
    </motion.div>
  );
};

export default Logo;
