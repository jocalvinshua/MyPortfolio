import { useState } from "react";
import { X, Menu } from "lucide-react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const navItem = [
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];

    return (
      <nav className="fixed top-0 left-0 w-full bg-white/90 shadow-md backdrop-blur-md z-50">
        <div className="flex items-center justify-between px-4 md:px-8 h-16">
          <a href="#" className="text-xl font-bold text-gray-900">JC</a>
  
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItem.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
  
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
  
        {/* Mobile Navigation */}
        <div
          className={`md:hidden bg-white transition-transform transform origin-top ${
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          } fixed top-16 left-0 w-full shadow-md py-4`}
        >
          {navItem.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-6 py-2 text-gray-700 hover:text-indigo-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    );
}
