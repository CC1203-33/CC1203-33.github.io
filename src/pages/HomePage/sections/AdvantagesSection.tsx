import { motion } from 'framer-motion';
import { ShieldCheck, DollarSign, Truck, Package, Headphones } from 'lucide-react';
import { MOCK_ADVANTAGES } from '@/data/advantages';

const ICON_MAP: Record<string, typeof ShieldCheck> = {
  '✓': ShieldCheck,
  '💰': DollarSign,
  '🚚': Truck,
  '📦': Package,
  '💼': Headphones,
};

export default function AdvantagesSection() {
  const advantages = MOCK_ADVANTAGES;

  return (
    <section id="advantages" className="w-full py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14 md:mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Competitive{' '}
            <span className="text-primary">Advantages</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Five reasons why global buyers trust Hao Xiang as their reliable
            auto parts supplier from China.
          </p>
        </motion.div>

        {/* Advantages grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6">
          {advantages.map((adv, i) => {
            const Icon = ICON_MAP[adv.icon] || ShieldCheck;
            return (
              <motion.div
                key={adv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-card rounded-xl p-6 border border-border/60 shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 text-center"
              >
                <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <Icon className="size-7" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {adv.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {adv.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-card rounded-xl p-5 md:p-6 border border-border/60 shadow-sm">
            <p className="text-base font-medium text-foreground">
              Ready to source quality auto parts from China?
            </p>
            <a
              href="https://wa.me/8613005156303"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 h-10 px-5 rounded-md bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20bd5a] transition-colors shadow-sm"
            >
              Request a Quote Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
