import { footerLinks } from "../constants";

const Footer = () => {
    return (
        <footer className="w-full p-5 sm:p-10">
            <div className="screen-max-width">
                <div className="text-gray text-xs font-semibold">
                    <p>
                        More ways to shop:{" "}
                        <span className="underline text-blue">
                            Find an Apple Store{" "}
                        </span>
                        or{" "}
                        <span className="underline text-blue">
                            other retailer
                        </span>{" "}
                        near you.
                    </p>

                    <p>Or call 000800-040-1966</p>
                </div>

                <div className=" w-full h-[1px]  bg-neutral-700 my-5 " />

                {/* copyright */}
                <div className="flex md:flex-row flex-col justify-between items-center">
                    <p className="text-gray font-semibold text-xs">
                        Copright @ 2024 Apple Inc. All rights reserved.
                    </p>
                    <ul className="flex gap-5">
                        {footerLinks.map((item, index) => (
                            <li
                                key={`footer-${index}`}
                                className="text-gray text-xs font-semibold"
                            >
                                <a href="#">{item}</a>
                                {index != footerLinks.length - 1 && (
                                    <span className="ml-5">|</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
