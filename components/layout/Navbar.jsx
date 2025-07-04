"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const emergencyContacts = [
  {
    label: "Police",
    href: "/emergency-contacts/police",
  },
  {
    label: "Fire Department",
    href: "/emergency-contacts/fire-department",
  },
  {
    label: "Ambulance",
    href: "/emergency-contacts/ambulance",
  },
  {
    label: "Plumber",
    href: "/emergency-contacts/plumber",
  },
  {
    label: "Electrician",
    href: "/emergency-contacts/electrician",
  },
  {
    label: "AC Service",
    href: "/emergency-contacts/ac-service",
  },
  {
    label: "Locksmith",
    href: "/emergency-contacts/locksmith",
  },
  {
    label: "Water Delivery",
    href: "/emergency-contacts/water-delivery",
  },
  {
    label: "Tow Truck",
    href: "/emergency-contacts/tow-truck",
  },
  {
    label: "Pest Control",
    href: "/emergency-contacts/pest-control",
  },
  {
    label: "Gas Delivery",
    href: "/emergency-contacts/gas-delivery",
  },
  {
    label: "Roofer",
    href: "/emergency-contacts/roofer",
  },
  {
    label: "Carpenter",
    href: "/emergency-contacts/carpenter",
  },
  {
    label: "Internet Support",
    href: "/emergency-contacts/internet-support",
  },
];

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <>
      <nav className="bg-white w-full shadow fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <img
                  alt="lchub logo"
                  src="/images/logo/logo1.png"
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            {/* Navigation Menu */}
            <div className="flex items-center space-x-4">
              <NavigationMenu viewport={false}>
                <NavigationMenuList className="flex items-center space-x-2">
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/"
                        className="px-3 py-2 rounded-md text-sm text-gray-700 hover:text-blue-700 font-semibold"
                      >
                        Home
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/directory"
                        className="px-3 py-2 rounded-md text-sm text-gray-700 hover:text-blue-700"
                      >
                        Directory
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/jobs"
                        className="px-3 py-2 rounded-md text-sm text-gray-700 hover:text-blue-700"
                      >
                        Job Board
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  {/* Emergency Contact Dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="flex items-center px-3 py-2 rounded-md text-sm text-gray-700 hover:text-blue-700 bg-white">
                      Emergency Contact
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-64 border rounded-md shadow-lg p-2 bg-white">
                      <ul>
                        {emergencyContacts.map((contact) => (
                          <li key={contact.label}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={contact.href}
                                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded"
                              >
                                {contact.label}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              {/* Profile or Join Button */}
              {isLoggedIn ? (
                <img
                  alt="Profile"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="h-8 w-8 rounded-full ml-4"
                />
              ) : (
                <Link
                  href="/register"
                  className="ml-4 px-4 py-2 rounded-md text-white"
                  style={{ backgroundColor: "#6DA2FB" }}
                >
                  Join
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Wrapper div to offset the fixed navbar height */}
      <div className="pt-16">{/* Your page content goes here */}</div>
    </>
  );
}
