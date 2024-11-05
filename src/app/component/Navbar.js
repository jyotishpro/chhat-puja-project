"use client";
import { useState } from 'react';
import '../globals.css';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu
  };

  return (
    <div className="md:flex md:justify-around bg-blue-950 p-4">
      <div className="flex justify-between items-center text-2xl font-bold">
        <h1 className="text-white">Chhath Puja Hub</h1>
       
        <button
          className="text-white md:hidden" // Hidden on medium screens and above
          onClick={toggleMenu}
        >
          {isOpen ? '✖' : '☰'} // Show cut or hamburger icon
        </button>
      </div>
      <nav className={`mt-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col md:flex-row md:space-x-4">
          <li>
            <a href="/" className="text-white hover:underline">
              Rituals
            </a>
          </li>
         
          <li>
            <a href="/" className="text-white hover:underline">
              calendar
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
