import { Link } from "react-router-dom";
import { BookOpen, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <BookOpen className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Indigo Publishers</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Premium independent publishing services for authors who demand excellence. We handle the production; you keep the rights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about-us" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Our Services</Link></li>
              <li><Link to="/our-publishing-process" className="hover:text-indigo-400 transition-colors">Our Process</Link></li>
              <li><Link to="/frequently-asked-questions" className="hover:text-indigo-400 transition-colors">FAQs</Link></li>
              <li><Link to="/request-quote" className="hover:text-indigo-400 transition-colors">Request a Quote</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Key Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services/book-publishing" className="hover:text-indigo-400 transition-colors">Book Publishing</Link></li>
              <li><Link to="/services/book-editing" className="hover:text-indigo-400 transition-colors">Book Editing</Link></li>
              <li><Link to="/services/book-cover-design" className="hover:text-indigo-400 transition-colors">Cover Design</Link></li>
              <li><Link to="/services/book-distribution" className="hover:text-indigo-400 transition-colors">Distribution</Link></li>
              <li><Link to="/services/audiobook-production" className="hover:text-indigo-400 transition-colors">Audiobooks</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-indigo-500 shrink-0" />
                <span>123 Publishing Way, Suite 500<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-indigo-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-indigo-500 shrink-0" />
                <span>hello@indigopublishers.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-slate-500">
          <p>© {currentYear} Indigo Publishers. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-slate-300 transition-colors">Terms & Conditions</Link>
            <Link to="/refund-policy" className="hover:text-slate-300 transition-colors">Refund Policy</Link>
            <Link to="/distribution-disclosures" className="hover:text-slate-300 transition-colors">Disclosures</Link>
          </div>
        </div>
        <div className="mt-8 text-[10px] text-slate-600 text-center max-w-3xl mx-auto">
          Indigo Publishers is an independent service provider and is not affiliated with, endorsed by, or an official partner of Amazon KDP, IngramSpark, or Barnes & Noble.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
