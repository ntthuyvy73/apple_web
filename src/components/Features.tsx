import { useRef } from "react";
import { explore1Img, explore2Img, exploreVideo } from "../utils/images";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(scrollTrigger);

const Features = () => {
    const videoRef = useRef();

    useGSAP(() => {
        gsap.to("#heading", { opacity: 1, y: 0 });
        gsap.to(".feature-img", { opacity: 1, scale: 1, ease: "power1" });
        gsap.to(".feature-text", {
            opacity: 1,
            scale: 1,
            ease: "power2.inOut",
            duration: 1,
        });

        gsap.to("#exploreVideo", {
            scrollTrigger: {
                trigger: "#exploreVideo",
                toggleActions: "play pause reverse restart",
                start: "-10% bottom",
            },
            onComplete: () => {
                if (videoRef.current) videoRef.current.play();
            },
        });
    }, []);

    return (
        <section className="w-screen common-padding bg-zinc h-full">
            <div className="screen-max-width mb-12">
                <h2 id="heading" className="section-heading opacity-0">
                    Get the hightlights
                </h2>
            </div>

            <div className="flex flex-col justify-center items-center">
                <h2 className="text-5xl lg:text-7xl font-semibold  mt-32 mb-24  pl-24">
                    iPhone.
                    <br /> Forged in titanium.
                </h2>

                <div className="flex flex-col justify-center items-center  sm:px-10 gap-3">
                    <div className="h-[50vh] w-full flex justify-center items-center ">
                        <video
                            ref={videoRef}
                            id="exploreVideo"
                            className="w-full h-full object-cover object-center"
                            playsInline
                            autoPlay
                            muted
                            preload="none"
                        >
                            <source src={exploreVideo} type="video/mp4" />
                        </video>
                    </div>

                    <div className="flex flex-col w-full gap-14">
                        <div className="flex gap-5 w-full ">
                            <div className="flex-1 h-[50vh]">
                                <img
                                    src={explore1Img}
                                    alt=""
                                    className="feature-img object-cover object-center w-full h-full scale-150 opacity-0 "
                                />
                            </div>

                            <div className="flex-1 h-[50vh]">
                                <img
                                    src={explore2Img}
                                    alt=""
                                    className="feature-img object-cover object-center w-full h-full scale-150 opacity-0 "
                                />
                            </div>
                        </div>

                        <div className="flex gap-5 w-full  ">
                            <div className="flex-1 flex justify-center items-center">
                                <p className="feature-text ">
                                    iPhone 15 Pro is{" "}
                                    <span className="text-white">
                                        the first iPhone to feature an
                                        aerospace-grade titanium design
                                    </span>
                                    , using the same alloy that spacecrafts use
                                    for missions to Mars.
                                </p>
                            </div>

                            <div className="flex-1 flex justify-center items-center">
                                <p className="feature-text  text-gray max-w-md text-lg md:text-xl font-semibold">
                                    Titanium has one of the best
                                    strength-to-weight ratios of any metal,
                                    making these our{" "}
                                    <span className="text-white">
                                        lightest Pro models ever.
                                    </span>
                                    You'll notice the difference the moment you
                                    pick one up.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
