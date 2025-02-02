'use client';
import React, { useState } from 'react';

const RecipeDiscovery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    cuisine: '',
    dietary: [] as string[],
    difficulty: '',
    prepTime: '',
  });

  // Sample recipe data (in a real app, this would come from an API)
  const sampleRecipes = [
    {
      id: 1,
      title: 'Spaghetti Carbonara',
      cuisine: 'Italian',
      prepTime: '20',
      difficulty: 'medium',
      image: '/placeholder.jpg',
      rating: 4.5,
      reviews: 128,
      dietaryTags: ['dairy-free'],
    },
    {
      id: 2,
      title: 'Vegetable Curry',
      cuisine: 'Indian',
      prepTime: '30',
      difficulty: 'easy',
      image: '/placeholder.jpg',
      rating: 4.8,
      reviews: 256,
      dietaryTags: ['vegetarian', 'gluten-free'],
    },
  ];

  const cuisineTypes = [
    'Italian', 'Chinese', 'Mexican', 'Indian', 'Japanese',
    'Thai', 'French', 'Mediterranean', 'American', 'Other'
  ];

  const dietaryOptions = [
    'Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free',
    'Low-Carb', 'Keto', 'Paleo'
  ];

  const difficultyLevels = ['easy', 'medium', 'hard'];
  const prepTimeRanges = ['15', '30', '45', '60', '90'];

  return (
    <div className="container-custom">
      <div className="section">
        <h1 className="text-3xl font-bold text-center mb-6 text-gradient">Discover Recipes</h1>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search recipes..."
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 
              placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="absolute right-3 top-3">
              🔍
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 bg-gray-800 p-4 rounded-lg shadow">
          {/* Cuisine Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Cuisine
            </label>
            <select
              value={filters.cuisine}
              onChange={(e) => setFilters({...filters, cuisine: e.target.value})}
              className="w-full rounded-md bg-gray-700 border border-gray-600 text-gray-100 px-3 py-2 
              focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">All Cuisines</option>
              {cuisineTypes.map(cuisine => (
                <option key={cuisine} value={cuisine}>{cuisine}</option>
              ))}
            </select>
          </div>

          {/* Dietary Restrictions */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Dietary Restrictions
            </label>
            <select
              multiple
              value={filters.dietary}
              onChange={(e) => {
                const selected = Array.from(e.target.selectedOptions, option => option.value);
                setFilters({...filters, dietary: selected});
              }}
              className="w-full rounded-md bg-gray-700 border border-gray-600 text-gray-100 px-3 py-2 
              focus:border-blue-500 focus:ring-blue-500"
            >
              {dietaryOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          {/* Difficulty Level */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Difficulty
            </label>
            <select
              value={filters.difficulty}
              onChange={(e) => setFilters({...filters, difficulty: e.target.value})}
              className="w-full rounded-md bg-gray-700 border border-gray-600 text-gray-100 px-3 py-2 
              focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Any Difficulty</option>
              {difficultyLevels.map(level => (
                <option key={level} value={level}>
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Prep Time */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Max Prep Time (minutes)
            </label>
            <select
              value={filters.prepTime}
              onChange={(e) => setFilters({...filters, prepTime: e.target.value})}
              className="w-full rounded-md bg-gray-700 border border-gray-600 text-gray-100 px-3 py-2 
              focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Any Time</option>
              {prepTimeRanges.map(time => (
                <option key={time} value={time}>{time} minutes</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleRecipes.map(recipe => (
          <div key={recipe.id} className="card">
            <div className="h-48 bg-gray-700">
              {/* Image placeholder */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                [Recipe Image]
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-100">{recipe.title}</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-300">{recipe.cuisine}</span>
                <span className="text-sm text-gray-300">{recipe.prepTime} mins</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-sm text-gray-300">{recipe.rating}</span>
                  <span className="ml-1 text-sm text-gray-400">({recipe.reviews})</span>
                </div>
                <div className="flex gap-1">
                  {recipe.dietaryTags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-900/50 text-blue-200 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeDiscovery;
