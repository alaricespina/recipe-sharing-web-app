'use client';
import React, { useState } from 'react';

const CommunityInteraction = () => {
  const [activeRecipe, setActiveRecipe] = useState<number | null>(null);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(0);

  // Sample community recipes (in a real app, this would come from an API)
  const communityRecipes = [
    {
      id: 1,
      title: 'Mediterranean Salad',
      author: 'Sarah K.',
      image: '/placeholder.jpg',
      rating: 4.7,
      comments: [
        { id: 1, user: 'Mike', text: 'Loved this recipe! So fresh and healthy.', date: '2024-02-01' },
        { id: 2, user: 'Lisa', text: 'I added feta cheese and it was perfect!', date: '2024-02-01' },
      ],
    },
    {
      id: 2,
      title: 'Chocolate Lava Cake',
      author: 'Chef John',
      image: '/placeholder.jpg',
      rating: 4.9,
      comments: [
        { id: 3, user: 'Emily', text: 'Amazing dessert! A bit tricky but worth it.', date: '2024-02-01' },
      ],
    },
  ];

  const handleCommentSubmit = (recipeId: number) => {
    if (!newComment.trim()) return;
    console.log('New comment for recipe', recipeId, ':', newComment);
    setNewComment('');
  };

  const handleRating = (recipeId: number, rating: number) => {
    console.log('Rating recipe', recipeId, 'with', rating, 'stars');
    setRating(rating);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Community Recipes</h1>

      <div className="grid grid-cols-1 gap-8">
        {communityRecipes.map(recipe => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Recipe Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">{recipe.title}</h2>
                  <p className="text-gray-600">by {recipe.author}</p>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center mr-2">
                    <span className="text-yellow-400 text-xl">★</span>
                    <span className="ml-1">{recipe.rating}</span>
                  </div>
                  <button
                    onClick={() => setActiveRecipe(activeRecipe === recipe.id ? null : recipe.id)}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    {activeRecipe === recipe.id ? 'Close' : 'Interact'}
                  </button>
                </div>
              </div>
            </div>

            {/* Recipe Interaction Section */}
            {activeRecipe === recipe.id && (
              <div className="p-6 bg-gray-50">
                {/* Rating Section */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Rate this Recipe</h3>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => handleRating(recipe.id, star)}
                        className={`text-2xl ${
                          star <= rating ? 'text-yellow-400' : 'text-gray-300'
                        } hover:text-yellow-400 transition-colors`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>

                {/* Comments Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Comments</h3>
                  {/* Existing Comments */}
                  <div className="space-y-4 mb-4">
                    {recipe.comments.map(comment => (
                      <div key={comment.id} className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{comment.user}</span>
                          <span className="text-sm text-gray-500">
                            {new Date(comment.date).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-gray-700">{comment.text}</p>
                      </div>
                    ))}
                  </div>

                  {/* New Comment Form */}
                  <div className="mt-4">
                    <textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Share your thoughts..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={3}
                    />
                    <button
                      onClick={() => handleCommentSubmit(recipe.id)}
                      className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Community Guidelines */}
      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Community Guidelines</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Be respectful and constructive in your comments
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Share helpful tips and variations you tried
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Ask questions if you need clarification
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Report inappropriate content to moderators
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CommunityInteraction;