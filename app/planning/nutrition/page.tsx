'use client';
import React, { useState } from 'react';

const NutritionalInformation = () => {
  const [servingSize, setServingSize] = useState(1);

  // Sample recipe nutritional data (in a real app, this would come from an API)
  const recipe = {
    id: 1,
    title: 'Grilled Chicken Quinoa Bowl',
    baseServingSize: 1,
    servingSizeUnit: 'bowl',
    calories: 450,
    macros: {
      protein: 32,
      carbs: 48,
      fat: 18,
      fiber: 6,
    },
    vitamins: [
      { name: 'Vitamin A', amount: '15%' },
      { name: 'Vitamin C', amount: '25%' },
      { name: 'Vitamin D', amount: '10%' },
      { name: 'Iron', amount: '20%' },
    ],
    ingredients: [
      { name: 'Chicken Breast', calories: 165, protein: 31, carbs: 0, fat: 3.6 },
      { name: 'Quinoa', calories: 120, protein: 4.4, carbs: 21, fat: 1.9 },
      { name: 'Mixed Vegetables', calories: 85, protein: 4, carbs: 17, fat: 0.5 },
      { name: 'Olive Oil', calories: 80, protein: 0, carbs: 0, fat: 9 },
    ],
    dietaryInfo: {
      glutenFree: true,
      dairyFree: true,
      nutFree: true,
      vegan: false,
    },
  };

  const calculateNutrition = (value: number) => {
    return Math.round(value * servingSize);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Nutritional Information</h1>

      {/* Recipe Header */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">{recipe.title}</h2>
        
        {/* Serving Size Adjuster */}
        <div className="flex items-center gap-4 mb-6">
          <label htmlFor="servingSize" className="text-sm font-medium text-gray-700">
            Adjust Serving Size:
          </label>
          <div className="flex items-center">
            <button
              onClick={() => setServingSize(prev => Math.max(1, prev - 1))}
              className="px-3 py-1 border border-gray-300 rounded-l-md hover:bg-gray-50"
            >
              -
            </button>
            <input
              type="number"
              id="servingSize"
              value={servingSize}
              onChange={(e) => setServingSize(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-16 text-center border-y border-gray-300 py-1"
            />
            <button
              onClick={() => setServingSize(prev => prev + 1)}
              className="px-3 py-1 border border-gray-300 rounded-r-md hover:bg-gray-50"
            >
              +
            </button>
          </div>
          <span className="text-sm text-gray-500">
            {servingSize} {recipe.servingSizeUnit}{servingSize > 1 ? 's' : ''}
          </span>
        </div>

        {/* Dietary Tags */}
        <div className="flex flex-wrap gap-2">
          {Object.entries(recipe.dietaryInfo).map(([key, value]) => (
            value && (
              <span
                key={key}
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
              >
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
            )
          ))}
        </div>
      </div>

      {/* Nutrition Facts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-gray-900">
            Nutrition Facts
          </h3>
          
          <div className="space-y-4">
            <div className="flex justify-between border-b border-gray-200 py-2">
              <span className="font-bold">Calories</span>
              <span>{calculateNutrition(recipe.calories)}</span>
            </div>

            <div className="border-b border-gray-200 py-2">
              <div className="font-bold mb-2">Total Macronutrients</div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Protein</span>
                  <span>{calculateNutrition(recipe.macros.protein)}g</span>
                </div>
                <div className="flex justify-between">
                  <span>Carbohydrates</span>
                  <span>{calculateNutrition(recipe.macros.carbs)}g</span>
                </div>
                <div className="flex justify-between">
                  <span>Fat</span>
                  <span>{calculateNutrition(recipe.macros.fat)}g</span>
                </div>
                <div className="flex justify-between">
                  <span>Fiber</span>
                  <span>{calculateNutrition(recipe.macros.fiber)}g</span>
                </div>
              </div>
            </div>

            <div className="py-2">
              <div className="font-bold mb-2">Vitamins & Minerals</div>
              <div className="grid grid-cols-2 gap-2">
                {recipe.vitamins.map(vitamin => (
                  <div key={vitamin.name} className="flex justify-between">
                    <span>{vitamin.name}</span>
                    <span>{vitamin.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Ingredient Breakdown */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-6">Ingredient Breakdown</h3>
          <div className="space-y-4">
            {recipe.ingredients.map(ingredient => (
              <div key={ingredient.name} className="border-b border-gray-200 py-2">
                <div className="font-medium mb-2">{ingredient.name}</div>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>Calories: {calculateNutrition(ingredient.calories)}</div>
                  <div>Protein: {calculateNutrition(ingredient.protein)}g</div>
                  <div>Carbs: {calculateNutrition(ingredient.carbs)}g</div>
                  <div>Fat: {calculateNutrition(ingredient.fat)}g</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nutritional Tips */}
      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Nutritional Tips</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            This recipe is high in protein and fiber, making it filling and nutritious
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Rich in complex carbohydrates for sustained energy
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Good source of healthy fats from olive oil
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Contains essential vitamins and minerals for overall health
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NutritionalInformation;