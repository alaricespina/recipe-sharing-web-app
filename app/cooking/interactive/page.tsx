'use client';
import React, { useState, useEffect } from 'react';

const InteractiveCookingExperience = () => {
  const [activeTimer, setActiveTimer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null);

  // Sample recipe data (in a real app, this would come from an API)
  const recipes = [
    {
      id: 1,
      title: 'Risotto al Funghi',
      totalTime: '35 mins',
      steps: [
        {
          id: 1,
          description: 'Sauté mushrooms until golden brown',
          duration: 300, // 5 minutes in seconds
          tips: ['Use medium-high heat', 'Don\'t overcrowd the pan'],
        },
        {
          id: 2,
          description: 'Toast rice in butter',
          duration: 180, // 3 minutes
          tips: ['Rice should become translucent', 'Stir constantly'],
        },
        {
          id: 3,
          description: 'Gradually add hot broth',
          duration: 1200, // 20 minutes
          tips: ['Add broth one ladle at a time', 'Maintain gentle simmer'],
        },
      ],
    },
    {
      id: 2,
      title: 'Perfect Soft-Boiled Eggs',
      totalTime: '7 mins',
      steps: [
        {
          id: 1,
          description: 'Bring water to boil',
          duration: 300, // 5 minutes
          tips: ['Use enough water to cover eggs', 'Add pinch of salt'],
        },
        {
          id: 2,
          description: 'Cook eggs',
          duration: 420, // 7 minutes
          tips: ['Maintain gentle boil', 'Use timer for consistency'],
        },
      ],
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (activeTimer !== null && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [activeTimer, timeLeft]);

  const startTimer = (duration: number) => {
    setTimeLeft(duration);
    setActiveTimer(duration);
  };

  const stopTimer = () => {
    setActiveTimer(null);
    setTimeLeft(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Interactive Cooking Experience</h1>

      {/* Active Timer Display */}
      {activeTimer !== null && (
        <div className="fixed bottom-8 right-8 bg-white p-6 rounded-lg shadow-lg z-50">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">{formatTime(timeLeft)}</div>
            <button
              onClick={stopTimer}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Stop Timer
            </button>
          </div>
        </div>
      )}

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
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-600">Total Time: {recipe.totalTime}</p>
          </div>
        ))}
      </div>

      {/* Interactive Steps */}
      {selectedRecipe && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">
            {recipes.find(r => r.id === selectedRecipe)?.title}
          </h2>

          <div className="space-y-8">
            {recipes
              .find(r => r.id === selectedRecipe)
              ?.steps.map((step, index) => (
                <div key={step.id} className="border-b pb-6 last:border-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-medium mr-3">
                          {index + 1}
                        </span>
                        <h3 className="text-lg font-medium">{step.description}</h3>
                      </div>
                      <div className="ml-11 text-gray-600">
                        Duration: {formatTime(step.duration)}
                      </div>
                    </div>
                    <button
                      onClick={() => startTimer(step.duration)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Start Timer
                    </button>
                  </div>

                  {/* Step Tips */}
                  <div className="ml-11 mt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Tips:</h4>
                    <ul className="space-y-1">
                      {step.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start text-sm text-gray-600">
                          <span className="text-blue-500 mr-2">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Cooking Tips */}
      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Tips for Success</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start">
            <div className="mr-4">⏰</div>
            <div>
              <h4 className="font-medium mb-1">Use Timers</h4>
              <p className="text-sm text-gray-600">
                Set timers for precise cooking and never overcook your dishes
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4">📝</div>
            <div>
              <h4 className="font-medium mb-1">Follow Steps</h4>
              <p className="text-sm text-gray-600">
                Complete each step before moving to the next
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4">🔍</div>
            <div>
              <h4 className="font-medium mb-1">Check Progress</h4>
              <p className="text-sm text-gray-600">
                Monitor visual cues and textures while cooking
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCookingExperience;