import { MessageCircle, Mail, MapPin } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#advantages' },
  { label: 'Contact', href: '#contact' },
];

const handleNavClick = (href: string) => {
  const el = document.querySelector(href);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Company */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-10 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                HX
              </div>
              <div>
                <div className="font-bold text-lg">Hao Xiang</div>
                <div className="text-xs text-background/60">Auto Parts Co., Ltd.</div>
              </div>
            </div>
            <p className="text-sm text-background/70 leading-relaxed max-w-md mb-5">
              Professional auto parts manufacturer and supplier from Guangzhou,
              China. Specialized in EGR valves and diesel injection pumps,
              supplying premium quality automotive parts to global importers and
              distributors since 2010.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/8613005156303"
                target="_blank"
                rel="noreferrer"
                className="size-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle className="size-5" />
              </a>
              <a
                href="mailto:cathy@haoxiangautoparts.com"
                className="size-10 rounded-full bg-background/10 text-background flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Mail className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-base mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MessageCircle className="size-4 text-[#25D366] shrink-0 mt-0.5" />
                <div className="text-sm text-background/70">
                  <div className="font-medium text-background">WhatsApp</div>
                  <div>+86 130 0515 6303</div>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="size-4 text-background/60 shrink-0 mt-0.5" />
                <div className="text-sm text-background/70">
                  cathy@haoxiangautoparts.com
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="size-4 text-background/60 shrink-0 mt-0.5" />
                <div className="text-sm text-background/70">
                  Baiyun District, Guangzhou, Guangdong, China
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} Guangzhou Hao Xiang Auto Parts Co., Ltd.
            All rights reserved.
          </p>
          <p className="text-xs text-background/50">
            Professional Auto Parts Supplier | ISO 9001 Certified
          </p>
        </div>
      </div>
    </footer>
  );
}
