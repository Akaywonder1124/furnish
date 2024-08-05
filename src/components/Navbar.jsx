import "../index.css";
import { NavLink } from "react-router-dom";
import { FaRegUser, FaRegHeart } from "react-icons/fa6";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import "../style/style.css";
export default function Navbar() {
  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="flex items-center justify-center bg-white h-20">
      <div className="navbar w-[90%]">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="lg:hidden pr-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content   z-[1] mt-3 w-52 p-2"
            >
              {menuItems.map((item, index) => (
                <li key={index} className="btn-ghost">
                  <NavLink to={item.to}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <img
            src="./logo.svg"
            alt="logo"
            width={130}
            className="max-sm:navbar-center"
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuItems.map((item, index) => (
              <li key={index} className="px-4 font-semibold">
                <NavLink to={item.to}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="flex gap-6 items-center">
            <FaRegUser size={20} />
            <FiSearch size={20} className="max-sm:hidden" />
            <FaRegHeart size={20} className="max-sm:hidden" />
            <FiShoppingCart size={20} />
          </ul>
        </div>
      </div>
    </header>
  );
}
