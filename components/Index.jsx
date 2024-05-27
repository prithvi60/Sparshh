import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductReels from "@/components/ProductReels";
import Progressbar from "./Progressbar";
import DefaultNavbar from "./DefaultNavbar";

const Index = () => {
  return (
    <main>
      <DefaultNavbar/>
      <Progressbar/>
      <Hero />
      <ProductReels />
      <Footer />
    </main>
  );
};

export default Index;
