import { Link } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";

export default function Header() {
  const cartItemCount = 4; // Replace this with real cart count from context or state

  return (
    <header className="w-full bg-pink-100 text-pink-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide text-pink-700">
          Crystal Beauty Clear
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 text-lg font-medium">
            <li>
              <Link to="/" className="hover:text-pink-600 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className="hover:text-pink-600 transition duration-300"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                to="/reviews"
                className="hover:text-pink-600 transition duration-300"
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-pink-600 transition duration-300"
              >
                Contact
              </Link>
            </li>
            <li className="relative">
              <Link
                to="/cart"
                className="flex items-center gap-1 group hover:text-pink-900 transition duration-300"
              >
                <BsCartCheck className="text-2xl" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full group-hover:bg-pink-700 transition">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-pink-700 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}