import { Toaster } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProductsSection from './sections/ProductsSection';
import FeaturedProductSection from './sections/FeaturedProductSection';
import FactorySection from './sections/FactorySection';
import AdvantagesSection from './sections/AdvantagesSection';
import ContactSection from './sections/ContactSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <FeaturedProductSection />
        <FactorySection />
        <AdvantagesSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="top-right" richColors closeButton />
    </div>
  );
}
