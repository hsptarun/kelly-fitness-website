import React from 'react';
import { ArrowUpRight, Instagram, MapPin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#151515] text-[#FAF7F2] border-t border-[#2D132C]">
      {/* Top Footer Strip: Brand Wordmark & Location */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 space-y-4">
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#FAF7F2]">
              Kelly Fitness
            </h2>
            <p className="text-sm text-[#E2CEC7]/80 leading-relaxed max-w-sm">
              Personal training and intentional strength coaching in Denver, Colorado. Building lifelong resilience, sustainable movement, and personalized fitness roadmaps.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#E2CEC7] pt-2">
              <MapPin className="w-4 h-4 text-[#E2CEC7]" />
              <span>Denver, Colorado · Accepting New Clients</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E2CEC7]">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-[#E2CEC7]/70">
              <li>
                <a href="#coaching" className="hover:text-[#FAF7F2] transition-colors">
                  Coaching Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FAF7F2] transition-colors">
                  About Kelly
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-[#FAF7F2] transition-colors">
                  Coaching Philosophy
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FAF7F2] transition-colors">
                  Consultation & Intake
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-4 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E2CEC7]">
              Connect & Follow
            </p>
            <a
              href="https://www.instagram.com/kellydoesfitness/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#FAF7F2] hover:text-[#E2CEC7] transition-colors group"
            >
              <Instagram className="w-4 h-4 text-[#E2CEC7]" />
              <span className="font-semibold">@kellydoesfitness</span>
              <ArrowUpRight className="w-4 h-4 text-[#E2CEC7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <p className="text-xs text-[#E2CEC7]/60 leading-relaxed">
              Instagram is Kelly's primary social platform for training footage, daily workout inspiration, and direct client correspondence.
            </p>
          </div>
        </div>

        {/* Speculative Portfolio Concept Disclaimer Notice */}
        <div className="mt-16 pt-8 border-t border-[#3B3938] grid grid-cols-1 md:grid-cols-12 gap-6 text-xs text-[#E2CEC7]/60">
          <div className="md:col-span-8 space-y-1">
            <p className="font-semibold text-[#E2CEC7]/80 uppercase tracking-wider">
              Speculative Portfolio Concept Notice
            </p>
            <p className="leading-relaxed">
              This website is an independent speculative concept created for presentation and demonstration purposes. It does not imply that Kelly has officially commissioned, endorsed, or approved this design. Business qualifications, transformations, and client claims remain subject to verification upon official deployment.
            </p>
          </div>

          <div className="md:col-span-4 flex md:justify-end items-end">
            <p>© {currentYear} Kelly Fitness Concept. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
