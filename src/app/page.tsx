import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Methodology from "@/components/Methodology";
import Contact from "@/components/Contact";
import ChatBot from "@/components/ChatBot";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Projects />
        <Methodology />
        <Contact />
      </main>
      <ChatBot />
    </>
  );
}
