import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#advantages' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border/50 shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <NavLink
            to="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-2"
          >
            <div className="size-9 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
              HX
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-foreground text-base leading-tight">
                Hao Xiang
              </div>
              <div className="text-xs text-muted-foreground leading-tight">
                Auto Parts
              </div>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/8613005156303"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 h-9 px-4 rounded-md bg-[#25D366] text-white text-sm font-semibold hover:bg-[#20bd5a] transition-colors shadow-sm"
            >
              <MessageCircle className="size-4" />
              Get Quote
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden size-10 rounded-md flex items-center justify-center text-foreground hover:bg-muted transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-b border-border/50">
          <div className="px-4 py-3 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="block px-3 py-2.5 rounded-md text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/8613005156303"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 h-10 mt-2 rounded-md bg-[#25D366] text-white text-sm font-semibold"
            >
              <MessageCircle className="size-4" />
              Get Quote on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
