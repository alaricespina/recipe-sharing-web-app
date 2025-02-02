'use client';
import React, { useState } from 'react';

const FavoritesBookmarking = () => {
  const [activeTab, setActiveTab] = useState<'favorites' | 'collections'>('favorites');

  // Sample data (in a real app, this would come from an API)
  const sampleFavorites = [
    {
      id: 1,
      title: 'Classic Tiramisu',
      author: 'Chef Maria',
      cuisine: 'Italian',
      savedDate: '2024-02-01',
      image: '/placeholder.jpg',
      rating: 4.8,
    },
    {
      id: 2,
      title: 'Beef Stir Fry',
      author: 'Chef John',
      cuisine: 'Chinese',
      savedDate: '2024-01-28',
      image: '/placeholder.jpg',
      rating: 4.6,
    },
  ];

  const sampleCollections = [
    {
      id: 1,
      name: 'Weekend Brunch',
      recipeCount: 12,
      image: '/placeholder.jpg',
    },
    {
      id: 2,
      name: 'Quick Dinners',
      recipeCount: 8,
      image: '/placeholder.jpg',
    },
    {
      id: 3,
      name: 'Healthy Desserts',
      recipeCount: 5,
      image: '/placeholder.jpg',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">My Saved Recipes</h1>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-8">
        <button
          className={`py-4 px-6 text-sm font-medium ${
            activeTab === 'favorites'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('favorites')}
        >
          Favorites
        </button>
        <button
          className={`py-4 px-6 text-sm font-medium ${
            activeTab === 'collections'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('collections')}
        >
          Collections
        </button>
      </div>

      {/* Favorites Tab Content */}
      {activeTab === 'favorites' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleFavorites.map(recipe => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200">
                {/* Image placeholder */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  [Recipe Image]
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
                <div className="text-sm text-gray-600 mb-2">by {recipe.author}</div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">{recipe.cuisine}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-sm text-gray-600">{recipe.rating}</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  Saved on {new Date(recipe.savedDate).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Collections Tab Content */}
      {activeTab === 'collections' && (
        <div>
          <button className="mb-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Create New Collection
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleCollections.map(collection => (
              <div key={collection.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="h-40 bg-gray-200">
                  {/* Image placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    [Collection Cover]
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{collection.name}</h3>
                  <div className="text-sm text-gray-600">
                    {collection.recipeCount} recipes
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoritesBookmarking;