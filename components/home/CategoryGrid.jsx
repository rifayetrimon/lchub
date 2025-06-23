"use client";
import {
  FaTools,
  FaBroom,
  FaChalkboardTeacher,
  FaDumbbell,
  FaLaptop,
} from "react-icons/fa";

const categories = [
  { icon: <FaTools className="text-blue-500 text-3xl" />, name: "Plumbing" },
  {
    icon: <FaBroom className="text-blue-500 text-3xl" />,
    name: "Home Cleaning",
  },
  {
    icon: <FaChalkboardTeacher className="text-blue-500 text-3xl" />,
    name: "Tutoring",
  },
  {
    icon: <FaDumbbell className="text-blue-500 text-3xl" />,
    name: "Fitness & Wellness",
  },
  {
    icon: <FaLaptop className="text-blue-500 text-3xl" />,
    name: "IT & Tech Support",
  },
];

export default function CategoryGrid() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Popular Service Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-blue-50 rounded-xl shadow p-6 flex flex-col items-center hover:bg-blue-100 transition"
            >
              {cat.icon}
              <span className="mt-3 text-gray-800 font-semibold">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
