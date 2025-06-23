"use client";

import { useState } from "react";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Directory", href: "#", current: false },
  { name: "Job Board", href: "#", current: false },
  // Emergency Contact will be handled separately
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Example dropdown items
  const emergencyContacts = [
    { name: "Police", href: "#" },
    { name: "Fire Department", href: "#" },
    { name: "Ambulance", href: "#" },
  ];

  return (
    <nav className="bg-white w-full shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo or Brand */}
          <div className="flex-shrink-0 flex items-center">
            <img
              alt="Your Company"
              src="images/logo/logo1.png"
              className="h-8 w-auto"
            />
          </div>
          {/* Nav Items */}
          <div className="flex items-center space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "text-blue-700 font-semibold"
                    : "text-gray-700 hover:text-blue-700",
                  "px-3 py-2 rounded-md text-sm"
                )}
              >
                {item.name}
              </a>
            ))}

            {/* Emergency Contact Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen((open) => !open)}
                onBlur={() => setDropdownOpen(false)}
                className="px-3 py-2 rounded-md text-sm text-gray-700 hover:text-blue-700 focus:outline-none"
              >
                Emergency Contact
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                  {emergencyContacts.map((contact) => (
                    <a
                      key={contact.name}
                      href={contact.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                    >
                      {contact.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Profile or Join Button */}
            {isLoggedIn ? (
              <img
                alt="Profile"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="h-8 w-8 rounded-full"
              />
            ) : (
              <button
                className="ml-4 px-4 py-2 rounded-md text-white"
                style={{ backgroundColor: "#6DA2FB" }}
                onClick={() => setIsLoggedIn(true)}
              >
                Join
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
