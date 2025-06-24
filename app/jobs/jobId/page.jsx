// =======================================
// FILE 2: /app/jobs/[jobId]/page.js (Job Details Page)
// =======================================

"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaBuilding,
  FaArrowLeft,
} from "react-icons/fa";

// Dummy job data (replace with real fetch)
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: {
      name: "Tech Solutions",
      id: 101,
      logo: "/images/company1.png",
      bio: "Tech Solutions is a leading software company specializing in web and mobile applications.",
    },
    location: "Kuala Lumpur",
    type: "Full-time",
    posted: "2025-06-20",
    description: [
      "We are looking for a passionate Frontend Developer to join our team.",
      "You will work closely with designers and backend developers to create amazing user experiences.",
      "Competitive salary and flexible working hours.",
    ],
    responsibilities: [
      "Develop and maintain web applications using React.js.",
      "Collaborate with UI/UX designers and backend developers.",
      "Write clean, maintainable, and efficient code.",
      "Participate in code reviews and team meetings.",
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field.",
      "1+ years experience with React.js.",
      "Strong understanding of HTML, CSS, and JavaScript.",
      "Good communication and teamwork skills.",
    ],
  },
  {
    id: 2,
    title: "Graphic Designer",
    company: {
      name: "Creative Studio",
      id: 102,
      logo: "/images/company2.png",
      bio: "Creative Studio delivers innovative design solutions for brands and businesses.",
    },
    location: "Petaling Jaya",
    type: "Freelance",
    posted: "2025-06-18",
    description: [
      "Join our creative team as a freelance Graphic Designer.",
      "Work on diverse projects for local and international clients.",
    ],
    responsibilities: [
      "Create visual concepts and designs for digital and print media.",
      "Collaborate with clients and project managers.",
    ],
    requirements: [
      "Portfolio of previous design work.",
      "Proficiency in Adobe Creative Suite.",
    ],
  },
  // ...add more jobs as needed
];

function daysAgo(dateStr) {
  const now = new Date();
  const posted = new Date(dateStr);
  const diff = Math.floor((now - posted) / (1000 * 60 * 60 * 24));
  if (diff === 0) return "Today";
  if (diff === 1) return "1 day ago";
  return `${diff} days ago`;
}

export default function JobDetailsPage({ params }) {
  // Simulate login state (replace with real auth)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cv, setCv] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Find job by ID
  const job = jobs.find((j) => j.id === Number(params.jobId));

  if (!job) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-700">Job not found.</h1>
      </main>
    );
  }

  // Handle form submit
  function handleApply(e) {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the application to your backend
  }

  return (
    <main className="min-h-screen py-10 bg-[#F4F8FB]">
      <div className="max-w-3xl mx-auto px-4">
        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 font-medium mb-4 hover:underline"
        >
          <FaArrowLeft size={14} /> Back to Job Board
        </Link>

        {/* Job Header */}
        <div className="bg-white rounded-2xl shadow p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">{job.title}</h1>
          <div className="flex items-center gap-2 mb-2">
            <FaBuilding className="text-blue-400" />
            <Link
              href={`/directory/${job.company.id}`}
              className="text-blue-700 font-semibold hover:underline"
            >
              {job.company.name}
            </Link>
          </div>
          <div className="flex items-center gap-4 text-gray-600 text-sm mb-1">
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt /> {job.location}
            </span>
            <span className="flex items-center gap-1">
              <FaBriefcase />
              <span
                className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                  job.type === "Full-time"
                    ? "bg-blue-100 text-blue-700"
                    : job.type === "Part-time"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {job.type}
              </span>
            </span>
            <span className="text-gray-400">{daysAgo(job.posted)}</span>
          </div>
        </div>

        {/* Company Overview */}
        <div className="bg-white rounded-2xl shadow p-6 mb-6 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
            <FaBuilding size={24} />
          </div>
          <div>
            <div className="font-semibold text-gray-800">
              {job.company.name}
            </div>
            <div className="text-gray-600 text-sm">{job.company.bio}</div>
          </div>
        </div>

        {/* Job Description */}
        <div className="bg-white rounded-2xl shadow p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Description
          </h2>
          {job.description.map((para, idx) => (
            <p key={idx} className="text-gray-700 mb-2">
              {para}
            </p>
          ))}
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-2xl shadow p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Responsibilities &amp; Requirements
          </h2>
          <div className="mb-2">
            <div className="font-semibold text-gray-700 mb-1">
              Responsibilities:
            </div>
            <ul className="list-disc pl-6 text-gray-700">
              {job.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold text-gray-700 mb-1">
              Qualifications:
            </div>
            <ul className="list-disc pl-6 text-gray-700">
              {job.requirements.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* How to Apply */}
        <div className="bg-white rounded-2xl shadow p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            How to Apply
          </h2>
          {isLoggedIn ? (
            submitted ? (
              <div className="text-green-700 font-semibold">
                Application submitted! Thank you.
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-1 font-medium">
                    Upload CV
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={(e) => setCv(e.target.files[0])}
                    className="block w-full"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1 font-medium">
                    Cover Letter
                  </label>
                  <textarea
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                    required
                    rows={4}
                    className="w-full rounded border border-gray-200 p-2"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#6DA2FB] text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition"
                >
                  Submit Application
                </button>
              </form>
            )
          ) : (
            <div className="flex gap-4">
              <button
                className="bg-[#6DA2FB] text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition"
                onClick={() => setIsLoggedIn(true)}
              >
                Login to Apply
              </button>
              <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition">
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
