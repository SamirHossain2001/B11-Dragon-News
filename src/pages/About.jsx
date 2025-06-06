import React from "react";

const About = () => {
  return (
    <div className="w-11/12 mx-auto my-10 bg-base-200 p-6 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-4 text-secondary">
        About Dragon News
      </h1>
      <p className="text-base-content leading-relaxed mb-4">
        <strong>Dragon News</strong> is a dynamic and trusted digital news
        platform delivering timely and unbiased updates across the globe.
        Whether it's politics, technology, health, or entertainment, we ensure
        every story is well-researched and fact-checked.
      </p>
      <p className="text-base-content leading-relaxed mb-4">
        Our mission is to empower readers by providing reliable information with
        journalistic integrity. Built with modern web technologies like{" "}
        <span className="font-semibold">React</span>,{" "}
        <span className="font-semibold">Tailwind CSS</span>, and{" "}
        <span className="font-semibold">Firebase</span>, we offer a seamless and
        secure user experience.
      </p>
      <p className="text-base-content leading-relaxed">
        Whether you're browsing casually or diving deep into news insights,
        Dragon News is committed to keeping you informed, engaged, and
        connected.
      </p>
    </div>
  );
};

export default About;
