import { Heart } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

export function Footer({ isDark }: FooterProps) {
  return (
    <footer
      className={`py-8 ${
        isDark ? 'bg-gray-800 border-t border-gray-700' : 'bg-gray-50 border-t border-gray-200'
      }`}
    >
      <div className="container mx-auto px-6 text-center">
        <p
          className={`flex items-center justify-center gap-2 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          Made with <Heart className="text-green-500" size={16} fill="currentColor" /> by Anjali Viswakarma
        </p>
        <p
          className={`mt-2 text-sm ${
            isDark ? 'text-gray-500' : 'text-gray-500'
          }`}
        >
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
