import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import Mascot from "@/components/Mascot";
import Community from "@/components/Community";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main
      className="
      min-h-screen
      overflow-hidden
      bg-gradient-to-b
      from-green-950
      via-black
      to-green-900
      text-white
      "
    >

      <Navbar />

      <Hero />

      <About />

      <Tokenomics />

      <Roadmap />

      <Mascot />

      <Community />

      <Footer />

    </main>
  );
}