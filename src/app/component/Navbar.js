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
    <div className="md:flex md:justify-around bg-blue-950 p-4">
      <div className="flex justify-between items-center text-2xl font-bold">
        <h1 className="text-white">Chhath Puja Hub</h1>
       
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
            <Link className='text-white' href={`/`}>Rituals</Link>
          </li>
         
          <li className='text-white'>
           <Link className='text-white' href={`/`}>Calendar</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
