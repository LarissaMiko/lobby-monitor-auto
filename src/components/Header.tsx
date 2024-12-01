import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/m-yard-logo.png";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo} // Verwende das importierte Bild
            alt="M-Yard Logo"
            className="h-14"
          />
        </Link>

        {/* Optional: Navigation links (can be extended later) */}
        <nav className="hidden md:flex space-x-4">
          <Link
            to="/mvv-monitor"
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            MVV Monitor
          </Link>
          <Link
            to="/office-finder"
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            Office Finder
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
