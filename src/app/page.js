import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";
import Hero from "@/sections/Hero";
import Profile from "@/sections/Profile";
import Services from "@/sections/Services";
import WhyMe from "@/sections/WhyMe";
import TechStack from "@/sections/TechStack";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main className="relative">
      {/* Full-page video background */}
      <VideoBackground />

      {/* All content sits above the video */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TechStack />
        <Services />
        <Projects />
        <Profile />
        <WhyMe />
        <Contact />
      </div>
    </main>
  );
}
