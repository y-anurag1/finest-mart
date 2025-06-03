import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-white relative transition-all">
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
        <div className="relative cursor-pointer">
          <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* CHANGE HERE: stroke-linecap to strokeLinecap and stroke-linejoin to strokeLinejoin */}
            <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <button className="absolute -top-2 -right-3 text-xs text-white bg-font w-[18px] h-[18px] rounded-full">3</button>
        </div>

        {/* Sign In & Sign Up Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-font underline text-sm">Sign In</button>
          <button className="cursor-pointer px-8 py-2 bg-font hover:bg-font transition text-white rounded-full">
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

      {/* Mobile Menu */}
      <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
        <a href="#" className="block">Home</a>
        <a href="#" className="block">About</a>
        <a href="#" className="block">Contact</a>
        <button className="cursor-pointer px-6 py-2 mt-2 bg-font hover:bg-font transition text-white rounded-full text-sm">
          Login
        </button>
      </div>
    </nav>
  )
}

export default Navbar