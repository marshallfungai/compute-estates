'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faFacebook, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted', { email, message });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and tagline */}
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <div className="flex items-center mb-2">
              <Image src="/logo.png" alt="Compute Estates Logo" width={300} height={200}  />
             
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              Design amazing digital experiences that create convenience for your business.
            </p>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <ul className="space-y-2">
            
              <li>
                <span className="font-medium">Phone:</span> +90 (548) 876 1289
              </li>
              <li>
                <span className="font-medium">Email:</span> info@computeestates.com
              </li>
              <li>
                <span className="font-medium">Hours:</span> Mon-Fri: 9am-6pm PST
              </li>
            </ul>
          </div>

          {/* Enquiry form */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <p className="text-sm mb-2 text-center md:text-right">Get in touch</p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-gray-800 text-white rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Tell us about your project..."
                rows={3}
                className="px-3 py-2 bg-gray-800 text-white rounded"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className="bg-custom-dark-green-700 text-white px-4 py-2 rounded hover:bg-custom-dark-green-600 transition duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Copyright and social icons */}
        <div className="flex flex-wrap justify-between items-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-400">&copy; 2024 Compute Estates. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faDribbble} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
