import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false); // Use useState directly

  // Effect to close mobile menu on screen resize (desktop breakpoint)
  useEffect(() => {
    const handleResize = () => {
      // Tailwind's 'sm' breakpoint is typically 640px.
      // If the window width is >= 640px and the menu is open, close it.
      if (window.innerWidth >= 640 && open) {
        setOpen(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [open]); // Re-run effect if 'open' state changes

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-white relative transition-all z-40">
      <NavLink to='/'>
        <h1 className="text-2xl font-bold">
          <span className="text-orange-400">Finest</span>
          <span className="text-yellow-400">Mart</span>
        </h1>
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <a href="#" className="text-primary hover:text-font hover:underline hover:font-semibold transition duration-200">Home</a>
        <a href="#" className="text-primary hover:text-font hover:underline hover:font-semibold transition duration-200">Categories</a>
        <a href="#" className="text-primary hover:text-font hover:underline hover:font-semibold transition duration-200">Sales</a>
        <a href="#" className="text-primary hover:text-font hover:underline hover:font-semibold transition duration-200">FAQ</a>
        <a href="#" className="text-primary hover:text-font hover:underline hover:font-semibold transition duration-200">About</a>
        <a href="#" className="text-primary hover:text-font hover:underline hover:font-semibold transition duration-200">Contact</a>

        {/* Cart Icon */}
      

        {/* Cart Icon */}
        <div className="relative cursor-pointer">
        <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" strokeLinecap="round" strokeLinejoin="round" />
</svg>
          <button className="absolute -top-2 -right-3 text-xs text-white bg-font w-[18px] h-[18px] rounded-full">3</button>
        </div>



        {/* Sign In & Sign Up Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-font underline text-sm">Sign In</button>
          <button className="cursor-pointer px-8 py-2 bg-font hover:bg-font-dark transition text-white rounded-full">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setOpen(!open)} aria-label="Menu" className="sm:hidden">
        <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu Content */}
      <div className={`${open ? 'flex' : 'hidden'}
                        absolute top-[60px] left-0 w-full bg-white shadow-md py-4
                        flex-col items-center gap-4 px-5 text-sm z-50`} >
        <a href="#" className="block w-full text-center py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-400 rounded transition duration-200" onClick={() => setOpen(false)}>Home</a>
        <a href="#" className="block w-full text-center py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-400 rounded transition duration-200" onClick={() => setOpen(false)}>Categories</a>
        <a href="#" className="block w-full text-center py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-400 rounded transition duration-200" onClick={() => setOpen(false)}>Sales</a>
        <a href="#" className="block w-full text-center py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-400 rounded transition duration-200" onClick={() => setOpen(false)}>FAQ</a>
        <a href="#" className="block w-full text-center py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-400 rounded transition duration-200" onClick={() => setOpen(false)}>About</a>
        <a href="#" className="block w-full text-center py-2 text-gray-700 hover:bg-gray-100 hover:text-orange-400 rounded transition duration-200" onClick={() => setOpen(false)}>Contact</a>

        <button className="cursor-pointer px-6 py-2 mt-2 bg-orange-400 hover:bg-orange-500 transition text-white rounded-full text-sm w-fit" onClick={() => setOpen(false)}>
          Login
        </button>
        <button className="cursor-pointer px-6 py-2 bg-gray-200 hover:bg-gray-300 transition text-gray-800 rounded-full text-sm w-fit mt-2" onClick={() => setOpen(false)}>
            Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;