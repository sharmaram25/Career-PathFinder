import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HistoryContext } from '../../context/HistoryContext';
import { History as HistoryIcon, Trash2, Eye, Calendar, TrendingUp, Search, X } from 'lucide-react';

const History = () => {
  const { history, clearHistory, removeFromHistory } = useContext(HistoryContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent'); // recent, name, salary
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const filteredHistory = history.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedHistory = [...filteredHistory].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.title.localeCompare(b.title);
      case 'salary':
        return (b.salary.max + b.salary.min) - (a.salary.max + a.salary.min);
      case 'recent':
      default:
        return new Date(b.viewedAt) - new Date(a.viewedAt);
    }
  });

  const handleCareerClick = (career) => {
    navigate(`/career/${career.id}`);
  };

  const handleRemoveItem = (e, careerToRemove) => {
    e.stopPropagation();
    removeFromHistory(careerToRemove.id);
  };

  const handleClearAll = () => {
    clearHistory();
    setShowClearConfirm(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    if (diffInHours < 48) return 'Yesterday';
    return date.toLocaleDateString();
  };

  const groupedHistory = sortedHistory.reduce((groups, item) => {
    const date = new Date(item.viewedAt).toDateString();
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(item);
    return groups;
  }, {});

  if (history.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="glass-card p-12 rounded-2xl">
              <HistoryIcon className="w-16 h-16 text-gray-400 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-white mb-4">No History Yet</h1>
              <p className="text-gray-300 mb-8">
                Your career exploration history will appear here. Start by searching for careers or browsing our catalog.
              </p>
              <button
                onClick={() => navigate('/')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl hover:scale-105 transition-transform font-medium"
              >
                Start Exploring Careers
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20">
      <div className="container mx-auto px-4 pb-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 flex items-center">
              <HistoryIcon className="w-8 h-8 mr-3 text-purple-400" />
              Your History
            </h1>
            <p className="text-gray-300">
              {history.length} career{history.length !== 1 ? 's' : ''} explored
            </p>
          </div>
          <div className="mt-6 lg:mt-0">
            <button
              onClick={() => setShowClearConfirm(true)}
              className="flex items-center bg-red-500/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/30 transition-colors"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear All History
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="glass-card p-6 rounded-2xl mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search your history..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-10 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="recent">Recently Viewed</option>
                <option value="name">Career Name</option>
                <option value="salary">Salary Range</option>
              </select>
            </div>
          </div>
        </div>

        {/* History Content */}
        {sortedHistory.length === 0 ? (
          <div className="glass-card p-8 rounded-2xl text-center">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No Results Found</h3>
            <p className="text-gray-300">Try adjusting your search terms.</p>
          </div>
        ) : sortBy === 'recent' ? (
          // Grouped by date when sorted by recent
          <div className="space-y-8">
            {Object.entries(groupedHistory).map(([date, items]) => (
              <div key={date}>
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-purple-400" />
                  {new Date(date).toDateString() === new Date().toDateString() 
                    ? 'Today' 
                    : new Date(date).toDateString() === new Date(Date.now() - 86400000).toDateString()
                    ? 'Yesterday'
                    : new Date(date).toLocaleDateString()
                  }
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((career) => (
                    <div
                      key={`${career.id}-${career.viewedAt}`}
                      onClick={() => handleCareerClick(career)}
                      className="glass-card p-6 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300 group relative"
                    >
                      <button
                        onClick={(e) => handleRemoveItem(e, career)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <X className="w-5 h-5" />
                      </button>
                      
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2 pr-8">
                        {career.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {career.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                          {career.category}
                        </span>
                        <span className="text-green-400 font-medium">
                          ₹{career.salary.min}L - ₹{career.salary.max}L
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-gray-400">
                          <Eye className="w-4 h-4 mr-1" />
                          Viewed {formatDate(career.viewedAt)}
                        </div>
                        <div className="flex items-center text-yellow-400">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          {career.popularity}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Simple grid when sorted by name or salary
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedHistory.map((career) => (
              <div
                key={`${career.id}-${career.viewedAt}`}
                onClick={() => handleCareerClick(career)}
                className="glass-card p-6 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300 group relative"
              >
                <button
                  onClick={(e) => handleRemoveItem(e, career)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2 pr-8">
                  {career.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {career.description}
                </p>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                    {career.category}
                  </span>
                  <span className="text-green-400 font-medium">
                    ₹{career.salary.min}L - ₹{career.salary.max}L
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-400">
                    <Eye className="w-4 h-4 mr-1" />
                    Viewed {formatDate(career.viewedAt)}
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {career.popularity}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Clear Confirmation Modal */}
        {showClearConfirm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="glass-card p-8 rounded-2xl max-w-md w-full">
              <h3 className="text-2xl font-bold text-white mb-4">Clear All History?</h3>
              <p className="text-gray-300 mb-6">
                This will permanently remove all {history.length} career{history.length !== 1 ? 's' : ''} from your history. This action cannot be undone.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="flex-1 bg-gray-600 text-white px-4 py-3 rounded-xl hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleClearAll}
                  className="flex-1 bg-red-500 text-white px-4 py-3 rounded-xl hover:bg-red-600 transition-colors"
                >
                  Clear All
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
