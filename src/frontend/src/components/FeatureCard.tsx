import {
  Anchor,
  Droplets,
  Expand,
  Grid3x3,
  Layers,
  type LucideIcon,
  Shield,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";

const ICON_MAP: Record<string, LucideIcon> = {
  Expand,
  Layers,
  Shield,
  Grid3x3,
  Sparkles,
  Wrench,
  Droplets,
  Workflow,
  Hook: Anchor,
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
  accentColor?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  index,
  accentColor = "oklch(0.62 0.22 29)",
}: FeatureCardProps) {
  const Icon = ICON_MAP[icon] ?? Sparkles;

  return (
    <motion.div
      data-ocid={`features.card.${index + 1}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-card rounded-2xl p-6 card-elevated group cursor-default"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-smooth group-hover:scale-110"
        style={{
          background: `${accentColor}18`,
        }}
      >
        <Icon
          className="w-6 h-6 transition-smooth"
          style={{ color: accentColor }}
          strokeWidth={2}
        />
      </div>

      <h3 className="font-display font-semibold text-foreground text-lg mb-2 leading-snug">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
