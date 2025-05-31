import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CareerDropdown = ({ careers, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState(null);
  const handleSelect = (career) => {
    setSelectedCareer(career);
    setIsOpen(false);
    onSelect(career);
    // Scroll to top when career is selected
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="glass-button w-full px-6 py-4 flex items-center justify-between text-left"
      >
        <span className="text-white">
          {selectedCareer ? selectedCareer.title : 'Browse All Careers'}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-white" />
        ) : (
          <ChevronDown className="w-5 h-5 text-white" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 glass-card max-h-96 overflow-y-auto z-50">
          <div className="p-2">
            {careers.map((career) => (              <button
                key={career.id}
                onClick={() => handleSelect(career)}
                className="w-full text-left px-4 py-3 text-white hover:bg-white/20 rounded-lg transition-colors"
              >
                <div className="font-medium text-white">{career.title}</div>
                <div className="text-sm text-gray-300 mt-1 line-clamp-2">
                  {career.description}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerDropdown;
