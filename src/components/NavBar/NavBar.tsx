import { useState } from 'react';
import { FiMenu } from 'react-icons/fi'; // Menu icon
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi'; // Other icons

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-[#f4f1ef]">
      {/* Left Side: Hamburger Menu Icon */}
      <div className="flex items-center">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          <FiMenu />
        </button>
      </div>

      {/* Center: Logo */}
      <div className="text-center">
        <h1 className="text-2xl font-serif tracking-wider">VOGUIFY</h1>
      </div>

      {/* Right Side: Icons (Search, Cart, User) */}
      <div className="flex space-x-4">
        <FiSearch className="text-2xl cursor-pointer" />
        <FiShoppingCart className="text-2xl cursor-pointer" />
        <FiUser className="text-2xl cursor-pointer" />
      </div>

      {/* Sidebar: Full screen menu when opened */}
      {isOpen && (
        <div className="fixed inset-0 z-50 p-8 w-full bg-white " >
          {/* Close Button */}
          <button onClick={toggleMenu} className="text-2xl absolute top-6 left-6 focus:outline-none">
            &times;
          </button>

          {/* Sidebar Content */}
          <div className="mt-16 text-center flex flex-row w-full gap-[10%] ">
            <img src="https://uiparadox.co.uk/templates/voguify/assets/media/banner/header-image.png" alt="Big Sale" className=" ml-[10%] shodow-xl border-2 shadow-gray-950" />
            <nav className="space-y-4 text-[70px] font-serif">
              <a href="#" className="block hover:underline">HOME →</a>
              <a href="#" className="block hover:underline">ABOUT →</a>
              <a href="#" className="block hover:underline">BLOG →</a>
              <a href="#" className="block hover:underline">CONTACT →</a>
              <a href="#" className="block hover:underline">SHOP →</a>
              <a href="#" className="block hover:underline">PAGES →</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
