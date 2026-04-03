import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CurveDivider from '@/components/CurveDivider';
import Services from '@/components/Services';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import AccessibilityWidget from '@/components/AccessibilityWidget';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CurveDivider color="var(--pearl-warm)" />
        <Services />
        <CurveDivider color="var(--cream)" flip />
        <About />
        <CurveDivider color="var(--pearl-warm)" />
        <Gallery />
        <CurveDivider color="var(--cream)" flip />
        <Testimonials />
        <CurveDivider color="var(--pearl-warm)" />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
      <AccessibilityWidget />
    </>
  );
}
