'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isPortfolioPage = pathname === '/drones';

  useEffect(() => {
    if (isPortfolioPage) {
      setShowNav(true);
      return;
    }
    const handleScroll = () => {
      setShowNav(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPortfolioPage]);

  return (
    <>
      {/* Full-screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] flex transition-all duration-700 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="w-full h-full flex">
          {[
            { name: 'Home', href: '/', color: 'bg-[#0f1a14]' },
            { name: 'Services', href: '/#drone-services', color: 'bg-[#172a1f]' },
            { name: 'Portfolio', href: '/drones', color: 'bg-[#1f3628]' },
            { name: 'Contact', href: '/#contact', color: 'bg-[#274533]' },
          ].map((item, idx) => (
            <div
              key={item.name}
              className={`flex-1 ${item.color} flex items-center justify-center transition-all duration-500 ${
                menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
              }`}
              style={{
                transitionDelay: menuOpen ? `${idx * 100}ms` : '0ms',
              }}
            >
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-white text-2xl md:text-3xl font-light hover:text-[#7a9aa8] transition-colors"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>

        {/* Menu Close Button - Always accessible */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-[96px] right-5 z-[102] w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity"
          aria-label="Close menu"
        >
          <div className="relative w-6 h-6">
            <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -rotate-45 -translate-y-1/2"></span>
            <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform rotate-45 -translate-y-1/2"></span>
          </div>
        </button>
      </div>

      {/* Sticky Navigation Header */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 bg-black/80 border-b border-white/10 transition-all duration-300 ease-out ${
          showNav ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6 pointer-events-none'
        }`}
        aria-hidden={!showNav}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </div>
            <span className="font-display text-lg tracking-tight text-white">APEX</span>
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative w-8 h-6 flex flex-col justify-between cursor-pointer group z-[101]"
            >
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </button>
            <a
              href="/#contact"
              className="group hidden md:flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-[#7a9aa8]"
            >
              Inquire
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
