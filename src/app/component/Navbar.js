"use client";
import { useState } from 'react';
import '../globals.css';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:flex md:justify-around bg-yellow-950 p-4">
      <div className="flex justify-between items-center text-2xl font-bold">
        <h1 className="text-white">Fest Hub</h1>
       
        <button
          className="text-white md:hidden" 
          onClick={toggleMenu}
        >
          {isOpen ? '✖' : '☰'} 
        </button>
      </div>
      <nav className={`mt-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col md:flex-row md:space-x-4">
          <li>
            <Link className='text-white' href={`/festival`}>Festival</Link>
          </li>
         
          <li className='text-white'>
           <Link className='text-white' href={`/calendar`}>Calendar</Link>
          </li>
          <li className='text-white'>
           <Link className='text-white' href={`/about`}>Virtual experience</Link>
          </li>
          <li className='text-white'>
           <Link className='text-white' href={`/about`}>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
