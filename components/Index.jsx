import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductReels from "@/components/ProductReels";
import Progressbar from "./Progressbar";
import DefaultNavbvar from "./DefaultNavbvar";

const Index = () => {
  return (
    <main>
      {/* <DefaultNavbvar/> */}
      <Progressbar/>
      <Hero />
      <ProductReels />
      <Footer />
    </main>
  );
};

export default Index;
