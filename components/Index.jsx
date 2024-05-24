import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductReels from "@/components/ProductReels";
import NavbarPage from "./Navbar";
import Progressbar from "./Progressbar";
import SkeletonComponent from "./SkeletonComponent";
import { Suspense } from "react";

const Index = () => {
  return (
    <main>
      {/* <NavbarPage/> */}
      <Progressbar/>
      <Hero />
      {/* <Suspense fallback={<SkeletonComponent/>}> */}
      <ProductReels />
      {/* </Suspense> */}
      <Footer />
    </main>
  );
};

export default Index;
