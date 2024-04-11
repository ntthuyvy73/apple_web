import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils/images";
import gsap from "gsap";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 768 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrc = () => {
    if (window.innerWidth < 768) setVideoSrc(smallHeroVideo);
    else setVideoSrc(heroVideo);
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrc);

    return () => {
      window.removeEventListener("resize", handleVideoSrc);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, delay: 2, y: -50 });
  }, []);

  return (
    <section className="w-full h-[calc(100vh-60px)] bg-black relative ">
      <div className=" h-5/6 flex flex-col justify-center items-center">
        <h2
          id="hero"
          className="max-md:text-xl text-3xl text-gray-100 font-semibold opacity-0 max-md:mb-3"
        >
          iPhone 15 Pro
        </h2>

        {/* video */}
        <video
          className="md:w-10/12 w-9/12"
          src={videoSrc}
          muted
          autoPlay
          playsInline
        ></video>
      </div>

      {/* cta */}
      <div
        id="cta"
        className="flex flex-col justify-center items-center opacity-0 pb-10"
      >
        <button className=" bg-blue py-2 px-5 rounded-full mb-5" type="button">
          Buy
        </button>
        <p className="text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
