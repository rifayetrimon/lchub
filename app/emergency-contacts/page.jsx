"use client";
import Link from "next/link";
import {
  FaShieldAlt,
  FaFireExtinguisher,
  FaAmbulance,
  FaTools,
  FaBolt,
  FaSnowflake,
  FaLock,
  FaTint,
  FaTruck,
  FaBug,
  FaGasPump,
  FaHome,
  FaHammer,
  FaWifi,
} from "react-icons/fa";

const emergencyContacts = [
  {
    label: "Police",
    href: "/emergency-contacts/police",
    icon: <FaShieldAlt className="text-blue-500 text-3xl" />,
  },
  {
    label: "Fire Department",
    href: "/emergency-contacts/fire-department",
    icon: <FaFireExtinguisher className="text-red-500 text-3xl" />,
  },
  {
    label: "Ambulance",
    href: "/emergency-contacts/ambulance",
    icon: <FaAmbulance className="text-green-500 text-3xl" />,
  },
  {
    label: "Plumber",
    href: "/emergency-contacts/plumber",
    icon: <FaTools className="text-blue-500 text-3xl" />,
  },
  {
    label: "Electrician",
    href: "/emergency-contacts/electrician",
    icon: <FaBolt className="text-yellow-500 text-3xl" />,
  },
  {
    label: "AC Service",
    href: "/emergency-contacts/ac-service",
    icon: <FaSnowflake className="text-cyan-500 text-3xl" />,
  },
  {
    label: "Locksmith",
    href: "/emergency-contacts/locksmith",
    icon: <FaLock className="text-gray-500 text-3xl" />,
  },
  {
    label: "Water Delivery",
    href: "/emergency-contacts/water-delivery",
    icon: <FaTint className="text-blue-400 text-3xl" />,
  },
  {
    label: "Tow Truck",
    href: "/emergency-contacts/tow-truck",
    icon: <FaTruck className="text-orange-500 text-3xl" />,
  },
  {
    label: "Pest Control",
    href: "/emergency-contacts/pest-control",
    icon: <FaBug className="text-green-700 text-3xl" />,
  },
  {
    label: "Gas Delivery",
    href: "/emergency-contacts/gas-delivery",
    icon: <FaGasPump className="text-yellow-700 text-3xl" />,
  },
  {
    label: "Roofer",
    href: "/emergency-contacts/roofer",
    icon: <FaHome className="text-indigo-500 text-3xl" />,
  },
  {
    label: "Carpenter",
    href: "/emergency-contacts/carpenter",
    icon: <FaHammer className="text-brown-500 text-3xl" />,
  },
  {
    label: "Internet Support",
    href: "/emergency-contacts/internet-support",
    icon: <FaWifi className="text-blue-700 text-3xl" />,
  },
];

export default function EmergencyContactsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100  py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-8 text-center">
          Emergency Contacts
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {emergencyContacts.map((contact) => (
            <Link
              key={contact.label}
              href={contact.href}
              className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center hover:bg-blue-50 transition cursor-pointer"
            >
              {contact.icon}
              <h2 className="mt-4 text-lg font-semibold text-gray-800">
                {contact.label}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
