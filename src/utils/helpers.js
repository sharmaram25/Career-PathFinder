// Utility functions for the PathFinder application

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount * 100000); // Convert lakhs to rupees
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
  
  if (diffInHours < 1) return 'Just now';
  if (diffInHours < 24) return `${diffInHours} hours ago`;
  if (diffInHours < 48) return 'Yesterday';
  if (diffInHours < 168) return `${Math.floor(diffInHours / 24)} days ago`;
  return date.toLocaleDateString();
};

export const getSkillLevelColor = (level) => {
  switch (level.toLowerCase()) {
    case 'beginner': return 'bg-green-500';
    case 'intermediate': return 'bg-yellow-500';
    case 'advanced': return 'bg-red-500';
    case 'expert': return 'bg-purple-500';
    default: return 'bg-gray-500';
  }
};

export const getSkillLevelWidth = (level) => {
  switch (level.toLowerCase()) {
    case 'beginner': return 'w-1/4';
    case 'intermediate': return 'w-2/4';
    case 'advanced': return 'w-3/4';
    case 'expert': return 'w-full';
    default: return 'w-1/4';
  }
};

export const getPopularityBadge = (popularity) => {
  if (popularity >= 9.5) return { text: 'Trending', color: 'bg-red-500' };
  if (popularity >= 9.0) return { text: 'Hot', color: 'bg-orange-500' };
  if (popularity >= 8.5) return { text: 'Popular', color: 'bg-yellow-500' };
  if (popularity >= 8.0) return { text: 'Rising', color: 'bg-green-500' };
  return { text: 'Growing', color: 'bg-blue-500' };
};

export const generateRandomColor = () => {
  const colors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-orange-500',
    'bg-teal-500',
    'bg-cyan-500'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const generateRandomSize = () => {
  const sizes = ['text-sm', 'text-base', 'text-lg', 'text-xl'];
  return sizes[Math.floor(Math.random() * sizes.length)];
};

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};

export const searchCareers = (careers, query) => {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase();
  return careers.filter(career =>
    career.title.toLowerCase().includes(searchTerm) ||
    career.description.toLowerCase().includes(searchTerm) ||
    career.skills.some(skill => skill.toLowerCase().includes(searchTerm)) ||
    career.category.toLowerCase().includes(searchTerm)
  );
};

export const sortCareers = (careers, sortBy) => {
  const sortedCareers = [...careers];
  
  switch (sortBy) {
    case 'popularity':
      return sortedCareers.sort((a, b) => b.popularity - a.popularity);
    case 'salary':
      return sortedCareers.sort((a, b) => 
        (b.salary.max + b.salary.min) - (a.salary.max + a.salary.min)
      );
    case 'name':
      return sortedCareers.sort((a, b) => a.title.localeCompare(b.title));
    case 'growth':
      return sortedCareers.sort((a, b) => 
        (parseFloat(b.growthRate) || 0) - (parseFloat(a.growthRate) || 0)
      );
    default:
      return sortedCareers;
  }
};

export const filterCareersByCategory = (careers, category) => {
  if (category === 'all') return careers;
  return careers.filter(career => career.category === category);
};

export const getUniqueCategories = (careers) => {
  return ['all', ...new Set(careers.map(career => career.category))];
};

export const getCategoryStats = (careers) => {
  const categories = getUniqueCategories(careers).slice(1); // Remove 'all'
  
  return categories.map(category => {
    const categoryAreers = careers.filter(c => c.category === category);
    const avgSalary = Math.round(
      categoryAreers.reduce((sum, c) => sum + (c.salary.max + c.salary.min) / 2, 0) /
      categoryAreers.length
    );
    const topCareer = categoryAreers.sort((a, b) => b.popularity - a.popularity)[0];
    
    return {
      name: category,
      count: categoryAreers.length,
      avgSalary,
      topCareer
    };
  });
};

// Local storage utilities for history management
export const saveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const loadFromLocalStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return defaultValue;
  }
};

export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from localStorage:', error);
  }
};

// Animation and UI utilities
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
