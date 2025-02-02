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
    <div className="container-custom max-w-6xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-gradient">Cooking Tips & Techniques</h1>

      {/* Category Navigation */}
      <div className="flex overflow-x-auto pb-2 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 mx-2 rounded-full whitespace-nowrap ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-gray-100'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Quick Reference Guide */}
      <div className="card mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-100">Quick Reference Guide</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-900/30 rounded-lg border border-blue-800/50">
            <h3 className="font-medium mb-2 text-blue-300">Temperature Guide</h3>
            <ul className="text-sm space-y-1 text-gray-300">
              <li>Low Heat: 200-300°F</li>
              <li>Medium Heat: 300-400°F</li>
              <li>High Heat: 400-500°F</li>
            </ul>
          </div>
          <div className="p-4 bg-green-900/30 rounded-lg border border-green-800/50">
            <h3 className="font-medium mb-2 text-green-300">Common Conversions</h3>
            <ul className="text-sm space-y-1 text-gray-300">
              <li>1 cup = 16 tablespoons</li>
              <li>1 tablespoon = 3 teaspoons</li>
              <li>1 cup = 240ml</li>
            </ul>
          </div>
          <div className="p-4 bg-yellow-900/30 rounded-lg border border-yellow-800/50">
            <h3 className="font-medium mb-2 text-yellow-300">Seasoning Basics</h3>
            <ul className="text-sm space-y-1 text-gray-300">
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
              className={`card transition-all ${
                expandedTip === tip.id ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-100">{tip.title}</h3>
                    <p className="text-gray-400">{tip.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    tip.difficulty === 'beginner'
                      ? 'bg-green-900/50 text-green-300 border border-green-800'
                      : tip.difficulty === 'intermediate'
                      ? 'bg-yellow-900/50 text-yellow-300 border border-yellow-800'
                      : 'bg-red-900/50 text-red-300 border border-red-800'
                  }`}>
                    {tip.difficulty}
                  </span>
                </div>

                <button
                  onClick={() => setExpandedTip(expandedTip === tip.id ? null : tip.id)}
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  {expandedTip === tip.id ? 'Show Less' : 'Show More'}
                </button>

                {expandedTip === tip.id && (
                  <div className="mt-4 space-y-4">
                    <div className="border-t border-gray-700 pt-4">
                      <h4 className="font-medium mb-2 text-gray-200">Key Points:</h4>
                      <ul className="space-y-2 text-gray-300">
                        {tip.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-gray-700 pt-4">
                      <h4 className="font-medium mb-2 text-gray-200">Related Techniques:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tip.relatedTechniques.map((technique, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
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
      <div className="mt-12 bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700">
        <h2 className="text-xl font-semibold mb-6 text-gradient">Pro Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-4">
            <div className="text-xl mb-2">🔪</div>
            <h3 className="font-medium mb-2 text-gray-100">Prep Like a Pro</h3>
            <p className="text-sm text-gray-400">
              Always practice mise en place - have all ingredients prepped and ready before cooking
            </p>
          </div>
          <div className="card p-4">
            <div className="text-xl mb-2">🌡️</div>
            <h3 className="font-medium mb-2 text-gray-100">Temperature Control</h3>
            <p className="text-sm text-gray-400">
              Learn to read your food's doneness by touch, sound, and appearance
            </p>
          </div>
          <div className="card p-4">
            <div className="text-xl mb-2">⏲️</div>
            <h3 className="font-medium mb-2 text-gray-100">Timing is Everything</h3>
            <p className="text-sm text-gray-400">
              Plan your cooking sequence to have all components ready at the same time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookingTipsTechniques;
