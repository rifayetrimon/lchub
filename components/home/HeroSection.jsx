"use client";
import { useState } from "react";

export default function HeroSection() {
  const [tab, setTab] = useState("Services");

  return (
    <section className="bg-[#94C9FB] py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8">
        <div className="flex-1 mb-10 md:mb-0">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Connect with Trusted Local Services & Jobs
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-lg">
            Find everything from plumbers to part-time gigs—right in your
            neighborhood.
          </p>
          {/* Toggle Search Bar */}
          <div className="mb-6">
            <div className="flex mb-2">
              <button
                className={`px-4 py-2 rounded-l-full border ${
                  tab === "Services"
                    ? "bg-white text-blue-700 font-semibold"
                    : "bg-blue-100 text-gray-700"
                }`}
                onClick={() => setTab("Services")}
              >
                Services
              </button>
              <button
                className={`px-4 py-2 rounded-r-full border-l-0 border ${
                  tab === "Jobs"
                    ? "bg-white text-blue-700 font-semibold"
                    : "bg-blue-100 text-gray-700"
                }`}
                onClick={() => setTab("Jobs")}
              >
                Jobs
              </button>
            </div>
            <input
              type="text"
              placeholder={`Search for ${tab.toLowerCase()}...`}
              className="w-full py-3 px-5 rounded-full shadow bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          {/* CTA Buttons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-[#6DA2FB] text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-600 transition"
            >
              Browse Directory
            </a>
            <a
              href="#"
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-100 transition border border-blue-200"
            >
              View Job Board
            </a>
          </div>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded-3xl shadow-lg p-6 flex items-center justify-center">
            <img
              src="/images/hero-illustration.png"
              alt="Community Illustration"
              width={400}
              height={320}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
