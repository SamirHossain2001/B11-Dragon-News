import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaRegNewspaper,
  FaFutbol,
  FaCloudRain,
  FaMobileAlt,
  FaFilm,
} from "react-icons/fa";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      {/* Marquee package {react-fast-marquee} */}
      <Marquee className="flex gap-10" pauseOnHover={true} speed={60}>
        <p className="flex items-center gap-4 font-bold mr-10">
          <FaRegNewspaper /> Government announces new economic stimulus package.
        </p>
        <p className="flex items-center gap-4 font-bold mr-10">
          <FaFutbol /> National team secures win in dramatic fashion!
        </p>
        <p className="flex items-center gap-4 font-bold mr-10">
          <FaCloudRain /> Heavy rainfall expected in northern regions.
        </p>
        <p className="flex items-center gap-4 font-bold mr-10">
          <FaMobileAlt /> Tech giant unveils new AI-powered smartphone.
        </p>
        <p className="flex items-center gap-4 font-bold mr-10">
          <FaFilm /> Award-winning actor joins upcoming blockbuster.
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
