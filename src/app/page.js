import Header from "@/components/header/Header";
import Member from "@/components/member/Member";
import Slider from "@/components/slider/Slider";
import React from "react";
import Movie from "@/components/movie/Movie";
import Portfolio from "@/components/portfolio/Portfolio";
import Unsplash from "@/components/unsplash/Unsplash";
import Youtube from "@/components/youtube/Youtube";
import Intro from "@/components/intro/Intro";

const Home = () => {
  return (
    <>
      <Slider />
      <Intro />
      <Member />
      <Portfolio />
      <Unsplash />
      <Youtube />
      <Movie />
    </>
  );
};

export default Home;
