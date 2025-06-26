"use client";
import Link from "next/link";
import { FaUserPlus, FaSearch, FaHandshake } from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus className="text-blue-500 text-3xl" />,
    title: "Register an Account",
    desc: "Sign up in seconds to join your local community.",
    link: "/register",
  },
  {
    icon: <FaSearch className="text-blue-500 text-3xl" />,
    title: "Search or Post Listings",
    desc: "Find services, jobs, or post your own listings easily.",
    link: "/directory",
  },
  {
    icon: <FaHandshake className="text-blue-500 text-3xl" />,
    title: "Connect & Engage",
    desc: "Message, hire, or collaborate with trusted locals.",
    link: "/messages",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#94C9FB] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Get Started in 3 Easy Steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <Link
              key={idx}
              href={step.link}
              className="bg-white rounded-xl shadow p-8 flex flex-col items-center text-center hover:bg-blue-50 transition cursor-pointer"
            >
              {step.icon}
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-600">{step.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
