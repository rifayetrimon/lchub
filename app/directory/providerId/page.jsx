"use client";
import { useState } from "react";
import {
  FaStar,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";

// Dummy provider data (replace with real data/fetch)
const provider = {
  id: 1,
  name: "Aisyah Rahman",
  category: "Plumbing",
  cover: "/images/provider-cover.jpg",
  image: "/images/provider1.jpg",
  rating: 4.8,
  reviewsCount: 32,
  phone: "+60 12-345 6789",
  email: "aisyah.plumber@example.com",
  website: "https://aisyahplumbing.my",
  address: "123 Jalan Damai, Kuala Lumpur, Malaysia",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.123456789!2d101.686855!3d3.139003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49a9b1b1b1b1%3A0x123456789abcdef!2sKuala+Lumpur!5e0!3m2!1sen!2smy!4v1620000000000!5m2!1sen!2smy",
  about: `Aisyah Rahman Plumbing is your trusted local expert for all plumbing needs in Kuala Lumpur. With over 10 years of experience, we pride ourselves on fast, reliable, and affordable service. Our team is fully certified and committed to customer satisfaction, whether it's a leaky faucet, a major pipe repair, or a new installation. We use only the best materials and the latest techniques to ensure your home or business is in good hands. Our mission is to provide peace of mind and quality workmanship to every client, every time.`,
  services: [
    { name: "General Plumbing Repair", price: "RM80+" },
    { name: "Pipe Installation", price: "RM150+" },
    { name: "Water Heater Installation", price: "RM200+" },
    { name: "Emergency Leak Fix", price: "RM100+" },
  ],
  reviews: [
    {
      name: "John Tan",
      date: "2025-06-01",
      rating: 5,
      comment: "Fast and professional service! Highly recommended.",
    },
    {
      name: "Siti Lim",
      date: "2025-05-20",
      rating: 4,
      comment: "Solved my water leak quickly. Will use again.",
    },
    {
      name: "Ahmad Zaki",
      date: "2025-05-10",
      rating: 5,
      comment: "Very friendly and explained everything clearly.",
    },
  ],
};

export default function ProviderProfilePage() {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const isLoggedIn = true; // Replace with real auth logic

  return (
    <main className="bg-[#F4F8FB] min-h-screen pb-12">
      {/* Profile Header */}
      <div className="relative">
        <img
          src={provider.cover}
          alt="Cover"
          className="w-full h-56 object-cover rounded-b-3xl"
        />
        <div className="absolute left-1/2 transform -translate-x-1/2 top-40 bg-white rounded-2xl shadow-lg px-8 py-6 flex flex-col md:flex-row items-center gap-6 w-[90%] max-w-4xl mx-auto">
          <img
            src={provider.image}
            alt={provider.name}
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow"
          />
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold text-gray-800">
                {provider.name}
              </h1>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                {provider.category}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {[...Array(Math.floor(provider.rating))].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
              {provider.rating % 1 !== 0 && (
                <FaStar className="text-yellow-200" />
              )}
              <span className="ml-2 text-gray-700 font-medium">
                {provider.rating}
              </span>
              <span className="text-gray-500 text-sm">
                ({provider.reviewsCount} reviews)
              </span>
            </div>
          </div>
          <a
            href={`tel:${provider.phone.replace(/\s+/g, "")}`}
            className="bg-[#6DA2FB] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition"
          >
            Contact Provider
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto mt-32 px-4">
        {/* Contact & Info */}
        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Contact & Info
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-blue-500" />
                <a
                  href={`tel:${provider.phone.replace(/\s+/g, "")}`}
                  className="text-gray-700 hover:text-blue-700"
                >
                  {provider.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-blue-500" />
                <a
                  href={`mailto:${provider.email}`}
                  className="text-gray-700 hover:text-blue-700"
                >
                  {provider.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaGlobe className="text-blue-500" />
                <a
                  href={provider.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-700"
                >
                  {provider.website.replace(/^https?:\/\//, "")}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-500" />
                <span className="text-gray-700">{provider.address}</span>
              </div>
            </div>
            <div className="flex-1">
              <iframe
                src={provider.mapEmbed}
                width="100%"
                height="180"
                style={{ border: 0, borderRadius: "1rem" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Provider Location"
              ></iframe>
            </div>
          </div>
        </section>

        {/* About the Provider */}
        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-700">{provider.about}</p>
        </section>

        {/* Services Offered */}
        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Our Services
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {provider.services.map((service, idx) => (
              <li key={idx} className="flex justify-between items-center">
                <span className="text-gray-700">{service.name}</span>
                <span className="text-blue-700 font-semibold">
                  {service.price}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Reviews */}
        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Customer Reviews
          </h2>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-gray-800 mr-2">
              {provider.rating}
            </span>
            <div className="flex items-center">
              {[...Array(Math.floor(provider.rating))].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
              {provider.rating % 1 !== 0 && (
                <FaStar className="text-yellow-200" />
              )}
            </div>
            <span className="ml-2 text-gray-500">
              ({provider.reviewsCount} reviews)
            </span>
          </div>
          <div className="space-y-6">
            {(showAllReviews
              ? provider.reviews
              : provider.reviews.slice(0, 3)
            ).map((review, idx) => (
              <div key={idx} className="border-b pb-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-gray-800">
                    {review.name}
                  </span>
                  <span className="text-gray-400 text-xs">{review.date}</span>
                  <div className="flex items-center ml-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
          {provider.reviews.length > 3 && (
            <button
              className="mt-4 text-blue-700 font-semibold hover:underline"
              onClick={() => setShowAllReviews((v) => !v)}
            >
              {showAllReviews ? "Show Less" : "Show All Reviews"}
            </button>
          )}
          {isLoggedIn && (
            <button className="mt-6 bg-[#6DA2FB] text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition">
              Write a Review
            </button>
          )}
        </section>
      </div>
    </main>
  );
}
