import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm font-medium opacity-70">
            © {new Date().getFullYear()} Grow With Med. All rights reserved.
          </div>
          
          <div className="flex items-center gap-8 text-sm font-medium">
            <Link 
              to="/blog" 
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              Blog
            </Link>
            <Link 
              to="/faq" 
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              FAQ
            </Link>
            <Link 
              to="/privacy" 
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
