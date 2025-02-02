import './globals.css';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { FaUser, FaCompass, FaEdit, FaHeart, FaHome } from 'react-icons/fa';

const montserrat = Montserrat({ subsets: ['latin'] });

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
      <body className={`${montserrat.className} bg-[var(--background)] text-[var(--text-primary)]`}>
        <nav className="bg-[var(--surface)] shadow-lg sticky top-0 z-50">
          <div className="container-custom">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="nav-link text-[var(--text-primary)] hover:text-[var(--accent)]">
                  <FaHome className="text-xl" />
                  <span>Recipe Hub</span>
                </Link>
              </div>
              <div className="flex items-center space-x-8">
                <Link href="/auth/user-registration" className="nav-link">
                  <FaUser className="text-xl" />
                  <span className="font-medium">Profile</span>
                </Link>
                <Link href="/recipes/discovery" className="nav-link">
                  <FaCompass className="text-xl" />
                  <span className="font-medium">Discover</span>
                </Link>
                <Link href="/recipes/upload" className="nav-link">
                  <FaEdit className="text-xl" />
                  <span className="font-medium">Share Recipe</span>
                </Link>
                <Link href="/social/favorites" className="nav-link">
                  <FaHeart className="text-xl" />
                  <span className="font-medium">Favorites</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="container-custom py-8 min-h-screen bg-[var(--background)]">
          {children}
        </main>
      </body>
    </html>
  );
}
