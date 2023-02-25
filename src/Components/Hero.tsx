import React from "react";
import data from "../api";

function Hero(props: any) {
  console.log(data);

  return (
    <section className="--Hero">
      <img src="https://wallpaperaccess.com/full/2193203.jpg" alt="" />
      <div className="--hero-content"></div>
    </section>
  );
}

export default Hero;
