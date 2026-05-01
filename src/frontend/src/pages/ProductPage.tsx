import { FeatureCard } from "@/components/FeatureCard";
import { GuaranteeBanner } from "@/components/GuaranteeBanner";
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { PESOMA_PRODUCT } from "@/types/product";
import {
  Bath,
  ChefHat,
  ChevronDown,
  Lock,
  Package,
  RotateCcw,
  ShoppingCart,
  Star,
  Truck,
  UtensilsCrossed,
  WashingMachine,
} from "lucide-react";
import { motion } from "motion/react";
import { Suspense, lazy } from "react";

const ThreeOrganizer = lazy(() =>
  import("@/components/ThreeOrganizer").then((m) => ({
    default: m.ThreeOrganizer,
  })),
);

const USES = [
  { label: "Kitchen", icon: ChefHat },
  { label: "Bathroom", icon: Bath },
  { label: "Pantry", icon: UtensilsCrossed },
  { label: "Laundry", icon: WashingMachine },
];

const TRUST_ROW = [
  { icon: Truck, label: "Free Delivery Available" },
  { icon: RotateCcw, label: "Easy Returns" },
  { icon: Lock, label: "Secure Payment" },
];

const AMAZON_LINK =
  "https://www.amazon.in/PESOMA-Organizer-Adjustable-Expandable-Professional/dp/B0G4468CBL";

