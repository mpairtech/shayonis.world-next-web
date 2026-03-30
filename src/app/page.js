import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import ClothingBrand from "@/components/ClothingBrand";
import Construction from "@/components/Construction";
import Apparel from "@/components/Apparel";
import Footer from "@/components/Footer";
import Agro from "@/components/Agro";
import Speech from "@/components/Speech";


export default function Home() {
  return (
    <>
  <Navbar />
   <Hero />
   <About />
   <ClothingBrand />
   <Construction />
   <Apparel />
      <Agro />
      <Speech />
   <Footer />
   
   </>
  );
}