"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Programs", href: "/programs" },
    { name: "About", href: "/about" },
    { name: "Patient Portal", href: "/patient" },
    { name: "Contact", href: "/contact" },
  ];

  return (<>
    <div className="flex justify-center w-full h-8 bg-brand-gold/90"><h1 className="text-lg font-bold text-brand-blue">Call 555-555-1234 today!</h1></div>
    <nav className="sticky top-0 z-40 border-b-2 shadow-lg backdrop-blur-md bg-white/60 border-brand-gold">
      
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
          >
            <Image
              src="/logo.png"
              alt="Integrity Care Connection"
              width={300}
              height={160}
              className="w-auto h-20"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 text-brand-blue hover:text-brand-gold"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-bold text-white rounded-full shadow-md transition-all duration-200 bg-linear-to-t from-brand-blue to-brand-blue/70 hover:bg-brand-blue-dark shadow-brand-blue/50 hover:shadow-sm"
            >
              Get Help Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-brand-blue focus:outline-none focus:text-brand-blue"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t sm:px-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-brand-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block px-3 py-2 mt-4 text-base font-medium text-white rounded-md bg-brand-blue hover:bg-brand-blue-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Help Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav></>
  );
}
