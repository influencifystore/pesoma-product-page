import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
  showCartCTA?: boolean;
  cartLink?: string;
}

export function Layout({
  children,
  showCartCTA = true,
  cartLink = "https://homeessentials.in",
}: LayoutProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Header */}
      <header
        data-ocid="site.header"
        className={`sticky top-0 z-50 transition-smooth ${
          scrolled
            ? "bg-card shadow-3d-sm border-b border-border"
            : "bg-card border-b border-border/50"
        }`}
      >
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo / Brand */}
            <a
              href="https://homeessentials.in"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="site.logo_link"
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-md gradient-shine flex items-center justify-center shadow-3d-sm group-hover:shadow-3d-md transition-smooth">
                <span className="text-white font-display font-bold text-sm">
                  HE
                </span>
              </div>
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="font-display font-semibold text-foreground text-sm tracking-tight">
                  Home Essentials
                </span>
                <span className="text-muted-foreground text-xs">
                  homeessentials.in
                </span>
              </div>
            </a>

            {/* Product Name — center */}
            <div className="flex-1 flex justify-center px-4">
              <span className="font-display font-semibold text-foreground text-base sm:text-lg tracking-tight">
                PESOMA Organizer
              </span>
            </div>

            {/* CTA + Menu */}
            <div className="flex items-center gap-2">
              {showCartCTA && (
                <a
                  href={cartLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="header.add_to_cart_button"
                >
                  <Button
                    size="sm"
                    className="btn-3d-orange font-semibold hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </Button>
                </a>
              )}
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                data-ocid="header.menu_toggle"
                className="sm:hidden p-2 rounded-md text-foreground hover:bg-muted transition-smooth"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            data-ocid="header.mobile_menu"
            className="sm:hidden bg-card border-t border-border px-4 pb-4 pt-2"
          >
            <a
              href={cartLink}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="header.mobile_add_to_cart_button"
              onClick={() => setMenuOpen(false)}
            >
              <Button className="btn-3d-orange w-full font-semibold flex items-center justify-center gap-2 py-3 rounded-lg mt-2">
                <ShoppingCart className="w-4 h-4" />
                Add to Cart — Shop Now
              </Button>
            </a>
            <nav className="mt-3 flex flex-col gap-1">
              {[
                { label: "Features", href: "#features" },
                { label: "Specifications", href: "#specs" },
                { label: "Guarantee", href: "#guarantee" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  data-ocid={`header.nav_${item.label.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted transition-smooth"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer
        data-ocid="site.footer"
        className="bg-card border-t border-border"
      >
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md gradient-shine flex items-center justify-center shadow-3d-sm">
                <span className="text-white font-display font-bold text-sm">
                  HE
                </span>
              </div>
              <div>
                <p className="font-display font-semibold text-foreground text-sm">
                  Home Essentials
                </p>
                <a
                  href="https://homeessentials.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="footer.brand_link"
                  className="text-xs text-muted-foreground hover:text-accent-orange transition-smooth"
                >
                  homeessentials.in
                </a>
              </div>
            </div>

            <div className="text-center sm:text-right">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()}.{" "}
                <a
                  href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="footer.caffeine_link"
                  className="hover:text-accent-orange transition-smooth"
                >
                  Built with love using caffeine.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
