import { useGSAP } from "@gsap/react";
import { watchImg } from "../utils/images";
import gsap from "gsap";
import { VideoCarousel } from ".";

const Hightlights = () => {
    useGSAP(() => {
        gsap.to("#heading", { opacity: 1, y: -20 });
        gsap.to(".link", { opacity: 1, y: -10, duration: 1, stagger: 0.5 });
    }, []);

    return (
        <section className="w-screen common-padding bg-zinc h-full">
            <div className="screen-max-width">
                <div className="flex justify-between items-end mb-8">
                    <h2 id="heading" className="section-heading opacity-0">
                        Get the hightlights
                    </h2>

                    <div className="flex flex-wrap gap-5">
                        <a
                            href="#"
                            className="link flex gap-2 text-blue hover:underline text-xl opacity-0  "
                        >
                            <p>Watch the film</p>
                            <img src={watchImg} alt="" className="" />
                        </a>

                        <a
                            href="#"
                            className="link flex gap-2 text-blue hover:underline text-xl opacity-0"
                        >
                            <p>Watch the event</p>
                        </a>
                    </div>
                </div>

                {/* video carousel */}
                <VideoCarousel />
            </div>
        </section>
    );
};

export default Hightlights;
