"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/">
            <div className="text-lg font-semibold tracking-tight">
              Logo
            </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a className="hover:text-black" href="/">Home</a>
          <a className="hover:text-black" href="/about">About</a>
          <a className="hover:text-black" href="/contact">Contact</a>
        </nav>

        {/* Desktop CTA */}
        
        <Link href={"/getstarted"}>
          <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md shadow-sm">
            Get Started
          </button>
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-4">

          <nav className="flex flex-col gap-4 text-sm text-gray-700">
            <a className="hover:text-black">Home</a>
            <a className="hover:text-black">About</a>
            <a className="hover:text-black">Contact</a>
          </nav>

          {/* CTA inside dropdown */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md shadow-sm">
            Get Started
          </button>

        </div>
      )}
    </header>
  );
}