import { motion } from 'framer-motion';
import { Globe, Award, TrendingUp, Users } from 'lucide-react';
import { MOCK_COMPANY } from '@/data/company';
import { Image } from '@/components/ui/image';

const STATS = [
  { icon: Award, value: '15+ Years', label: 'Industry Experience' },
  { icon: Globe, value: '50+ Countries', label: 'Global Reach' },
  { icon: Users, value: '2000+ Clients', label: 'Satisfied Partners' },
  { icon: TrendingUp, value: 'ISO 9001', label: 'Quality Certified' },
];

export default function AboutSection() {
  const company = MOCK_COMPANY;

  return (
    <section id="about" className="w-full py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={company.aboutImageUrl}
                alt="About Haoxiang Auto Parts"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 md:-right-6 bg-white rounded-xl shadow-xl p-4 md:p-5 border border-border/50">
              <div className="text-2xl md:text-3xl font-bold text-primary">
                Since 2010
              </div>
              <div className="text-xs text-muted-foreground">
                Manufacturing Excellence
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
              Your Trusted Auto Parts{' '}
              <span className="text-primary">Partner in China</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Guangzhou Hao Xiang Auto Parts Co., Ltd. is a professional
              automotive parts manufacturer and supplier based in Baiyun
              District, Guangzhou. With over 15 years of industry experience,
              we specialize in providing high-quality auto parts to importers,
              distributors, and repair shops worldwide.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Our product range includes engine parts, electrical components,
              brake systems, suspension parts, steering systems, cooling
              systems, and diesel fuel systems. EGR valves and diesel
              injection pumps are our flagship product lines with extensive
              model coverage.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {STATS.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-card rounded-xl p-4 border border-border/60 shadow-sm"
                  >
                    <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                      <Icon className="size-5" />
                    </div>
                    <div className="font-bold text-foreground text-lg">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
