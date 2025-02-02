'use client';
import React, { useState } from 'react';

const IngredientQuantityCalculator = () => {
  const [servings, setServings] = useState(4);
  const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null);

  // Sample recipe data (in a real app, this would come from an API)
  const recipes = [
    {
      id: 1,
      title: 'Classic Lasagna',
      baseServings: 4,
      prepTime: '30 mins',
      cookTime: '45 mins',
      ingredients: [
        { name: 'Ground Beef', amount: 500, unit: 'g' },
        { name: 'Lasagna Noodles', amount: 12, unit: 'sheets' },
        { name: 'Marinara Sauce', amount: 700, unit: 'ml' },
        { name: 'Ricotta Cheese', amount: 450, unit: 'g' },
        { name: 'Mozzarella Cheese', amount: 300, unit: 'g' },
        { name: 'Parmesan Cheese', amount: 100, unit: 'g' },
      ],
    },
    {
      id: 2,
      title: 'Chocolate Chip Cookies',
      baseServings: 24,
      prepTime: '15 mins',
      cookTime: '12 mins',
      ingredients: [
        { name: 'All-Purpose Flour', amount: 280, unit: 'g' },
        { name: 'Butter', amount: 227, unit: 'g' },
        { name: 'Brown Sugar', amount: 200, unit: 'g' },
        { name: 'Granulated Sugar', amount: 100, unit: 'g' },
        { name: 'Chocolate Chips', amount: 340, unit: 'g' },
        { name: 'Eggs', amount: 2, unit: '' },
      ],
    },
  ];

  const calculateAmount = (amount: number, baseServings: number) => {
    const ratio = servings / baseServings;
    const newAmount = amount * ratio;
    
    // Round to 1 decimal place for most measurements
    return Math.round(newAmount * 10) / 10;
  };

  const formatAmount = (amount: number) => {
    if (Number.isInteger(amount)) {
      return amount.toString();
    }
    return amount.toFixed(1);
  };

  const handleServingChange = (increment: boolean) => {
    setServings(prev => Math.max(1, increment ? prev + 1 : prev - 1));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Ingredient Quantity Calculator</h1>

      {/* Recipe Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {recipes.map(recipe => (
          <div
            key={recipe.id}
            className={`bg-white p-6 rounded-lg shadow-md cursor-pointer transition-all ${
              selectedRecipe === recipe.id ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => {
              setSelectedRecipe(recipe.id);
              setServings(recipe.baseServings);
            }}
          >
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <div className="text-gray-600">
              <div>Base Servings: {recipe.baseServings}</div>
              <div>Prep Time: {recipe.prepTime}</div>
              <div>Cook Time: {recipe.cookTime}</div>
            </div>
          </div>
        ))}
      </div>

      {selectedRecipe && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              {recipes.find(r => r.id === selectedRecipe)?.title}
            </h2>

            {/* Serving Size Adjuster */}
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg mb-6">
              <label className="font-medium">Adjust Servings:</label>
              <div className="flex items-center">
                <button
                  onClick={() => handleServingChange(false)}
                  className="px-3 py-1 border border-gray-300 rounded-l-md hover:bg-gray-100"
                >
                  -
                </button>
                <input
                  type="number"
                  value={servings}
                  onChange={(e) => setServings(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center border-y border-gray-300 py-1"
                  min="1"
                />
                <button
                  onClick={() => handleServingChange(true)}
                  className="px-3 py-1 border border-gray-300 rounded-r-md hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Ingredients Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Ingredient</th>
                    <th className="px-4 py-2 text-right text-sm font-medium text-gray-700">Original Amount</th>
                    <th className="px-4 py-2 text-right text-sm font-medium text-gray-700">Adjusted Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recipes
                    .find(r => r.id === selectedRecipe)
                    ?.ingredients.map((ingredient, index) => (
                      <tr key={index}>
                        <td className="px-4 py-3">{ingredient.name}</td>
                        <td className="px-4 py-3 text-right text-gray-600">
                          {formatAmount(ingredient.amount)} {ingredient.unit}
                        </td>
                        <td className="px-4 py-3 text-right font-medium">
                          {formatAmount(calculateAmount(
                            ingredient.amount,
                            recipes.find(r => r.id === selectedRecipe)?.baseServings || 1
                          ))} {ingredient.unit}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Measurement Tips */}
          <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Measurement Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium mb-2">Common Conversions</h4>
                <ul className="text-sm space-y-1">
                  <li>1 cup = 240ml</li>
                  <li>1 tbsp = 15ml</li>
                  <li>1 tsp = 5ml</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Weight Conversions</h4>
                <ul className="text-sm space-y-1">
                  <li>1 pound = 454g</li>
                  <li>1 ounce = 28g</li>
                  <li>1 kg = 2.2 pounds</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Tips</h4>
                <ul className="text-sm space-y-1">
                  <li>Use measuring tools for accuracy</li>
                  <li>Level off dry ingredients</li>
                  <li>Check your measuring tool units</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IngredientQuantityCalculator;