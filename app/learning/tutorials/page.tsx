'use client';
import React, { useState } from 'react';

const VideoTutorials = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Videos' },
    { id: 'basics', name: 'Cooking Basics' },
    { id: 'techniques', name: 'Advanced Techniques' },
    { id: 'cuisine', name: 'World Cuisines' },
    { id: 'baking', name: 'Baking & Pastry' },
  ];

  // Sample video tutorials data (in a real app, this would come from an API)
  const tutorials = [
    {
      id: 1,
      title: 'Knife Skills: Basic Cutting Techniques',
      thumbnail: '/placeholder.jpg',
      duration: '8:45',
      category: 'basics',
      instructor: 'Chef Maria',
      description: 'Learn essential knife skills for efficient and safe food preparation.',
      steps: [
        'Proper knife grip and positioning',
        'Basic vegetable cuts: dice, julienne, chiffonade',
        'Safe cutting techniques',
        'Knife maintenance and care',
      ],
    },
    {
      id: 2,
      title: 'Perfect French Omelette',
      thumbnail: '/placeholder.jpg',
      duration: '12:30',
      category: 'techniques',
      instructor: 'Chef Jean',
      description: 'Master the art of making a classic French omelette.',
      steps: [
        'Egg preparation and seasoning',
        'Pan temperature control',
        'Folding techniques',
        'Timing and doneness',
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Video Tutorials</h1>

      {/* Category Navigation */}
      <div className="flex overflow-x-auto pb-2 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 mx-2 rounded-full whitespace-nowrap ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Video Player Section */}
        {selectedVideo && (
          <div className="md:col-span-2 bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="aspect-w-16 aspect-h-9 bg-black">
              <div className="w-full h-full flex items-center justify-center text-white">
                [Video Player]
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">
                {tutorials.find(t => t.id === selectedVideo)?.title}
              </h2>
              <div className="flex items-center text-gray-600 mb-4">
                <span className="mr-4">
                  Instructor: {tutorials.find(t => t.id === selectedVideo)?.instructor}
                </span>
                <span>
                  Duration: {tutorials.find(t => t.id === selectedVideo)?.duration}
                </span>
              </div>
              <p className="text-gray-700 mb-6">
                {tutorials.find(t => t.id === selectedVideo)?.description}
              </p>
              
              <div className="border-t pt-4">
                <h3 className="font-semibold mb-3">Step-by-Step Guide</h3>
                <ol className="space-y-2">
                  {tutorials.find(t => t.id === selectedVideo)?.steps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="font-medium mr-2">{index + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* Video Grid */}
        {tutorials
          .filter(tutorial => selectedCategory === 'all' || tutorial.category === selectedCategory)
          .map(tutorial => (
            <div
              key={tutorial.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedVideo(tutorial.id)}
            >
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    [Tutorial Thumbnail]
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                  {tutorial.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{tutorial.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{tutorial.instructor}</span>
                  <span className="px-2 py-1 bg-gray-100 rounded-full">
                    {categories.find(c => c.id === tutorial.category)?.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Learning Tips */}
      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Tips for Learning</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start">
            <div className="mr-4 text-blue-500 text-xl">👀</div>
            <div>
              <h4 className="font-medium mb-1">Watch Carefully</h4>
              <p className="text-sm text-gray-600">Pay attention to technique demonstrations and details</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 text-blue-500 text-xl">🔄</div>
            <div>
              <h4 className="font-medium mb-1">Practice</h4>
              <p className="text-sm text-gray-600">Repeat techniques to build muscle memory</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 text-blue-500 text-xl">📝</div>
            <div>
              <h4 className="font-medium mb-1">Take Notes</h4>
              <p className="text-sm text-gray-600">Write down key points and tips for reference</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTutorials;