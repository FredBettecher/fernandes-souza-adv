import Navbar from "@/components/Navbar";
import AboutUs from "@/containers/about-us";
import HeroSection from "@/containers/hero-section";
import Operation from "@/containers/operation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center animate-fade animate-duration-[2000ms] animate-delay-100 animate-ease-linear">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Operation />
    </main>
  );
}
