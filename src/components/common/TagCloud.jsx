import React from 'react';

const TagCloud = ({ tags, onTagClick }) => {
  const getRandomColor = () => {
    const colors = [
      'bg-gradient-to-r from-purple-400 to-pink-400',
      'bg-gradient-to-r from-blue-400 to-cyan-400',
      'bg-gradient-to-r from-green-400 to-blue-500',
      'bg-gradient-to-r from-yellow-400 to-orange-500',
      'bg-gradient-to-r from-pink-400 to-red-400',
      'bg-gradient-to-r from-indigo-400 to-purple-400',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getRandomSize = () => {
    const sizes = ['text-sm', 'text-base', 'text-lg', 'text-xl'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
      {tags.map((tag, index) => (
        <button
          key={tag.id || index}
          onClick={() => onTagClick(tag.id)}
          className={`
            px-4 py-2 rounded-full text-white font-medium 
            transition-all duration-300 transform hover:scale-105 
            hover:shadow-lg cursor-pointer
            ${getRandomColor()} ${getRandomSize()}
          `}
        >
          {tag.text}
        </button>
      ))}
    </div>
  );
};

export default TagCloud;
