import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CareerContext } from '../../context/CareerContext';
import { HistoryContext } from '../../context/HistoryContext';
import { 
  TrendingUp, 
  Filter, 
  Star, 
  Users, 
  Briefcase, 
  Search,
  BarChart3,
  Crown,
  Target,
  Award
} from 'lucide-react';

const Popular = () => {
  const { careers } = useContext(CareerContext);
  const { addToHistory } = useContext(HistoryContext);
  const navigate = useNavigate();
  const location = useLocation();
  
  const [selectedCategory, setSelectedCategory] = useState(location.state?.category || 'all');
  const [sortBy, setSortBy] = useState('popularity');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  const categories = ['all', ...new Set(careers.map(career => career.category))];
  
  const filteredCareers = careers.filter(career => {
    const matchesCategory = selectedCategory === 'all' || career.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      career.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      career.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const sortedCareers = [...filteredCareers].sort((a, b) => {
    switch (sortBy) {
      case 'popularity':
        return b.popularity - a.popularity;
      case 'salary':
        return (b.salary.max + b.salary.min) - (a.salary.max + a.salary.min);
      case 'name':
        return a.title.localeCompare(b.title);
      case 'growth':
        return (parseFloat(b.growthRate) || 0) - (parseFloat(a.growthRate) || 0);
      default:
        return b.popularity - a.popularity;
    }
  });
  const handleCareerClick = (career) => {
    addToHistory(career);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/career/${career.id}`);
  };
  const getPopularityBadge = (popularity) => {
    if (popularity >= 9.5) return { text: 'Trending', color: 'bg-orange-500', icon: Crown };
    if (popularity >= 9.0) return { text: 'Hot', color: 'bg-red-500', icon: TrendingUp };
    if (popularity >= 8.5) return { text: 'Popular', color: 'bg-amber-500', icon: Star };
    if (popularity >= 8.0) return { text: 'Rising', color: 'bg-emerald-500', icon: Target };
    return { text: 'Growing', color: 'bg-cyan-500', icon: Award };
  };

  const topCareers = sortedCareers.slice(0, 3);
  const categoryStats = categories.slice(1).map(category => ({
    name: category,
    count: careers.filter(c => c.category === category).length,
    avgSalary: Math.round(
      careers
        .filter(c => c.category === category)
        .reduce((sum, c) => sum + (c.salary.max + c.salary.min) / 2, 0) /
      careers.filter(c => c.category === category).length
    ),
    topCareer: careers
      .filter(c => c.category === category)
      .sort((a, b) => b.popularity - a.popularity)[0]
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 pt-20">
      <div className="container mx-auto px-4 pb-12">
        {/* Header */}
        <div className="text-center mb-12">          <h1 className="text-5xl font-bold text-white mb-4 flex items-center justify-center">
            <TrendingUp className="w-12 h-12 mr-4 text-cyan-400" />
            Popular Careers
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most sought-after career paths in India's evolving job market
          </p>
        </div>

        {/* Top 3 Careers Showcase */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">🏆 Top Career Paths</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {topCareers.map((career, index) => {
              const badge = getPopularityBadge(career.popularity);
              const BadgeIcon = badge.icon;
              return (                <div
                  key={career.id}
                  onClick={() => handleCareerClick(career)}
                  className="glass-card p-6 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Rank Badge */}
                  <div className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                    index === 0 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                    index === 1 ? 'bg-gradient-to-r from-gray-300 to-gray-500' :
                    'bg-gradient-to-r from-orange-400 to-orange-600'
                  }`}>
                    {index + 1}
                  </div>

                  {/* Popularity Badge */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-white text-sm font-medium mb-4 ${badge.color}`}>
                    <BadgeIcon className="w-4 h-4 mr-1" />
                    {badge.text}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{career.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{career.description}</p>
                    <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-teal-500/20 text-teal-300 px-2 py-1 rounded-full">
                      {career.category}
                    </span>
                    <div className="flex items-center text-amber-400">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      <span className="font-bold">{career.popularity}</span>
                    </div>
                  </div>
                  
                  <div className="text-emerald-400 font-bold text-lg">
                    ₹{career.salary.min}L - ₹{career.salary.max}L
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Stats */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">📊 Category Overview</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryStats.map(stat => (
              <div
                key={stat.name}                onClick={() => setSelectedCategory(stat.name)}
                className={`glass-card p-6 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300 ${
                  selectedCategory === stat.name ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                <h3 className="text-lg font-bold text-white mb-2">{stat.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Careers</span>
                    <span className="text-white font-medium">{stat.count}</span>
                  </div>                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Avg Salary</span>
                    <span className="text-emerald-400 font-medium">₹{stat.avgSalary}L</span>
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <span className="text-gray-400 text-xs">Top Career:</span>
                    <div className="text-cyan-300 font-medium">{stat.topCareer.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="glass-card p-6 rounded-2xl mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search popular careers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">              {/* Category Filter */}              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {categories.map(category => (
                  <option 
                    key={category} 
                    value={category}
                    className="bg-gray-800 text-white"
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>              {/* Sort */}              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="popularity" className="bg-gray-800 text-white">Most Popular</option>
                <option value="salary" className="bg-gray-800 text-white">Highest Salary</option>
                <option value="name" className="bg-gray-800 text-white">Name (A-Z)</option>
                <option value="growth" className="bg-gray-800 text-white">Growth Rate</option>
              </select>

              {/* View Mode */}
              <div className="flex bg-white/10 rounded-lg p-1">                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400'}`}
                >
                  <BarChart3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400'}`}
                >
                  <Filter className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-gray-300 text-sm">
            Showing {sortedCareers.length} career{sortedCareers.length !== 1 ? 's' : ''}
            {selectedCategory !== 'all' && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </div>
        </div>

        {/* Careers Grid/List */}
        {sortedCareers.length === 0 ? (
          <div className="glass-card p-12 rounded-2xl text-center">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">No Careers Found</h3>
            <p className="text-gray-300">Try adjusting your filters or search terms.</p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedCareers.map((career, index) => {
              const badge = getPopularityBadge(career.popularity);
              const BadgeIcon = badge.icon;
              return (
                <div
                  key={career.id}
                  onClick={() => handleCareerClick(career)}
                  className="glass-card p-6 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300 group relative"
                >
                  {/* Popularity Badge */}
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-white text-xs font-medium mb-3 ${badge.color}`}>
                    <BadgeIcon className="w-3 h-3 mr-1" />
                    {badge.text}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                    {career.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {career.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                      {career.category}
                    </span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      <span className="font-medium">{career.popularity}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-green-400 font-medium">
                      ₹{career.salary.min}L - ₹{career.salary.max}L
                    </div>
                    <div className="text-gray-400 text-sm">
                      Rank #{index + 1}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-4">
            {sortedCareers.map((career, index) => {
              const badge = getPopularityBadge(career.popularity);
              const BadgeIcon = badge.icon;
              return (
                <div
                  key={career.id}
                  onClick={() => handleCareerClick(career)}
                  className="glass-card p-6 rounded-2xl cursor-pointer hover:scale-[1.02] transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <div className="text-gray-400 font-bold text-lg mr-4 w-12">
                          #{index + 1}
                        </div>
                        <div className={`inline-flex items-center px-2 py-1 rounded-full text-white text-xs font-medium mr-3 ${badge.color}`}>
                          <BadgeIcon className="w-3 h-3 mr-1" />
                          {badge.text}
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {career.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm mb-2 ml-16">
                        {career.description}
                      </p>
                      <div className="flex items-center ml-16 space-x-4">
                        <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                          {career.category}
                        </span>
                        <div className="flex items-center text-yellow-400">
                          <Star className="w-4 h-4 fill-current mr-1" />
                          <span className="font-medium">{career.popularity}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-bold text-lg">
                        ₹{career.salary.min}L - ₹{career.salary.max}L
                      </div>
                      <div className="text-gray-400 text-sm">
                        {career.jobOpenings?.toLocaleString() || '500+'} jobs
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Popular;
