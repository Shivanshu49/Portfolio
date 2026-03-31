import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Profile from "@/sections/Profile";
import Services from "@/sections/Services";
import WhyMe from "@/sections/WhyMe";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Profile />
      <Services />
      <WhyMe />
      <Projects />
      <Contact />
    </main>
  );
}
