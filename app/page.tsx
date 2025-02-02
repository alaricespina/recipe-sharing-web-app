import Link from 'next/link';
import { FaCompass, FaUpload, FaCalendar, FaGraduationCap, FaSearch, FaUserPlus } from 'react-icons/fa';

export default function Home() {
  const features = [
    {
      title: 'Recipe Discovery',
      description: 'Find recipes that match your preferences and dietary needs',
      href: '/recipes/discovery'
    },
    {
      title: 'Share Your Recipes',
      description: 'Upload and share your favorite recipes with the community',
      href: '/recipes/upload'
    },
    {
      title: 'Meal Planning',
      description: 'Plan your meals and generate shopping lists automatically',
      href: '/planning/planner'
    },
    {
      title: 'Cooking Tips',
      description: 'Learn new techniques and improve your cooking skills',
      href: '/cooking/techniques'
    }
  ];

  return (
    <div className="space-y-12 container-custom">
      {/* Hero Section */}
      <div className="text-center section">
        <h1 className="text-4xl font-bold tracking-tight text-gradient sm:text-6xl">
          Share Your Culinary Journey
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Join our community of food lovers to discover, share, and create amazing recipes.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/recipes/discovery"
            className="btn-primary"
          >
            Discover Recipes
          </Link>
          <Link
            href="/auth/user-registration"
            className="btn-secondary"
          >
            Create Account <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mx-auto mt-16 section">
        <div className="features-grid">
          {features.map((feature) => (
            <Link 
              key={feature.title}
              href={feature.href}
              className="card"
            >
              {feature.title === 'Recipe Discovery' && <FaSearch className="text-2xl mb-4 text-blue-400" />}
              {feature.title === 'Share Your Recipes' && <FaUpload className="text-2xl mb-4 text-blue-400" />}
              {feature.title === 'Meal Planning' && <FaCalendar className="text-2xl mb-4 text-blue-400" />}
              {feature.title === 'Cooking Tips' && <FaGraduationCap className="text-2xl mb-4 text-blue-400" />}
              <h3 className="text-lg font-semibold text-gray-100">{feature.title}</h3>
              <p className="mt-2 text-gray-300">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gray-800 rounded-2xl p-8 mt-16">
        <h2 className="text-2xl font-bold text-gradient">Ready to start cooking?</h2>
        <p className="mt-4 text-gray-300">
          Join our community and start sharing your recipes today.
        </p>
        <Link
          href="/auth/user-registration"
          className="btn-primary mt-6"
        >
          <span className="flex items-center gap-2">
            <FaUserPlus />
            Get Started
          </span>
        </Link>
      </div>
    </div>
  );
}
