import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 py-3">
        <Link to="/">
          <h1 className="text-2xl font-bold">Auth App</h1>
        </Link>
        
        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
        </div>

        {/* Navigation Links for Desktop */}
        <ul className="hidden lg:flex gap-4">
          <Link to="/">
            <li className="text-xl">Home</li>
          </Link>
          <Link to="/about">
            <li className="text-xl">About</li>
          </Link>
          <Link to="/sign-in">
            <li className="text-xl">Sign In</li>
          </Link>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="lg:hidden flex flex-col gap-4 p-4 bg-slate-100">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <li className="text-xl">Home</li>
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            <li className="text-xl">About</li>
          </Link>
          <Link to="/sign-in" onClick={() => setMenuOpen(false)}>
            <li className="text-xl">Sign In</li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Header;
