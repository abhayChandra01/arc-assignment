import About from "@/components/about/About";
import CoreValues from "@/components/coreValues/CoreValues";
import Footer from "@/components/footer/Footer";
import Homepage from "@/components/homepage/Homepage";
import Projects from "@/components/projects/Projects";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <div>
      <Homepage />
      <About />
      <Projects />
      <Services />
      <CoreValues />
      <Footer />
    </div>
  );
}
