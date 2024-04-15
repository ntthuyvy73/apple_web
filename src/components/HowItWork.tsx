import { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils/images";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HowItWork = () => {
    const videoRef = useRef();

    useGSAP(() => {
        gsap.from("#chip", {
            scrollTrigger: {
                trigger: "#chip",
                start: "20% bottom",
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: "power2.inOut",
        });

        gsap.to(".g_fadeIn", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.inOut",
        });
    }, []);

    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <div
                    id="chip"
                    className="flex justify-center items-center my-20 opacity-1"
                >
                    <img
                        src={chipImg}
                        alt=""
                        width={180}
                        height={180}
                        className="object-contain"
                    />
                </div>

                <div className="flex flex-col items-center justify-center mt-10">
                    <h2 className="text-5xl md:text-7xl font-bold text-center opacity-0 g_fadeIn">
                        A17 Pro chip.
                        <br /> A monster win for gaming.
                    </h2>

                    <p className="text-gray font-semibold text-xl md:text-2xl mt-10 opacity-0 g_fadeIn">
                        It's here. The biggest redesign in the history of Apple
                        GPUs.
                    </p>
                </div>

                {/* video */}

                <div className="mt-10 md:mt-20 mb-14">
                    <div className="relative  h-full flex justify-center items-center">
                        {/* img */}
                        <div className="overflow-hidden">
                            <img
                                src={frameImg}
                                alt=""
                                className="bg-transparent  z-10"
                            />
                        </div>

                        {/* video */}
                        <div className="absolute w-[95%] h-[90%] rounded-[56px] overflow-hidden">
                            <video
                                className=""
                                muted
                                autoPlay
                                preload="none"
                                playsInline
                                ref={videoRef}
                            >
                                <source src={frameVideo} type="video/mp4" />
                            </video>
                        </div>
                    </div>

                    <p className="text-gray font-semibold text-center mt-3">
                        Honkai: Star Rail
                    </p>
                </div>

                <div className="flex md:flex-row flex-col items-center justify-center mt-20 gap-32">
                    <div className="flex-1 text-gray text-xl font-normal md:font-semibold">
                        <p className="g_fadeIn">
                            A17 Pro is an entirely new class of iPhone chip that
                            delivers our{" "}
                            <span className="text-white">
                                best graphic performance by far
                            </span>
                            .
                        </p>

                        <p>
                            Mobile{" "}
                            <span className="text-white">
                                games will look and feel so immersive
                            </span>
                            , with incredibly detailed environments and
                            characters.
                        </p>
                    </div>

                    <div className="flex-1">
                        <p className="text-gray text-xl font-normal md:font-semibold">
                            New
                        </p>
                        <p className="text-5xl font-bold my-3">Pro-class GPU</p>
                        <p className="text-gray text-xl font-normal md:font-semibold">
                            with 6 cores
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWork;
