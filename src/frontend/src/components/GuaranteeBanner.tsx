import { RefreshCw, Shield, Star } from "lucide-react";
import { motion } from "motion/react";

const TRUST_POINTS = [
  {
    icon: RefreshCw,
    title: "Hassle-Free Replacement",
    description: "Defective? We replace it — no paperwork, no questions.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Every unit is inspected before leaving our facility.",
  },
  {
    icon: Star,
    title: "Nationwide Service",
    description: "Supported across India with rapid response.",
  },
];

export function GuaranteeBanner() {
  return (
    <section
      id="guarantee"
      data-ocid="guarantee.section"
      className="py-14 sm:py-20"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.58 0.24 26) 0%, oklch(0.50 0.22 22) 60%, oklch(0.44 0.20 20) 100%)",
      }}
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main badge */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 180 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="relative mb-5">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{
                background: "oklch(1.0 0 0 / 0.12)",
                boxShadow: "0 0 0 8px oklch(1.0 0 0 / 0.08)",
              }}
            >
              <Shield
                className="w-12 h-12"
                style={{ color: "oklch(1.0 0 0)" }}
                strokeWidth={1.5}
              />
            </div>
            <div
              className="absolute -top-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
              style={{
                background: "oklch(1.0 0 0)",
                color: "oklch(0.58 0.24 26)",
              }}
            >
              3Y
            </div>
          </div>

          <h2
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-3 leading-tight"
            style={{ color: "oklch(1.0 0 0)" }}
          >
            3 YEAR MANUFACTURER'S
            <br />
            GUARANTEE
          </h2>
          <p
            className="max-w-xl text-base sm:text-lg"
            style={{ color: "oklch(1.0 0 0 / 0.85)" }}
          >
            We stand behind every PESOMA product. If anything goes wrong within
            3 years, we make it right — no questions asked.
          </p>
        </motion.div>

        {/* Trust points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {TRUST_POINTS.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                data-ocid={`guarantee.trust_point.${i + 1}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl"
                style={{ background: "oklch(1.0 0 0 / 0.1)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "oklch(1.0 0 0 / 0.2)" }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color: "oklch(1.0 0 0)" }}
                    strokeWidth={2}
                  />
                </div>
                <h3
                  className="font-display font-semibold text-lg mb-1"
                  style={{ color: "oklch(1.0 0 0)" }}
                >
                  {point.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(1.0 0 0 / 0.8)" }}
                >
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
