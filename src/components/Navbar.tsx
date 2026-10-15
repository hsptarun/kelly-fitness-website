import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: (format?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E8E1D7] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single element) */}
        <a
          href="#"
          className="text-2xl sm:text-3xl font-extrabold tracking-tighter uppercase font-display text-[#151515] hover:text-[#2D132C] transition-colors whitespace-nowrap shrink-0"
        >
          Kelly Fitness
        </a>

        {/* Zone 2: Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide uppercase text-[#3B3938]"
        >
          <a
            href="#coaching"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#coaching');
            }}
            className="hover:text-[#2D132C] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Coaching
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#about');
            }}
            className="hover:text-[#2D132C] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            About Kelly
          </a>
          <a
            href="#philosophy"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#philosophy');
            }}
            className="hover:text-[#2D132C] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Philosophy
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="hover:text-[#2D132C] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            onClick={() => onOpenInquiry()}
            className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#FAF7F2] bg-[#2D132C] hover:bg-[#1E0C1D] rounded-none transition-all duration-200 shadow-sm hover:shadow active:scale-[0.99] whitespace-nowrap shrink-0 cursor-pointer"
          >
            Start Your Fitness Journey
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            className="p-2 text-[#151515] hover:text-[#2D132C] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E8E1D7] bg-[#FAF7F2] px-6 py-6 space-y-5 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-4 text-base font-bold uppercase tracking-wider text-[#151515]">
            <a
              href="#coaching"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#coaching');
              }}
              className="py-1 hover:text-[#2D132C]"
            >
              Coaching
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#about');
              }}
              className="py-1 hover:text-[#2D132C]"
            >
              About Kelly
            </a>
            <a
              href="#philosophy"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#philosophy');
              }}
              className="py-1 hover:text-[#2D132C]"
            >
              Philosophy
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="py-1 hover:text-[#2D132C]"
            >
              Contact
            </a>
          </div>

          <div className="pt-4 border-t border-[#E8E1D7] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3.5 px-4 text-center text-xs font-bold uppercase tracking-wider text-[#FAF7F2] bg-[#2D132C] hover:bg-[#1E0C1D] transition-colors"
            >
              Start Your Fitness Journey
            </button>
            <a
              href="https://www.instagram.com/kellydoesfitness/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#3B3938] hover:text-[#2D132C] py-2"
            >
              <span>Instagram @kellydoesfitness</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
