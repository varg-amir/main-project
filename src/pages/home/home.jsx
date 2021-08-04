import React from "react";
import NavBar from "../../components/NavBar";
import MainSlider from "../../components/MainSlider";
import TopCategories from "../../components/TopCategories";
import WomensSlider from "../../components/WomensSlider";
import CountdownSec from "../../components/CountdownSec";
import MensSlider from "../../components/MensSlider";

function home() {
  return (
    <div>
    <NavBar />
    <MainSlider/>
    <TopCategories/>
    <WomensSlider/>
    <CountdownSec/>
    <MensSlider/>
    </div>
  );
}

export default home;
