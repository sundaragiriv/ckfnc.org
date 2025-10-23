import { Phone, Mail } from 'lucide-react';

const Header = () => {

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4 text-gray-800" />
                <span className="text-gray-800">610-457-3193</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4 text-gray-800" />
                <span className="text-gray-800">info@ckfnc.org</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="text-sm text-gray-800">Making Hope Happen • One Child at a Time</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-full flex items-center justify-center border-2 border-gray-300" style={{ minWidth: 56, minHeight: 56 }}>
              <img
                src="/logo.png"
                alt="Kids First of NC Logo"
                className="h-12 w-12 rounded-full object-contain bg-white border border-gray-200 p-1"
                style={{ background: '#fff', display: 'block' }}
              />
            </div>
            <span className="font-heading text-xl font-bold text-primary ml-2 hidden sm:inline">Kids First of NC</span>
          </div>

          {/* Donate Button */}
          <a
            href="#donate"
            className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-2 rounded-full font-medium hover:from-pink-600 hover:to-orange-600 transition-all transform hover:scale-105 border-2 border-white"
          >
            Donate Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;