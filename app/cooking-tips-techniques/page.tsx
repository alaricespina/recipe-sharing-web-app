'use client';
import React, { useState } from 'react';

const CookingTipsTechniques = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedTip, setExpandedTip] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Tips' },
    { id: 'prep', name: 'Preparation' },
    { id: 'cooking', name: 'Cooking Methods' },
    { id: 'seasoning', name: 'Seasoning & Flavor' },
    { id: 'safety', name: 'Kitchen Safety' },
    { id: 'equipment', name: 'Equipment Care' },
  ];

  // Sample cooking tips data (in a real app, this would come from an API)
  const tips = [
    {
      id: 1,
      title: 'Knife Skills Fundamentals',
      category: 'prep',
      difficulty: 'beginner',
      description: 'Master the basic knife cuts for efficient food preparation.',
      details: [
        'Always keep your knife sharp - a dull knife is more dangerous',
        'Use the claw grip technique to protect your fingers',
        'Let the weight of the knife do the work',
        'Practice consistent sizing for even cooking',
      ],
      relatedTechniques: ['Dicing', 'Slicing', 'Chopping', 'Julienne'],
      image: '/knife-skills.jpg',
    },
    {
      id: 2,
      title: 'Temperature Control in Cooking',
      category: 'cooking',
      difficulty: 'intermediate',
      description: 'Understanding heat levels for different cooking methods.',
      details: [
        'Use high heat for searing and stir-frying',
        'Medium heat for most sautéing and pan-frying',
        'Low heat for simmering and braising',
        'Let pans preheat properly before adding food',
      ],
      relatedTechniques: ['Searing', 'Sautéing', 'Braising', 'Simmering'],
      image: '/temperature-control.jpg',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Cooking Tips & Techniques</h1>

      {/* Category Navigation */}
      <div className="flex overflow-x-auto pb-2 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 mx-2 rounded-full whitespace-nowrap ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Quick Reference Guide */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Quick Reference Guide</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium mb-2">Temperature Guide</h3>
            <ul className="text-sm space-y-1">
              <li>Low Heat: 200-300°F</li>
              <li>Medium Heat: 300-400°F</li>
              <li>High Heat: 400-500°F</li>
            </ul>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-medium mb-2">Common Conversions</h3>
            <ul className="text-sm space-y-1">
              <li>1 cup = 16 tablespoons</li>
              <li>1 tablespoon = 3 teaspoons</li>
              <li>1 cup = 240ml</li>
            </ul>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-medium mb-2">Seasoning Basics</h3>
            <ul className="text-sm space-y-1">
              <li>Season in layers</li>
              <li>Taste as you cook</li>
              <li>Salt enhances flavor</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tips
          .filter(tip => selectedCategory === 'all' || tip.category === selectedCategory)
          .map(tip => (
            <div
              key={tip.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-all ${
                expandedTip === tip.id ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{tip.title}</h3>
                    <p className="text-gray-600">{tip.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    tip.difficulty === 'beginner'
                      ? 'bg-green-100 text-green-800'
                      : tip.difficulty === 'intermediate'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {tip.difficulty}
                  </span>
                </div>

                <button
                  onClick={() => setExpandedTip(expandedTip === tip.id ? null : tip.id)}
                  className="text-blue-600 hover:text-blue-700 text-sm"
                >
                  {expandedTip === tip.id ? 'Show Less' : 'Show More'}
                </button>

                {expandedTip === tip.id && (
                  <div className="mt-4 space-y-4">
                    <div className="border-t pt-4">
                      <h4 className="font-medium mb-2">Key Points:</h4>
                      <ul className="space-y-2">
                        {tip.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-medium mb-2">Related Techniques:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tip.relatedTechniques.map((technique, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                          >
                            {technique}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>

      {/* Pro Tips Section */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-6">Pro Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-xl mb-2">🔪</div>
            <h3 className="font-medium mb-2">Prep Like a Pro</h3>
            <p className="text-sm text-gray-600">
              Always practice mise en place - have all ingredients prepped and ready before cooking
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-xl mb-2">🌡️</div>
            <h3 className="font-medium mb-2">Temperature Control</h3>
            <p className="text-sm text-gray-600">
              Learn to read your food's doneness by touch, sound, and appearance
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-xl mb-2">⏲️</div>
            <h3 className="font-medium mb-2">Timing is Everything</h3>
            <p className="text-sm text-gray-600">
              Plan your cooking sequence to have all components ready at the same time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookingTipsTechniques;