'use client';
import React, { useState } from 'react';

const RecipeUploading = () => {
  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    prepTime: '',
    cookTime: '',
    servings: '',
    difficulty: 'medium',
    ingredients: [''],
    instructions: [''],
    cuisine: '',
    dietaryTags: [] as string[],
    image: null as File | null,
    video: null as File | null
  });

  const cuisineTypes = [
    'Italian', 'Chinese', 'Mexican', 'Indian', 'Japanese',
    'Thai', 'French', 'Mediterranean', 'American', 'Other'
  ];

  const dietaryTags = [
    'Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free',
    'Low-Carb', 'Keto', 'Paleo', 'Halal', 'Kosher'
  ];

  const handleAddIngredient = () => {
    setRecipe({...recipe, ingredients: [...recipe.ingredients, '']});
  };

  const handleAddInstruction = () => {
    setRecipe({...recipe, instructions: [...recipe.instructions, '']});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Recipe submitted:', recipe);
  };

  return (
    <div className="container-custom max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-gradient">Share Your Recipe</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-8 rounded-lg shadow">
        {/* Basic Recipe Information */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-300">
              Recipe Title
            </label>
            <input
              type="text"
              id="title"
              value={recipe.title}
              onChange={(e) => setRecipe({...recipe, title: e.target.value})}
              className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-gray-100 
              px-3 py-2 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400"
              required
            />
          </div>

          <div>
            <label htmlFor="cuisine" className="block text-sm font-medium text-gray-300">
              Cuisine Type
            </label>
            <select
              id="cuisine"
              value={recipe.cuisine}
              onChange={(e) => setRecipe({...recipe, cuisine: e.target.value})}
              className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-gray-100 
              px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
              required
            >
              <option value="">Select Cuisine</option>
              {cuisineTypes.map(cuisine => (
                <option key={cuisine} value={cuisine}>{cuisine}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-300">
            Description
          </label>
          <textarea
            id="description"
            value={recipe.description}
            onChange={(e) => setRecipe({...recipe, description: e.target.value})}
            rows={3}
            className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-gray-100 
            px-3 py-2 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400"
            required
          />
        </div>

        {/* Recipe Details */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <label htmlFor="prepTime" className="block text-sm font-medium text-gray-300">
              Prep Time (minutes)
            </label>
            <input
              type="number"
              id="prepTime"
              value={recipe.prepTime}
              onChange={(e) => setRecipe({...recipe, prepTime: e.target.value})}
              className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-gray-100 
              px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="cookTime" className="block text-sm font-medium text-gray-300">
              Cook Time (minutes)
            </label>
            <input
              type="number"
              id="cookTime"
              value={recipe.cookTime}
              onChange={(e) => setRecipe({...recipe, cookTime: e.target.value})}
              className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-gray-100 
              px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="servings" className="block text-sm font-medium text-gray-300">
              Servings
            </label>
            <input
              type="number"
              id="servings"
              value={recipe.servings}
              onChange={(e) => setRecipe({...recipe, servings: e.target.value})}
              className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-gray-100 
              px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Ingredients
          </label>
          {recipe.ingredients.map((ingredient, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={ingredient}
                onChange={(e) => {
                  const newIngredients = [...recipe.ingredients];
                  newIngredients[index] = e.target.value;
                  setRecipe({...recipe, ingredients: newIngredients});
                }}
                placeholder="e.g., 2 cups flour"
                className="flex-1 rounded-md bg-gray-700 border border-gray-600 text-gray-100 
                px-3 py-2 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400"
                required
              />
              {index === recipe.ingredients.length - 1 && (
                <button
                  type="button"
                  onClick={handleAddIngredient}
                  className="px-3 py-2 bg-gray-700 text-gray-300 rounded-md hover:bg-gray-600"
                >
                  +
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Instructions
          </label>
          {recipe.instructions.map((instruction, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <textarea
                value={instruction}
                onChange={(e) => {
                  const newInstructions = [...recipe.instructions];
                  newInstructions[index] = e.target.value;
                  setRecipe({...recipe, instructions: newInstructions});
                }}
                placeholder={`Step ${index + 1}`}
                rows={2}
                className="flex-1 rounded-md bg-gray-700 border border-gray-600 text-gray-100 
                px-3 py-2 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400"
                required
              />
              {index === recipe.instructions.length - 1 && (
                <button
                  type="button"
                  onClick={handleAddInstruction}
                  className="px-3 py-2 bg-gray-700 text-gray-300 rounded-md hover:bg-gray-600"
                >
                  +
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Dietary Tags */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Dietary Tags
          </label>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {dietaryTags.map((tag) => (
              <label key={tag} className="flex items-center">
                <input
                  type="checkbox"
                  checked={recipe.dietaryTags.includes(tag)}
                  onChange={(e) => {
                    const updatedTags = e.target.checked
                      ? [...recipe.dietaryTags, tag]
                      : recipe.dietaryTags.filter(t => t !== tag);
                    setRecipe({...recipe, dietaryTags: updatedTags});
                  }}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                />
                <span className="ml-2 text-sm text-gray-300">{tag}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Media Upload */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-300">
              Recipe Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setRecipe({...recipe, image: e.target.files?.[0] || null})}
              className="mt-1 block w-full text-sm text-gray-300 
              file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 
              file:text-sm file:font-semibold file:bg-blue-900 file:text-blue-100 
              hover:file:bg-blue-800"
            />
          </div>

          <div>
            <label htmlFor="video" className="block text-sm font-medium text-gray-300">
              Recipe Video (optional)
            </label>
            <input
              type="file"
              id="video"
              accept="video/*"
              onChange={(e) => setRecipe({...recipe, video: e.target.files?.[0] || null})}
              className="mt-1 block w-full text-sm text-gray-300 
              file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 
              file:text-sm file:font-semibold file:bg-blue-900 file:text-blue-100 
              hover:file:bg-blue-800"
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn-primary w-full justify-center"
        >
          Share Recipe
        </button>
      </form>
    </div>
  );
};

export default RecipeUploading;
