'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaEnvelope, FaLock, FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  return (
    <div className="container-custom max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gradient mb-2">Welcome Back</h1>
        <p className="text-gray-400">Sign in to continue cooking</p>
      </div>

      <div className="card p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-500" />
              </div>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="block w-full pl-10 bg-gray-700 border border-gray-600 rounded-md 
                text-gray-100 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          {/* Password Input */}
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
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="block w-full pl-10 bg-gray-700 border border-gray-600 rounded-md 
                text-gray-100 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                checked={formData.rememberMe}
                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link
                href="/auth/forgot-password"
                className="text-blue-400 hover:text-blue-300"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-primary w-full justify-center">
            Sign in
          </button>

          {/* Social Login */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-800 text-gray-400">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <FaGoogle /> Google
            </button>
            <button
              type="button"
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <FaGithub /> GitHub
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-6 text-sm text-gray-400">
            Don't have an account?{' '}
            <Link href="/auth/user-registration" className="text-blue-400 hover:text-blue-300">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
