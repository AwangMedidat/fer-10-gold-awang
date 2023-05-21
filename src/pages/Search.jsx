import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Backdrop from "../components/Backdrop";

function Search() {
  return (
    <>
      <Backdrop triggerClass="search-input" />
      <Hero withRentButton={false} withSearchForm />
      <Footer />
      <SideBar />
    </>
  );
}

export default Search;
