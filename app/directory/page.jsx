"use client";
import { useState } from "react";
import Link from "next/link";
import { FaStar, FaSearch, FaMapMarkerAlt } from "react-icons/fa";

// Dummy data for categories and providers
const categories = [
  "All",
  "Plumbing",
  "Home Cleaning",
  "Tutoring",
  "Fitness & Wellness",
  "IT & Tech Support",
];

const providers = [
  {
    id: 1,
    name: "Aisyah Rahman",
    category: "Plumbing",
    image: "/images/provider1.jpg",
    description: "Experienced plumber for all your home needs.",
    rating: 4.8,
    reviews: 32,
  },
  {
    id: 2,
    name: "John Tan",
    category: "Home Cleaning",
    image: "/images/provider2.jpg",
    description: "Professional cleaning with eco-friendly products.",
    rating: 4.6,
    reviews: 21,
  },
  {
    id: 3,
    name: "Siti Lim",
    category: "Tutoring",
    image: "/images/provider3.jpg",
    description: "Math and science tutoring for all levels.",
    rating: 5.0,
    reviews: 18,
  },
  // ...add more providers as needed
];

export default function DirectoryPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("");
  const [radius, setRadius] = useState(10);
  const [minRating, setMinRating] = useState(0);

  const filteredProviders = providers.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    const matchesRating = p.rating >= minRating;
    return matchesSearch && matchesCategory && matchesRating;
  });

  return (
    <main className="min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Local Service Directory
        </h1>
        <p className="text-gray-600 text-lg">
          Browse and filter services offered by verified providers.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/4 bg-white rounded-2xl shadow p-6 mb-6 md:mb-0">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Filters</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Search</label>
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Keyword..."
                className="w-full py-2 pl-10 pr-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full py-2 px-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              {categories.map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Location</label>
            <div className="relative">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Bangsar"
                className="w-full py-2 pl-10 pr-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Radius (km)</label>
            <input
              type="range"
              min={1}
              max={50}
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-right text-sm text-gray-500">{radius} km</div>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 mb-1">Minimum Rating</label>
            <select
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              className="w-full py-2 px-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option value={0}>Any</option>
              <option value={3}>3+</option>
              <option value={4}>4+</option>
              <option value={4.5}>4.5+</option>
            </select>
          </div>
        </aside>
        <section className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProviders.length === 0 && (
              <div className="col-span-full text-center text-gray-500 py-12">
                No providers found.
              </div>
            )}
            {filteredProviders.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl shadow p-6 flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {p.name}
                    </h3>
                    <div className="text-blue-600 text-sm font-medium">
                      {p.category}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{p.description}</p>
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-2">
                    {[...Array(Math.floor(p.rating))].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                    {p.rating % 1 !== 0 && (
                      <FaStar className="text-yellow-200" />
                    )}
                  </div>
                  <span className="text-gray-500 text-sm">
                    {p.rating} ({p.reviews} reviews)
                  </span>
                </div>
                <Link
                  href={`/directory/${p.id}`}
                  className="mt-auto bg-[#6DA2FB] text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition text-center"
                >
                  View Profile
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className="px-4 py-2 mx-1 rounded bg-blue-100 text-blue-700 font-semibold hover:bg-blue-200">
              Previous
            </button>
            <button className="px-4 py-2 mx-1 rounded bg-blue-100 text-blue-700 font-semibold hover:bg-blue-200">
              Next
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
