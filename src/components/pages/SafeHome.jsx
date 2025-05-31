import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Users, Briefcase, Star, Search } from 'lucide-react';

const SafeHome = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Find Your Perfect
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {" "}Career Path
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Discover 40+ detailed career paths with comprehensive skill requirements, 
            salary insights, and growth opportunities in the Indian job market.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full pl-12 pr-4 py-4 bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl border border-white border-opacity-30 placeholder-gray-300 text-white text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                placeholder="Search for careers, skills, or interests..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-30">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg mx-auto mb-4">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">40+</h3>
              <p className="text-gray-300">Career Paths</p>
            </div>

            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-30">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">500+</h3>
              <p className="text-gray-300">Skills Mapped</p>
            </div>

            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-30">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">₹5L-50L</h3>
              <p className="text-gray-300">Salary Range</p>
            </div>

            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-30">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg mx-auto mb-4">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">10+</h3>
              <p className="text-gray-300">Industries</p>
            </div>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
            {[
              { name: 'Technology', icon: '💻', count: 12 },
              { name: 'Healthcare', icon: '🏥', count: 8 },
              { name: 'Finance', icon: '💰', count: 6 },
              { name: 'Creative', icon: '🎨', count: 5 },
              { name: 'Business', icon: '📊', count: 4 },
              { name: 'Education', icon: '📚', count: 3 },
              { name: 'Engineering', icon: '⚙️', count: 7 },
              { name: 'Marketing', icon: '📢', count: 5 }
            ].map((category) => (
              <div 
                key={category.name}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="text-white font-semibold mb-1">{category.name}</h3>
                <p className="text-gray-300 text-sm">{category.count} careers</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/popular')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Popular Careers
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="px-8 py-4 bg-white bg-opacity-20 backdrop-blur-lg hover:bg-opacity-30 text-white font-semibold rounded-xl border border-white border-opacity-30 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SafeHome;
