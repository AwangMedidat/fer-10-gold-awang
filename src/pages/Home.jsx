import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Whyus from "../components/Whyus";
import Testimonial from "../components/Testimonial";
import Cta from "../components/Cta";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

function Home() {
  return (
    <div className="pb-5">
      <Hero />
      <Features />
      <Whyus />
      <Testimonial />
      <Cta />
      <Faq />
      <Footer />
      <SideBar />
    </div>
  );
}

export default Home;
