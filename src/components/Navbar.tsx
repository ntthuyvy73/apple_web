import { navLists } from "../constants";
import { appleImg } from "../utils/images";

const Navbar = () => {
  return (
    <nav className="w-full ">
      <div className="screen-max-width px-5 flex justify-between items-center">
        {/* logo */}
        <a href="#">
          <img
            src={appleImg}
            alt="logo"
            width={14}
            height={18}
            className="object-contain "
          />
        </a>

        {/* menu */}
        <ul className="flex-1 flex justify-center items-center ">
          {navLists.map((item, index) => (
            <li key={`link-${index}`} className="">
              <a
                href={`#${item.url}`}
                className="p-5 flex text-sm text-gray hover:text-white transition-all duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        {/* right */}
      </div>
    </nav>
  );
};

export default Navbar;
