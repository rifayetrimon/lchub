"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white shadow mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-700 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/directory"
                  className="text-gray-600 hover:text-blue-700 transition"
                >
                  Directory
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs"
                  className="text-gray-600 hover:text-blue-700 transition"
                >
                  Job Board
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-blue-700 transition"
                >
                  Emergency Contacts
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-blue-700 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-blue-700 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Contact
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@localconnecthub.my"
                  className="hover:text-blue-700"
                >
                  support@localconnecthub.my
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+60312345678" className="hover:text-blue-700">
                  +60 3-1234 5678
                </a>
              </li>
              <li>Address: 123 Community Lane, Kuala Lumpur, Malaysia</li>
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700 text-2xl"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700 text-2xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700 text-2xl"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-8 border-t pt-6 text-center text-gray-500 text-sm">
          © 2025 Local Connect Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
