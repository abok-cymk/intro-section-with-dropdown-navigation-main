import React from "react";
import Button from "../components/Button";

const Home = () => {
  return (
    <section className="max-w-5xl mx-auto mt-4 lg:mt-20 grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-0">
      {/* IMAGE - First on mobile, last on desktop */}
      <div className="order-1 lg:order-2 col-span-3">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/image-hero-desktop.png"
          />
          <img src="/image-hero-mobile.png" alt="Hero" className="w-full lg:h-[450px] lg:object-contain" />
        </picture>
      </div>

      {/* TEXT CONTENT - Last on mobile, first on desktop */}
      <div className="order-2 lg:order-1 col-span-3 px-4 lg:px-14 lg:pt-10 flex flex-col gap-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold text-pretty">
          Make remote work
        </h1>
        <p className="text-sm/6 font-500 text-medium-gray text-pretty">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button
            text="Learn more"
            className="bg-almost-black border-0 px-6 py-2 text-almost-white cursor-pointer text-sm"
          />
        </div>
        <div className="flex items-center justify-between mt-6  lg:gap-0">
          <img src="/client-databiz.svg" alt="Databiz" className="w-16" />
          <img src="/client-audiophile.svg" alt="Audiophile" className="w-16" />
          <img src="/client-meet.svg" alt="Meet" className="w-16" />
          <img src="/client-maker.svg" alt="Maker" className="w-16" />
        </div>
      </div>
    </section>
  );
};

export default Home;
