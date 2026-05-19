import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Methodology from "@/components/Methodology";
import Contact from "@/components/Contact";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Methodology />
        <Contact />
      </main>
      <ChatBot />
    </>
  );
}
