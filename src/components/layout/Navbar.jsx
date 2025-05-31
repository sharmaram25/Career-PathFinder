import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Clock, TrendingUp, User, Compass } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/history', label: 'History', icon: Clock },
    { path: '/popular', label: 'Popular', icon: TrendingUp },
    { path: '/about', label: 'About', icon: User },
  ];

  return (
    <nav className="glass-nav sticky top-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 text-white hover:text-opacity-80 transition-colors">
          <Compass className="w-8 h-8" />
          <span className="font-display font-bold text-xl">PathFinder</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                location.pathname === path
                  ? 'bg-white bg-opacity-20 text-white'
                  : 'text-white text-opacity-80 hover:text-white hover:bg-white hover:bg-opacity-10'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="font-medium">{label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-4">
          {navItems.map(({ path, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`p-2 rounded-lg transition-all duration-300 ${
                location.pathname === path
                  ? 'bg-white bg-opacity-20 text-white'
                  : 'text-white text-opacity-80 hover:text-white hover:bg-white hover:bg-opacity-10'
              }`}
            >
              <Icon className="w-5 h-5" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