export default function ProductPage() {
  const product = PESOMA_PRODUCT;

  return (
    <Layout cartLink={AMAZON_LINK}>
      {/* ═══════════ HERO ═══════════ */}
      <section
        data-ocid="hero.section"
        className="relative min-h-screen flex flex-col overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.14 0.03 22) 0%, oklch(0.18 0.025 30) 50%, oklch(0.12 0.04 20) 100%)",
        }}
      >
        {/* Decorative radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 60% 40%, oklch(0.62 0.22 29 / 0.12) 0%, transparent 70%)",
          }}
        />

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 flex-1 flex flex-col lg:flex-row items-center gap-10 py-16 lg:py-20 relative z-10">
          {/* Text content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left min-w-0 order-2 lg:order-1">
            {/* Guarantee badge */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              data-ocid="hero.guarantee_badge"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 mb-6 font-semibold text-sm"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.65 0.22 32) 0%, oklch(0.56 0.24 24) 100%)",
                color: "oklch(1.0 0 0)",
                boxShadow:
                  "0 0 0 3px oklch(0.62 0.22 29 / 0.3), 0 8px 20px oklch(0.62 0.22 29 / 0.4)",
              }}
            >
              <span className="text-lg">🛡️</span>3 YEAR GUARANTEE — BACKED BY
              HOME ESSENTIALS
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-display font-bold leading-tight mb-3"
              style={{
                color: "oklch(0.98 0 0)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
              }}
            >
              PESOMA Under Sink
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.75 0.22 36) 0%, oklch(0.62 0.22 29) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Organizer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg sm:text-xl mb-3 font-medium"
              style={{ color: "oklch(0.7 0.02 22)" }}
            >
              2-Tier Expandable Cabinet Shelf Organizer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="text-sm sm:text-base mb-6 max-w-md leading-relaxed"
              style={{ color: "oklch(0.6 0.015 22)" }}
            >
              Adjustable 38–65 cm width, rust-proof carbon steel frame, no tools
              required. Reclaim your cabinet space in minutes.
            </motion.p>

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="flex items-center gap-2 mb-8"
            >
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star
                    key={n}
                    className="w-4 h-4"
                    style={{
                      fill:
                        n <= 4
                          ? "oklch(0.72 0.18 55)"
                          : "oklch(0.72 0.18 55 / 0.5)",
                      color: "oklch(0.72 0.18 55)",
                    }}
                  />
                ))}
              </div>
              <span
                className="text-sm font-semibold"
                style={{ color: "oklch(0.8 0.02 22)" }}
              >
                {product.rating} ({product.reviewCount.toLocaleString()}{" "}
                reviews)
              </span>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <a
                href={AMAZON_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.add_to_cart_button"
              >
                <Button
                  size="lg"
                  className="btn-3d-orange font-bold text-base px-8 py-6 rounded-xl flex items-center gap-2.5"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Shop on Amazon
                </Button>
              </a>
              <a href="#features" data-ocid="hero.explore_link">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-sm font-medium rounded-xl flex items-center gap-1.5 px-6 py-6"
                  style={{ color: "oklch(0.7 0.02 22)" }}
                >
                  Explore Features
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </a>
            </motion.div>

            {/* Use badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap gap-2 mt-8 justify-center lg:justify-start"
            >
              {USES.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{
                    background: "oklch(1.0 0 0 / 0.08)",
                    color: "oklch(0.75 0.02 22)",
                    border: "1px solid oklch(1.0 0 0 / 0.12)",
                  }}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-sm lg:max-w-xl min-h-[340px] sm:min-h-[440px] lg:min-h-[520px] rounded-3xl overflow-hidden order-1 lg:order-2"
            style={{ background: "oklch(0.18 0.03 24 / 0.8)" }}
            data-ocid="hero.three_canvas"
          >
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center min-h-[340px]">
                  <Skeleton className="w-full h-full rounded-3xl" />
                </div>
              }
            >
              <ThreeOrganizer />
            </Suspense>
            <p
              className="text-center text-xs pb-3 -mt-6 relative z-10"
              style={{ color: "oklch(0.5 0.02 22)" }}
            >
              Drag to rotate · Interactive 3D view
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          aria-hidden
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Number.POSITIVE_INFINITY }}
          >
            <ChevronDown
              className="w-5 h-5"
              style={{ color: "oklch(0.5 0.02 22)" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════ GUARANTEE BANNER ═══════════ */}
      <GuaranteeBanner />

      {/* ═══════════ FEATURES ═══════════ */}
      <section
        id="features"
        data-ocid="features.section"
        className="section-tinted py-16 sm:py-24"
      >
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-12"
          >
            <Badge
              variant="secondary"
              className="mb-4 text-xs font-semibold uppercase tracking-widest"
            >
              Built Different
            </Badge>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
              Why Choose PESOMA?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
              Every detail engineered to last — from the rust-proof frame to the
              snap-fit dividers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {product.features.map((feature, i) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SPECS ═══════════ */}
      <section
        id="specs"
        data-ocid="specs.section"
        className="section-light py-16 sm:py-24"
      >
        <div className="container max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-12"
          >
            <Badge
              variant="secondary"
              className="mb-4 text-xs font-semibold uppercase tracking-widest"
            >
              Details
            </Badge>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
              Product Specifications
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Specs table */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="bg-card rounded-2xl card-elevated overflow-hidden"
              data-ocid="specs.table"
            >
              <div className="px-6 py-4 border-b border-border">
                <h3 className="font-display font-semibold text-foreground flex items-center gap-2">
                  <Package className="w-4 h-4 text-accent-orange" />
                  Technical Details
                </h3>
              </div>
              <div className="divide-y divide-border">
                {product.specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    data-ocid={`specs.row.${i + 1}`}
                    className="flex items-center justify-between px-6 py-3.5"
                  >
                    <span className="text-sm text-muted-foreground font-medium">
                      {spec.label}
                    </span>
                    <span className="text-sm text-foreground font-semibold tabular-nums">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Package contents + use badges */}
            <div className="flex flex-col gap-5">
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="bg-card rounded-2xl card-elevated p-6"
                data-ocid="specs.package_contents"
              >
                <h3 className="font-display font-semibold text-foreground flex items-center gap-2 mb-4">
                  <Package className="w-4 h-4 text-accent-orange" />
                  Package Contents
                </h3>
                <ul className="space-y-2">
                  {[
                    "Steel Frame × 1",
                    "Adjustable Drawers × 2",
                    "Side Hooks × 4",
                    "Hanging Cup × 1",
                    "Removable Dividers × 2",
                  ].map((item, i) => (
                    <li
                      key={item}
                      data-ocid={`specs.package_item.${i + 1}`}
                      className="flex items-center gap-2.5 text-sm"
                    >
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                        style={{
                          background: "oklch(0.62 0.22 29 / 0.12)",
                          color: "oklch(0.62 0.22 29)",
                        }}
                      >
                        ✓
                      </span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Multi-use badges */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-2xl card-elevated p-6"
                data-ocid="specs.use_cases"
              >
                <h3 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-widest">
                  Perfect For
                </h3>
                <div className="flex flex-wrap gap-2">
                  {USES.map(({ label, icon: Icon }, i) => (
                    <motion.span
                      key={label}
                      data-ocid={`specs.use_badge.${i + 1}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 + i * 0.08 }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.65 0.22 32 / 0.12) 0%, oklch(0.58 0.24 26 / 0.08) 100%)",
                        color: "oklch(0.55 0.22 28)",
                        border: "1px solid oklch(0.62 0.22 29 / 0.25)",
                      }}
                    >
                      <Icon className="w-4 h-4" />
                      {label}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section data-ocid="cta.section" className="section-dark py-16 sm:py-24">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Guarantee pill */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-6"
              style={{
                background: "oklch(0.62 0.22 29 / 0.2)",
                color: "oklch(0.75 0.20 32)",
                border: "1px solid oklch(0.62 0.22 29 / 0.35)",
              }}
            >
              🛡️ 3-Year Manufacturer's Guarantee Included
            </div>

            <h2
              className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight"
              style={{ color: "oklch(0.97 0 0)" }}
            >
              Ready to Transform
              <br />
              Your Cabinet Space?
            </h2>
            <p
              className="text-base sm:text-lg mb-8 max-w-lg mx-auto"
              style={{ color: "oklch(0.6 0.015 22)" }}
            >
              Join 2,800+ happy customers. Ships directly from Amazon India with
              fast delivery.
            </p>

            <a
              href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="cta.shop_amazon_button"
            >
              <Button
                size="lg"
                className="btn-3d-orange font-bold text-lg px-10 py-7 rounded-xl flex items-center gap-3 mx-auto"
              >
                <ShoppingCart className="w-5 h-5" />
                Shop on Amazon India
              </Button>
            </a>

            {/* Trust row */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
              {TRUST_ROW.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2"
                  style={{ color: "oklch(0.55 0.015 22)" }}
                >
                  <Icon
                    className="w-4 h-4"
                    style={{ color: "oklch(0.62 0.22 29)" }}
                  />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>

            <p
              className="mt-8 text-xs"
              style={{ color: "oklch(0.42 0.01 22)" }}
            >
              Sold & fulfilled by PESOMA on Amazon.in · Prices and availability
              may vary
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
