import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductReels from "@/components/ProductReels";
import NavbarPage from "./Navbar";
import Progressbar from "./Progressbar";

const Index = () => {
  return (
    <main>
      <Progressbar/>
      <NavbarPage/>
      <Hero />
      <ProductReels />
      <Footer />
    </main>
  );
};

export default Index;