import React from 'react';
import { eventCategories } from '../data/events';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory, 
  onCategoryChange 
}) => {
  // Map categories to background colors (same as in EventCard for consistency)
  const categoryColors: Record<string, string> = {
    'Masterclass': 'bg-purple-100 text-purple-800 hover:bg-purple-200',
    'Competitions': 'bg-blue-100 text-blue-800 hover:bg-blue-200',
    'Social Welfare Drives': 'bg-green-100 text-green-800 hover:bg-green-200', 
    'Club Meetings': 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
    'Workshops': 'bg-orange-100 text-orange-800 hover:bg-orange-200',
    'Other Events': 'bg-gray-100 text-gray-800 hover:bg-gray-200',
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-3 text-gray-800">Filter by Category</h2>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === null 
              ? 'bg-indigo-600 text-white' 
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          All Events
        </button>
        
        {eventCategories.map(category => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category 
                ? 'bg-indigo-600 text-white'
                : categoryColors[category]
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;