import Image from "next/image";
import Hero from "../component/Home/Hero";
import FeaturedProperties from "@/component/Home/FeaturedProperties";
import WhyChooseUs from "@/component/Home/Whychooseus";
import Testimonials from "@/component/Home/Testimonials";
import CallToAction from "@/component/Home/CallToAction";
export default function Home() {
  return (
    <>  
    <Hero />
    <FeaturedProperties />
    <WhyChooseUs />
    <Testimonials />
    <CallToAction />
    </>
  );
}
