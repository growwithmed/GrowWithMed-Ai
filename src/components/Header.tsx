import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Categories', path: '/categories' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 overflow-hidden rounded-lg">
                <img 
                  src="https://i.ibb.co/zhS2txZW/Design-sans-titre-5.png" 
                  alt="Grow With Med Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-2xl font-display font-extrabold text-brand-dark tracking-tight">Grow With Med</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-[15px] font-bold transition-colors hover:text-brand-primary",
                  location.pathname === item.path ? "text-brand-primary" : "text-slate-600"
                )}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://growwithmed.gumroad.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
            >
              Resources
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-primary p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-3 rounded-lg text-base font-bold",
                  location.pathname === item.path
                    ? "bg-slate-50 text-brand-primary"
                    : "text-slate-600 hover:bg-slate-50 hover:text-brand-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-100">
              <a
                href="https://growwithmed.gumroad.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-3 text-base font-bold text-white bg-blue-600 rounded-lg"
              >
                Resources
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
