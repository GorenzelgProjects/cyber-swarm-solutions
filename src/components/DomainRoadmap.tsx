import { motion } from 'framer-motion';
import { Shield, Scale, FlaskConical } from 'lucide-react';

interface Domain {
  id: string;
  icon: React.ReactNode;
  title: string;
  status: 'active' | 'research' | 'future';
  description: string;
}

const domains: Domain[] = [
  {
    id: 'cyber',
    icon: <Shield className="w-6 h-6" />,
    title: 'Cybersecurity',
    status: 'active',
    description: 'Current active domain. Automating Red Teaming and NIS2 compliance auditing.',
  },
  {
    id: 'legal',
    icon: <Scale className="w-6 h-6" />,
    title: 'LegalTech',
    status: 'research',
    description: 'Research phase. Synthesizing large case files and compliance logic.',
  },
  {
    id: 'biotech',
    icon: <FlaskConical className="w-6 h-6" />,
    title: 'Biotech',
    status: 'future',
    description: 'Future exploration. Managing complex experimental data pipelines.',
  },
];

const statusStyles = {
  active: {
    bg: 'bg-sage/10',
    border: 'border-sage/30',
    iconBg: 'bg-sage',
    iconText: 'text-sage-foreground',
    dot: 'bg-sage',
    label: 'Active',
  },
  research: {
    bg: 'bg-primary/5',
    border: 'border-primary/20',
    iconBg: 'bg-primary/10',
    iconText: 'text-primary',
    dot: 'bg-primary',
    label: 'Research',
  },
  future: {
    bg: 'bg-muted/50',
    border: 'border-border',
    iconBg: 'bg-muted',
    iconText: 'text-muted-foreground',
    dot: 'bg-muted-foreground/50',
    label: 'Future',
  },
};

export const DomainRoadmap = () => {
  return (
    <div className="relative">
      {/* Connection line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sage via-primary/30 to-muted-foreground/20 hidden md:block" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {domains.map((domain, index) => {
          const style = statusStyles[domain.status];
          
          return (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative ${style.bg} ${style.border} border rounded-xl p-6 text-center`}
            >
              {/* Status indicator */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-medium rounded-full ${style.bg} ${style.border} border`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                  {style.label}
                </span>
              </div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${style.iconBg} ${style.iconText} mb-4 mt-2`}>
                {domain.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">{domain.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{domain.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default DomainRoadmap;
