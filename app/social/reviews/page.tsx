'use client';
import React, { useState } from 'react';

const UserReviewsRatings = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null);
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' });
  const [sortBy, setSortBy] = useState<'recent' | 'rating'>('recent');

  // Sample recipe reviews data (in a real app, this would come from an API)
  const recipes = [
    {
      id: 1,
      title: 'Classic Margherita Pizza',
      author: 'Chef Mario',
      avgRating: 4.8,
      totalReviews: 245,
      reviews: [
        {
          id: 1,
          user: 'Sarah K.',
          rating: 5,
          comment: 'Perfect recipe! The crust was crispy and the flavors were amazing.',
          date: '2024-02-01',
          helpful: 32,
        },
        {
          id: 2,
          user: 'Mike R.',
          rating: 4,
          comment: 'Great recipe, but I would add more basil next time.',
          date: '2024-01-30',
          helpful: 18,
        },
      ],
    },
    {
      id: 2,
      title: 'Chocolate Lava Cake',
      author: 'Chef Emma',
      avgRating: 4.6,
      totalReviews: 189,
      reviews: [
        {
          id: 3,
          user: 'John D.',
          rating: 5,
          comment: 'Restaurant quality dessert! Easy to follow instructions.',
          date: '2024-02-01',
          helpful: 45,
        },
      ],
    },
  ];

  const handleSubmitReview = (recipeId: number) => {
    if (newReview.rating === 0) return;
    console.log('Submitting review for recipe', recipeId, newReview);
    // Reset form
    setNewReview({ rating: 0, comment: '' });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Reviews & Ratings</h1>

      {/* Recipe Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {recipes.map(recipe => (
          <div
            key={recipe.id}
            className={`bg-white p-6 rounded-lg shadow-md cursor-pointer transition-all ${
              selectedRecipe === recipe.id ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => setSelectedRecipe(recipe.id)}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold">{recipe.title}</h2>
                <p className="text-gray-600">by {recipe.author}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center">
                  <span className="text-yellow-400 text-xl">★</span>
                  <span className="ml-1 font-semibold">{recipe.avgRating}</span>
                </div>
                <span className="text-sm text-gray-500">
                  {recipe.totalReviews} reviews
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedRecipe && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">
              {recipes.find(r => r.id === selectedRecipe)?.title}
            </h2>

            {/* New Review Form */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className={`text-2xl ${
                          star <= newReview.rating
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        } hover:text-yellow-400 transition-colors`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Review
                  </label>
                  <textarea
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    rows={4}
                    placeholder="Share your experience with this recipe..."
                  />
                </div>
                <button
                  onClick={() => handleSubmitReview(selectedRecipe)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Submit Review
                </button>
              </div>
            </div>

            {/* Reviews List */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Reviews</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'recent' | 'rating')}
                  className="px-3 py-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="recent">Most Recent</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              <div className="space-y-6">
                {recipes
                  .find(r => r.id === selectedRecipe)
                  ?.reviews.map(review => (
                    <div key={review.id} className="border-b last:border-0 pb-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="font-medium">{review.user}</div>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, index) => (
                              <span
                                key={index}
                                className={`text-lg ${
                                  index < review.rating
                                    ? 'text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-2">{review.comment}</p>
                      <button className="text-sm text-gray-500 hover:text-gray-700">
                        Helpful ({review.helpful})
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Review Guidelines */}
      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Review Guidelines</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Be specific about what you liked or didn't like
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Share any modifications you made to the recipe
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Keep reviews respectful and constructive
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Include photos of your results if possible
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserReviewsRatings;