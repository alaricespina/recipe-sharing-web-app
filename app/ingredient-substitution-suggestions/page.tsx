'use client';
import React, { useState } from 'react';

const IngredientSubstitutionSuggestions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);

  // Sample ingredient substitutions data (in a real app, this would come from an API)
  const substitutions = [
    {
      ingredient: 'Eggs',
      category: 'Baking',
      substitutes: [
        {
          name: 'Mashed Banana',
          ratio: '1 egg = 1/4 cup mashed banana',
          bestFor: 'Baked goods, especially quick breads and muffins',
          dietaryTags: ['vegan', 'dairy-free'],
          notes: 'Will add banana flavor and natural sweetness',
        },
        {
          name: 'Ground Flaxseed',
          ratio: '1 egg = 1 tbsp ground flaxseed + 3 tbsp water',
          bestFor: 'Binding in baked goods',
          dietaryTags: ['vegan', 'gluten-free'],
          notes: 'Let mixture sit for 5 minutes before using',
        },
      ],
    },
    {
      ingredient: 'Butter',
      category: 'Baking & Cooking',
      substitutes: [
        {
          name: 'Coconut Oil',
          ratio: '1:1 replacement',
          bestFor: 'Baking and sautéing',
          dietaryTags: ['vegan', 'dairy-free'],
          notes: 'May add slight coconut flavor',
        },
        {
          name: 'Applesauce',
          ratio: '1 cup butter = 1/2 cup applesauce',
          bestFor: 'Baking, especially in sweet recipes',
          dietaryTags: ['vegan', 'low-fat'],
          notes: 'Reduces fat content but may make baked goods more dense',
        },
      ],
    },
  ];

  const dietaryOptions = [
    'Vegan',
    'Gluten-Free',
    'Dairy-Free',
    'Low-Fat',
    'Nut-Free',
    'Keto',
  ];

  const filteredSubstitutions = substitutions.filter(sub =>
    sub.ingredient.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Ingredient Substitutions</h1>

      {/* Search and Filter Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Search Bar */}
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              Search Ingredient
            </label>
            <div className="relative">
              <input
                type="text"
                id="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type an ingredient..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute right-3 top-2.5">
                🔍
              </div>
            </div>
          </div>

          {/* Dietary Filters */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Dietary Preferences
            </label>
            <div className="flex flex-wrap gap-2">
              {dietaryOptions.map(option => (
                <button
                  key={option}
                  onClick={() => setSelectedDietary(prev =>
                    prev.includes(option.toLowerCase())
                      ? prev.filter(item => item !== option.toLowerCase())
                      : [...prev, option.toLowerCase()]
                  )}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedDietary.includes(option.toLowerCase())
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Substitutions List */}
      <div className="space-y-6">
        {filteredSubstitutions.map(item => (
          <div key={item.ingredient} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold">{item.ingredient}</h2>
                <p className="text-gray-600">{item.category}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {item.substitutes
                .filter(sub =>
                  selectedDietary.length === 0 ||
                  selectedDietary.some(tag => sub.dietaryTags.includes(tag))
                )
                .map((substitute, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-semibold mb-2">{substitute.name}</h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-blue-600 font-medium">{substitute.ratio}</p>
                      <p><span className="font-medium">Best for:</span> {substitute.bestFor}</p>
                      <p><span className="font-medium">Notes:</span> {substitute.notes}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {substitute.dietaryTags.map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tips Section */}
      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Substitution Tips</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Consider the role of the ingredient in the recipe (binding, leavening, moisture, etc.)
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Test substitutions in small batches first
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Expect slight changes in texture or flavor when using substitutes
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Adjust cooking times and temperatures as needed
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IngredientSubstitutionSuggestions;