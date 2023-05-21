import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Cards from "../components/Cards";

function Result() {
  return (
    <>
      <Hero withSearchResultForm />
      <Cards />
      <Footer />
      <SideBar />
    </>
  );
}

export default Result;
