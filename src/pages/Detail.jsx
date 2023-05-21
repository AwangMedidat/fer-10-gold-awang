import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import CardDetail from "../components/CardDetail";

function Detail() {
  return (
    <>
      <Hero withRentButton={false} withSearchFormDetail disabledForm />
      <CardDetail />
      <Footer />
      <SideBar />
    </>
  );
}

export default Detail;
