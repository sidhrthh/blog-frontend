import Image from "next/image";
import HeroSection from "./(pages)/heroSection";
import Blog from "./(pages)/blogs";
import SingleBlog from "@/components/ui/singleBlog";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <>
    <HeroSection />
    <Blog />
    <Footer />
    </>
  );
}
