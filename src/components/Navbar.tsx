import { appleImg } from "../utils/images";

const Navbar = () => {
    return (
        <nav>
            <div>
                {/* logo */}
                <img
                    src={appleImg}
                    alt="logo"
                    width={14}
                    height={18}
                    className="object-contain "
                />

                {/* menu */}
                <ul className=""></ul>
                {/* right */}
            </div>
        </nav>
    );
};

export default Navbar;
