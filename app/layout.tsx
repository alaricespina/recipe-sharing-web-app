import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Recipe Sharing App',
  description: 'Share and discover amazing recipes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link href="/" className="flex items-center px-2 py-2 text-gray-900 hover:text-blue-600">
                  Recipe Sharing App
                </Link>
              </div>
              <div className="flex space-x-4">
                <Link href="/user-registration" className="px-3 py-2 text-gray-700 hover:text-blue-600">Profile</Link>
                <Link href="/recipe-discovery" className="px-3 py-2 text-gray-700 hover:text-blue-600">Discover</Link>
                <Link href="/recipe-uploading" className="px-3 py-2 text-gray-700 hover:text-blue-600">Share Recipe</Link>
                <Link href="/favorites-bookmarking" className="px-3 py-2 text-gray-700 hover:text-blue-600">Favorites</Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
