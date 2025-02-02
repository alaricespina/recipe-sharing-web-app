'use client';
import React, { useState } from 'react';

const SocialSharing = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null);

  // Sample recipes that can be shared (in a real app, this would come from an API)
  const shareableRecipes = [
    {
      id: 1,
      title: 'Homemade Pizza',
      description: 'Perfect crispy crust with your favorite toppings',
      image: '/placeholder.jpg',
      shares: 156,
      likes: 423,
    },
    {
      id: 2,
      title: 'Green Smoothie Bowl',
      description: 'Healthy and refreshing breakfast bowl',
      image: '/placeholder.jpg',
      shares: 89,
      likes: 245,
    },
  ];

  const socialPlatforms = [
    { name: 'Facebook', icon: 'fb', color: 'bg-blue-600' },
    { name: 'Twitter', icon: 'tw', color: 'bg-sky-500' },
    { name: 'Pinterest', icon: 'pin', color: 'bg-red-600' },
    { name: 'Instagram', icon: 'ig', color: 'bg-pink-600' },
  ];

  const handleShare = (platform: string, recipeId: number) => {
    console.log(`Sharing recipe ${recipeId} on ${platform}`);
    // Implement actual sharing functionality
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Share Your Culinary Creations</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Share Your Recent Recipes</h2>
        <p className="text-gray-600 mb-6">
          Choose a recipe to share on your favorite social media platforms and inspire others with your cooking!
        </p>

        {/* Recipe List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {shareableRecipes.map(recipe => (
            <div 
              key={recipe.id}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                selectedRecipe === recipe.id ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'
              }`}
              onClick={() => setSelectedRecipe(recipe.id)}
            >
              <div className="flex gap-4">
                <div className="w-24 h-24 bg-gray-200 rounded-md flex items-center justify-center">
                  [Image]
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">{recipe.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{recipe.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-4">{recipe.shares} shares</span>
                    <span>{recipe.likes} likes</span>
                  </div>
                </div>
              </div>

              {selectedRecipe === recipe.id && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="text-sm font-medium text-gray-700 mb-2">Share on:</div>
                  <div className="flex gap-2">
                    {socialPlatforms.map(platform => (
                      <button
                        key={platform.name}
                        onClick={() => handleShare(platform.name, recipe.id)}
                        className={`${platform.color} text-white px-4 py-2 rounded-md text-sm hover:opacity-90 transition-opacity`}
                      >
                        {platform.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Integration Tips */}
      <div className="bg-blue-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Tips for Social Sharing</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Take bright, clear photos of your dishes
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Use relevant hashtags to reach more food enthusiasts
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Share your cooking process and tips in the description
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Engage with your followers' comments and questions
          </li>
        </ul>
      </div>

      {/* Stats Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">1.2K</div>
          <div className="text-gray-600">Total Recipe Shares</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">854</div>
          <div className="text-gray-600">Social Media Followers</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">245</div>
          <div className="text-gray-600">Recipe Recommendations</div>
        </div>
      </div>
    </div>
  );
};

export default SocialSharing;