"use client";
import { FaStar } from "react-icons/fa";

const providers = [
  {
    name: "Aisyah Rahman",
    image: "/images/provider1.jpg",
    rating: 5,
  },
  {
    name: "John Tan",
    image: "/images/provider2.jpg",
    rating: 4,
  },
  {
    name: "Siti Lim",
    image: "/images/provider3.jpg",
    rating: 5,
  },
];

export default function ProvidersSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Top Rated Service Providers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {providers.map((p, idx) => (
            <div
              key={idx}
              className="bg-blue-50 rounded-xl shadow p-6 flex flex-col items-center"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{p.name}</h3>
              <div className="flex items-center mt-2 mb-4">
                {[...Array(p.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <a
                href="#"
                className="bg-[#6DA2FB] text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
