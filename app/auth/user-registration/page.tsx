'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaUser, FaEnvelope, FaLock, FaUtensils } from 'react-icons/fa';

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    cookingExperience: 'beginner',
    dietaryPreferences: [] as string[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const dietaryOptions = [
    'Vegetarian',
    'Vegan',
    'Gluten-Free',
    'Dairy-Free',
    'Keto',
    'Paleo'
  ];

  return (
    <div className="container-custom max-w-2xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gradient mb-2">Create Your Profile</h1>
        <p className="text-gray-400">Join our community of food lovers</p>
      </div>

      <div className="card p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-500" />
              </div>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                className="block w-full pl-10 bg-gray-700 border border-gray-600 rounded-md 
                text-gray-100 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Choose a username"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-500" />
              </div>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="block w-full pl-10 bg-gray-700 border border-gray-600 rounded-md 
                text-gray-100 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-500" />
              </div>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="block w-full pl-10 bg-gray-700 border border-gray-600 rounded-md 
                text-gray-100 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-500" />
              </div>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                className="block w-full pl-10 bg-gray-700 border border-gray-600 rounded-md 
                text-gray-100 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {/* Cooking Experience */}
          <div>
            <label htmlFor="cookingExperience" className="block text-sm font-medium text-gray-300 mb-2">
              Cooking Experience
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUtensils className="text-gray-500" />
              </div>
              <select
                id="cookingExperience"
                value={formData.cookingExperience}
                onChange={(e) => setFormData({...formData, cookingExperience: e.target.value})}
                className="block w-full pl-10 bg-gray-700 border border-gray-600 rounded-md 
                text-gray-100 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="professional">Professional</option>
              </select>
            </div>
          </div>

          {/* Dietary Preferences */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Dietary Preferences
            </label>
            <div className="grid grid-cols-2 gap-4">
              {dietaryOptions.map((option) => (
                <label key={option} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.dietaryPreferences.includes(option)}
                    onChange={(e) => {
                      const updatedPreferences = e.target.checked
                        ? [...formData.dietaryPreferences, option]
                        : formData.dietaryPreferences.filter(pref => pref !== option);
                      setFormData({...formData, dietaryPreferences: updatedPreferences});
                    }}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                  />
                  <span className="ml-2 text-sm text-gray-300">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary w-full justify-center"
          >
            Create Account
          </button>

          {/* Login Link */}
          <div className="text-center text-sm text-gray-400">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-blue-400 hover:text-blue-300">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRegistration;
