import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CareerContext } from '../../context/CareerContext';
import { HistoryContext } from '../../context/HistoryContext';
import SearchBar from '../common/SearchBar';
import TagCloud from '../common/TagCloud';
import CareerDropdown from '../common/CareerDropdown';
import { TrendingUp, Users, Briefcase, Star } from 'lucide-react';

const Home = () => {
  const { careers } = useContext(CareerContext);
  const { addToHistory } = useContext(HistoryContext);
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (query) => {
    if (!query.trim()) {
      setShowResults(false);
      return;
    }

    const results = careers.filter(career =>
      career.title.toLowerCase().includes(query.toLowerCase()) ||
      career.description.toLowerCase().includes(query.toLowerCase()) ||
      career.skills.some(skill => skill.toLowerCase().includes(query.toLowerCase())) ||
      career.category.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(results);
    setShowResults(true);
  };
  const handleCareerSelect = (career) => {
    addToHistory(career);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/career/${career.id}`);
  };

  const popularCareers = careers
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 6);

  const featuredCategories = [
    { name: 'Technology', icon: '💻', count: careers.filter(c => c.category === 'Technology').length },
    { name: 'Healthcare', icon: '🏥', count: careers.filter(c => c.category === 'Healthcare').length },
    { name: 'Finance', icon: '💰', count: careers.filter(c => c.category === 'Finance').length },
    { name: 'Creative', icon: '🎨', count: careers.filter(c => c.category === 'Creative').length }
  ];

  return (    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      {/* Hero Section */}
      <section className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-500 bg-clip-text text-transparent">
              PathFinder
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover your perfect career path in the Indian job market. Explore skills, salaries, and growth opportunities.
            </p>
            
            {/* Search Section */}
            <div className="max-w-2xl mx-auto mb-8">
              <SearchBar onSearch={handleSearch} placeholder="Search careers, skills, or industries..." />
            </div>            {/* Career Dropdown */}
            <div className="max-w-md mx-auto">
              <CareerDropdown careers={careers} onSelect={handleCareerSelect} />
            </div>
          </div>

          {/* Search Results */}
          {showResults && (
            <div className="max-w-4xl mx-auto mb-12">
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Search Results ({searchResults.length})
                </h3>
                {searchResults.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {searchResults.map(career => (
                      <div
                        key={career.id}
                        onClick={() => handleCareerSelect(career)}
                        className="glass-card p-4 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 group"
                      >                        <h4 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {career.title}
                        </h4>
                        <p className="text-gray-300 text-sm mt-2 line-clamp-2">
                          {career.description}
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-xs bg-teal-500/20 text-teal-300 px-2 py-1 rounded-full">
                            {career.category}
                          </span>
                          <span className="text-emerald-400 font-medium text-sm">
                            ₹{career.salary.min}L - ₹{career.salary.max}L
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400 text-center py-8">
                    No careers found matching your search.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">            <div className="glass-card p-6 text-center rounded-2xl">
              <Briefcase className="w-8 h-8 text-teal-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">{careers.length}+</div>
              <div className="text-gray-300">Career Paths</div>
            </div><div className="glass-card p-6 text-center rounded-2xl">
              <TrendingUp className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-gray-300">Skills Mapped</div>
            </div>
            <div className="glass-card p-6 text-center rounded-2xl">
              <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-gray-300">Jobs Available</div>
            </div>
            <div className="glass-card p-6 text-center rounded-2xl">
              <Star className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Explore by Category
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map(category => (
              <div
                key={category.name}
                onClick={() => navigate('/popular', { state: { category: category.name } })}
                className="glass-card p-6 text-center rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{category.icon}</div>                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-300 mt-2">{category.count} Careers</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Careers Preview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">Popular Career Paths</h2>            <button
              onClick={() => navigate('/popular')}
              className="text-cyan-400 hover:text-orange-300 transition-colors font-medium"
            >
              View All →
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCareers.map(career => (
              <div
                key={career.id}
                onClick={() => handleCareerSelect(career)}
                className="glass-card p-6 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {career.title}
                </h3>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm">{career.popularity}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {career.description}
                </p>                <div className="flex items-center justify-between">
                  <span className="text-xs bg-teal-500/20 text-teal-300 px-2 py-1 rounded-full">
                    {career.category}
                  </span>
                  <span className="text-emerald-400 font-medium">
                    ₹{career.salary.min}L - ₹{career.salary.max}L
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Cloud */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Trending Skills
          </h2>
          <TagCloud />
        </div>
      </section>
    </div>
  );
};

export default Home;
