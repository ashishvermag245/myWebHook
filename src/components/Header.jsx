"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Our Work", href: "/our-work" },
    { name: "Who We Are", href: "/who-we-are" },
    { name: "What We Do", href: "/what-we-do" },
    { name: "Art & Craft", href: "/art-craft" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-[#f6f6f6]  sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-[20px] px-6">
        {/* Logo / Brand */}
        <Link href="/" className="text-[28px] font-bold text-[#111]">
          MY Hook 
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:border-b-[#111] border-b-2 border-[transparent] transition text-[20px]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-4 p-6 text-gray-700 font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
