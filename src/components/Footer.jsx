import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-32">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-5">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Airbnb</h2>
          <p className="text-gray-400">
            Your dream home is just a few clicks away. We provide the best properties around the world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li><a href="#" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Properties</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Contact</a></li>
            
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul>
            <li className="mb-2">123 Dream Street, New York, NY</li>
            <li className="mb-2">Phone: +1 (555) 123-4567</li>
            <li className="mb-2">Email: info@realestate.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24h11.495v-9.294H9.692v-3.622h3.129V8.414c0-3.1 1.894-4.788 4.662-4.788 1.325 0 2.464.099 2.797.143v3.241l-1.92.001c-1.504 0-1.794.715-1.794 1.762v2.309h3.587l-.467 3.622h-3.12V24h6.116c.733 0 1.326-.593 1.326-1.326V1.326C24 .593 23.407 0 22.675 0z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.556c-.883.392-1.83.656-2.825.775 1.013-.608 1.794-1.57 2.165-2.723-.949.563-2.003.974-3.127 1.195-.896-.957-2.173-1.555-3.59-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .386.044.762.127 1.122C7.691 8.094 4.066 6.13 1.64 3.161c-.422.724-.664 1.56-.664 2.456 0 1.695.863 3.188 2.175 4.067-.802-.026-1.555-.246-2.213-.614v.062c0 2.368 1.685 4.342 3.918 4.788-.41.111-.842.171-1.287.171-.314 0-.623-.03-.924-.086.624 1.953 2.432 3.377 4.576 3.417-1.675 1.313-3.787 2.096-6.082 2.096-.395 0-.785-.023-1.17-.068 2.167 1.39 4.74 2.203 7.513 2.203 9.014 0 13.942-7.47 13.942-13.942 0-.213-.005-.426-.015-.637.956-.69 1.787-1.55 2.444-2.534z"/>
              </svg>
            </a>
            
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-500">
        &copy; 2024 Airbnb-Clone All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

