import { Heart, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-full">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Kids First of NC</h3>
                <p className="text-xs font-semibold text-secondary">CKF (Cancer Kids First) NC Chapter</p>
                <p className="text-sm text-gray-400">501(c)(3) Nonprofit</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Dedicated to supporting children with cancer and their families through comprehensive care, 
              research, and community support programs.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com/nccancerkids1st" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/nccancerkids1st" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/nccancerkids1st" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-white transition-colors">Our Programs</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-white transition-colors">Events</a></li>
              <li><a href="#stories" className="text-gray-400 hover:text-white transition-colors">Stories</a></li>
              <li><a href="#research" className="text-gray-400 hover:text-white transition-colors">Research</a></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li><a href="#volunteer" className="text-gray-400 hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="#donate" className="text-gray-400 hover:text-white transition-colors">Donate</a></li>
              <li><a href="#corporate" className="text-gray-400 hover:text-white transition-colors">Corporate Partners</a></li>
              <li><a href="#fundraising" className="text-gray-400 hover:text-white transition-colors">Fundraising</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400 text-sm">123 Hope Street, Charlotte, NC 28202</span>
              </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400 text-sm">610-457-3193</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400 text-sm">info@ckfnc.org</span>
                </div>
            </div>
            <div className="mt-4">
              <a
                href="#donate"
                className="block w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 py-2 rounded-lg font-medium text-center hover:from-pink-600 hover:to-orange-600 transition-all"
              >
                Donate Today
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 NC Cancer Kids 1st. All rights reserved. Tax ID: 12-3456789
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#report" className="text-gray-400 hover:text-white text-sm transition-colors">Annual Report</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;