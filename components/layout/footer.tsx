import { PERSONAL, SOCIAL_LINKS } from "@/lib/constants";
import { Link2, Code2, Mail, ArrowUpRight } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  LinkedIn: Link2,
  GitHub: Code2,
  Email: Mail,
};

interface FooterProps {
  onTabChange?: (tab: string) => void;
}

export function Footer({ onTabChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface py-12 relative overflow-hidden">
      {/* Subtle bottom accent glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-accent/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="text-center md:text-left">
            <button
              onClick={() => onTabChange?.("Home")}
              className="font-heading text-xl font-bold tracking-tight text-dark cursor-pointer hover:opacity-85"
            >
              {PERSONAL.firstName}
              <span className="text-accent">.</span>
            </button>
            <p className="mt-1 text-xs text-secondary">
              {PERSONAL.role} · {PERSONAL.location}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((link) => {
              const Icon = iconMap[link.label];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-lg border border-border bg-hover px-3 py-2 text-xs text-secondary transition-all duration-200 hover:border-accent hover:text-dark"
                  aria-label={`${link.label}: ${link.handle}`}
                >
                  {Icon && <Icon size={14} />}
                  <span>{link.label}</span>
                  <ArrowUpRight
                    size={10}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-[10px] text-secondary">
            © {currentYear} {PERSONAL.name}. Crafted with precision.
          </p>
          <p className="text-[10px] text-secondary font-mono">
            BUILD_STABLE: PASS (100%)
          </p>
        </div>
      </div>
    </footer>
  );
}
