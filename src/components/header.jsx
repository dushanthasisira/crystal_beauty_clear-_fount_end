export default function Header() {
  return (
    <header className="w-full bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          My Store
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <ul className="flex space-x-8">
            <li>
              <a href="#" className="hover:text-blue-200 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200 transition duration-300">
                Product
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200 transition duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200 transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Optional: Mobile menu button (can be extended) */}
        <button className="md:hidden p-2 rounded focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
    </header>
  );
}