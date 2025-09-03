import FAQ from "@/components/FAQ";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/OurSecrives";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div>
      <Navbar transparent={true} />  {/* pass prop */}
      <HeroSection />
      <Navbar transparent={false} /> {/* optional: if sticky, can stay */}
      <OurServices />
      <Team/>
      <FAQ />
    </div>
  );
}
