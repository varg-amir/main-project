import React from "react";
import NavBar from "../../components/NavBar";
import MainSlider from "../../components/MainSlider";
import TopCategories from "../../components/TopCategories";
import WomensSlider from "../../components/WomensSlider";

function home() {
  return (
    <div>
    <NavBar/>
    <MainSlider/>
    <TopCategories/>
    <WomensSlider/>
    </div>
  );
}

export default home;
