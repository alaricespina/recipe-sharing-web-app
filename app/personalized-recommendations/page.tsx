'use client';
import React, { useState } from 'react';

const PersonalizedRecommendations = () => {
  const [activeCategory, setActiveCategory] = useState('forYou');

  // Sample recommended recipes (in a real app, this would come from an API)
  const recommendations = {
    forYou: [
      {
        id: 1,
        title: 'Grilled Salmon Bowl',
        description: 'Based on your interest in healthy recipes',
        image: '/placeholder.jpg',
        matchScore: 95,
        cookingTime: '25 mins',
        difficulty: 'Medium',
      },
      {
        id: 2,
        title: 'Mushroom Risotto',
        description: 'Similar to Italian dishes you\'ve liked',
        image: '/placeholder.jpg',
        matchScore: 92,
        cookingTime: '35 mins',
        difficulty: 'Medium',
      },
    ],
    trending: [
      {
        id: 3,
        title: 'Korean Street Toast',
        description: 'Popular in your area',
        image: '/placeholder.jpg',
        matchScore: 88,
        cookingTime: '20 mins',
        difficulty: 'Easy',
      },
    ],
    seasonal: [
      {
        id: 4,
        title: 'Summer Berry Pavlova',
        description: 'Perfect for the season',
        image: '/placeholder.jpg',
        matchScore: 90,
        cookingTime: '45 mins',
        difficulty: 'Hard',
      },
    ],
  };

  const categories = [
    { id: 'forYou', name: 'For You' },
    { id: 'trending', name: 'Trending' },
    { id: 'seasonal', name: 'Seasonal' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Personalized Recommendations</h1>

      {/* Recipe Preferences Summary */}
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Recipe Preferences</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-md">
            <div className="font-medium mb-2">Favorite Cuisines</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Italian</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Japanese</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Thai</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md">
            <div className="font-medium mb-2">Dietary Preferences</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">Vegetarian</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">Low-carb</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md">
            <div className="font-medium mb-2">Cooking Level</div>
            <div className="text-gray-600">Intermediate</div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex border-b border-gray-200 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            className={`py-4 px-6 text-sm font-medium ${
              activeCategory === category.id
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Recommendations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations[activeCategory as keyof typeof recommendations].map(recipe => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                [Recipe Image]
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{recipe.title}</h3>
                <div className="flex items-center">
                  <span className="text-sm font-medium text-blue-600">{recipe.matchScore}%</span>
                  <span className="text-xs text-gray-500 ml-1">match</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">{recipe.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{recipe.cookingTime}</span>
                <span>{recipe.difficulty}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recommendation Insights */}
      <div className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">How We Make Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start">
            <div className="mr-4 text-blue-500 text-xl">🎯</div>
            <div>
              <h3 className="font-medium mb-1">Your Preferences</h3>
              <p className="text-sm text-gray-600">Based on your favorite cuisines and dietary needs</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 text-blue-500 text-xl">📈</div>
            <div>
              <h3 className="font-medium mb-1">Cooking History</h3>
              <p className="text-sm text-gray-600">Learned from recipes you've tried and saved</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 text-blue-500 text-xl">👥</div>
            <div>
              <h3 className="font-medium mb-1">Community Trends</h3>
              <p className="text-sm text-gray-600">Popular among users with similar tastes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedRecommendations;