import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import CertificationsAchievements from "@/components/CertificationsAchievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#0b0f17] text-slate-100 selection:bg-sky-500/30 selection:text-sky-300">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <CertificationsAchievements />
      <Contact />
      <Footer />
    </main>
  );
}
