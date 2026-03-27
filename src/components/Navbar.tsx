import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpen, Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Process", href: "/our-publishing-process" },
    { name: "FAQs", href: "/frequently-asked-questions" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-indigo-900 rounded-lg flex items-center justify-center group-hover:bg-indigo-800 transition-colors">
              <BookOpen className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-indigo-900 tracking-tight">Indigo Publishers</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-indigo-600",
                  location.pathname === link.href ? "text-indigo-600" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/request-quote"
              className="bg-indigo-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-800 transition-all shadow-lg shadow-indigo-900/10"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-indigo-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-indigo-50 py-4 px-4 space-y-2 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                location.pathname === link.href
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-slate-600 hover:bg-slate-50"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/request-quote"
            className="block w-full text-center bg-indigo-900 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-indigo-800 transition-all"
            onClick={() => setIsOpen(false)}
          >
            Request a Quote
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
