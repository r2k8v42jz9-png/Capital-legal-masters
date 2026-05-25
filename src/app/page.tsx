import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Arbitration from "@/components/Arbitration";
import Advantages from "@/components/Advantages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Arbitration />
      <Advantages />
      <Contact />
      <Footer />
    </main>
  );
}
