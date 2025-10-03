import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Trial from "@/components/Trial";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Instructor from "@/components/Instructor";
import Access from "@/components/Access";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Trial />
      <Pricing />
      <Testimonials />
      <Instructor />
      <Access />
      <Footer />
    </main>
  );
};

export default Index;
