import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import FeaturedWork from "@/components/FeaturedWork";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurSecrives";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div>
      <a
        href="#main-content"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:inline-block focus:rounded-lg focus:bg-[#0f0f15] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#f5f5f7] focus:shadow-lg focus:ring-2 focus:ring-[#C63C8E] focus:ring-offset-2 focus:ring-offset-[#0f0f15]"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <OurServices />
        <FeaturedWork />
        <Team />
      <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
