'use client';
import React, { useState } from 'react';

const MealPlanningGroceryLists = () => {
  const [activeTab, setActiveTab] = useState<'planning' | 'grocery'>('planning');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  // Sample meal plan data (in a real app, this would come from an API)
  const weeklyPlan = {
    '2024-02-01': [
      { id: 1, meal: 'breakfast', recipe: 'Overnight Oats', servings: 2 },
      { id: 2, meal: 'lunch', recipe: 'Quinoa Salad', servings: 2 },
      { id: 3, meal: 'dinner', recipe: 'Grilled Chicken', servings: 4 },
    ],
    '2024-02-02': [
      { id: 4, meal: 'breakfast', recipe: 'Smoothie Bowl', servings: 2 },
      { id: 5, meal: 'lunch', recipe: 'Vegetable Wrap', servings: 1 },
      { id: 6, meal: 'dinner', recipe: 'Salmon Pasta', servings: 3 },
    ],
  };

  // Sample grocery list data
  const groceryList = [
    {
      category: 'Produce',
      items: [
        { id: 1, name: 'Spinach', quantity: '200g', checked: false },
        { id: 2, name: 'Tomatoes', quantity: '4', checked: false },
        { id: 3, name: 'Avocado', quantity: '2', checked: true },
      ],
    },
    {
      category: 'Protein',
      items: [
        { id: 4, name: 'Chicken Breast', quantity: '500g', checked: false },
        { id: 5, name: 'Salmon Fillet', quantity: '300g', checked: false },
      ],
    },
    {
      category: 'Pantry',
      items: [
        { id: 6, name: 'Quinoa', quantity: '1 cup', checked: true },
        { id: 7, name: 'Olive Oil', quantity: '100ml', checked: false },
      ],
    },
  ];

  const [checkedItems, setCheckedItems] = useState<number[]>([3, 6]);

  const toggleItem = (itemId: number) => {
    setCheckedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Meal Planning & Grocery Lists</h1>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 mb-8">
        <button
          className={`py-4 px-6 text-sm font-medium ${
            activeTab === 'planning'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('planning')}
        >
          Meal Planning
        </button>
        <button
          className={`py-4 px-6 text-sm font-medium ${
            activeTab === 'grocery'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('grocery')}
        >
          Grocery List
        </button>
      </div>

      {/* Meal Planning Tab */}
      {activeTab === 'planning' && (
        <div>
          {/* Date Selection */}
          <div className="mb-6">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
              Select Date
            </label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Meal Plan Grid */}
          <div className="grid gap-6">
            {['breakfast', 'lunch', 'dinner'].map((meal) => (
              <div key={meal} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold capitalize mb-4">{meal}</h3>
                <div className="flex items-center justify-between">
                  <div>
                    {weeklyPlan[selectedDate as keyof typeof weeklyPlan]?.find(m => m.meal === meal)?.recipe || 
                     'No meal planned'}
                  </div>
                  <button className="px-4 py-2 text-sm bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200">
                    Add Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Weekly Overview */}
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Week Overview</h3>
            <div className="grid grid-cols-7 gap-4">
              {Array.from({ length: 7 }).map((_, index) => {
                const date = new Date();
                date.setDate(date.getDate() + index);
                return (
                  <div
                    key={index}
                    className="text-center p-3 bg-white rounded-md shadow-sm"
                  >
                    <div className="text-sm font-medium mb-1">
                      {date.toLocaleDateString('en-US', { weekday: 'short' })}
                    </div>
                    <div className="text-xs text-gray-500">
                      {date.getDate()}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Grocery List Tab */}
      {activeTab === 'grocery' && (
        <div>
          {/* List Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Shopping List</h2>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Add Item
            </button>
          </div>

          {/* Grocery Categories */}
          <div className="space-y-6">
            {groceryList.map(category => (
              <div key={category.category} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.items.map(item => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md"
                    >
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={checkedItems.includes(item.id)}
                          onChange={() => toggleItem(item.id)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className={`ml-3 ${checkedItems.includes(item.id) ? 'line-through text-gray-400' : ''}`}>
                          {item.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">{item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-end gap-4">
            <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
              Clear Completed
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Share List
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealPlanningGroceryLists;