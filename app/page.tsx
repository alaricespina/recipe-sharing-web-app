import Link from 'next/link';

export default function Home() {
  const features = [
    {
      title: 'Recipe Discovery',
      description: 'Find recipes that match your preferences and dietary needs',
      href: '/recipe-discovery'
    },
    {
      title: 'Share Your Recipes',
      description: 'Upload and share your favorite recipes with the community',
      href: '/recipe-uploading'
    },
    {
      title: 'Meal Planning',
      description: 'Plan your meals and generate shopping lists automatically',
      href: '/meal-planning-grocery-lists'
    },
    {
      title: 'Cooking Tips',
      description: 'Learn new techniques and improve your cooking skills',
      href: '/cooking-tips-techniques'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Share Your Culinary Journey
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Join our community of food lovers to discover, share, and create amazing recipes.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/recipe-discovery"
            className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
          >
            Discover Recipes
          </Link>
          <Link
            href="/user-registration"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Create Account <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mx-auto mt-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Link 
              key={feature.title}
              href={feature.href}
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-blue-50 rounded-2xl p-8 mt-16">
        <h2 className="text-2xl font-bold text-gray-900">Ready to start cooking?</h2>
        <p className="mt-4 text-gray-600">
          Join our community and start sharing your recipes today.
        </p>
        <Link
          href="/user-registration"
          className="mt-6 inline-block rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
