"use client";
import { useState } from "react";
import Link from "next/link";
import { FaSearch, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

// Dummy categories and jobs
const categories = [
  "All",
  "IT & Software",
  "Education",
  "Design",
  "Marketing",
  "Customer Service",
];

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Kuala Lumpur",
    type: "Full-time",
    category: "IT & Software",
    posted: "2025-06-20",
  },
  {
    id: 2,
    title: "Graphic Designer",
    company: "Creative Studio",
    location: "Petaling Jaya",
    type: "Freelance",
    category: "Design",
    posted: "2025-06-18",
  },
  {
    id: 3,
    title: "English Tutor",
    company: "EduSmart",
    location: "Shah Alam",
    type: "Part-time",
    category: "Education",
    posted: "2025-06-15",
  },
  {
    id: 4,
    title: "Digital Marketer",
    company: "Marketify",
    location: "Remote",
    type: "Full-time",
    category: "Marketing",
    posted: "2025-06-10",
  },
  {
    id: 5,
    title: "Customer Support Agent",
    company: "HelpDesk Pro",
    location: "Kuala Lumpur",
    type: "Part-time",
    category: "Customer Service",
    posted: "2025-06-09",
  },
  // ...add more jobs as needed
];

const jobTypes = ["All", "Full-time", "Part-time", "Freelance"];
const dateOptions = [
  { label: "Any time", value: 0 },
  { label: "Last 7 days", value: 7 },
  { label: "Last 30 days", value: 30 },
];

function daysAgo(dateStr) {
  const now = new Date();
  const posted = new Date(dateStr);
  const diff = Math.floor((now - posted) / (1000 * 60 * 60 * 24));
  if (diff === 0) return "Today";
  if (diff === 1) return "1 day ago";
  return `${diff} days ago`;
}

export default function JobBoardPage() {
  // Filter states
  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState("All");
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("");
  const [datePosted, setDatePosted] = useState(0);

  // Pagination
  const [page, setPage] = useState(1);
  const jobsPerPage = 4;

  // Filtering logic
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());
    const matchesType = jobType === "All" || job.type === jobType;
    const matchesCategory = category === "All" || job.category === category;
    const matchesLocation =
      !location || job.location.toLowerCase().includes(location.toLowerCase());
    const matchesDate =
      datePosted === 0 ||
      (new Date() - new Date(job.posted)) / (1000 * 60 * 60 * 24) <= datePosted;
    return (
      matchesSearch &&
      matchesType &&
      matchesCategory &&
      matchesLocation &&
      matchesDate
    );
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const paginatedJobs = filteredJobs.slice(
    (page - 1) * jobsPerPage,
    page * jobsPerPage
  );

  return (
    <main className="min-h-screen py-10 ">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Job Board</h1>
        <p className="text-gray-600 text-lg">
          Find part-time, full-time, and freelance opportunities.
        </p>
      </div>
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Filters Panel */}
        <aside className="md:w-1/3 bg-white rounded-2xl shadow p-6 mb-6 md:mb-0">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Filters</h2>
          {/* Keyword Search */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Keyword</label>
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Job title or company..."
                className="w-full py-2 pl-10 pr-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          {/* Job Type */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Job Type</label>
            <select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="w-full py-2 px-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              {jobTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </div>
          {/* Category */}
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
          {/* Location */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Location</label>
            <div className="relative">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Kuala Lumpur"
                className="w-full py-2 pl-10 pr-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          {/* Date Posted */}
          <div className="mb-2">
            <label className="block text-gray-700 mb-1">Date Posted</label>
            <select
              value={datePosted}
              onChange={(e) => setDatePosted(Number(e.target.value))}
              className="w-full py-2 px-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              {dateOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </aside>
        {/* Job Listings */}
        <section className="flex-1">
          {paginatedJobs.length === 0 && (
            <div className="text-center text-gray-500 py-12">
              No jobs found.
            </div>
          )}
          <ul className="space-y-6">
            {paginatedJobs.map((job) => (
              <li
                key={job.id}
                className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row md:items-center gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <FaBriefcase className="text-blue-400" />
                    <span className="text-lg font-semibold text-gray-800">
                      {job.title}
                    </span>
                  </div>
                  <div className="text-gray-600 text-sm mb-1">
                    {job.company} &middot; {job.location}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        job.type === "Full-time"
                          ? "bg-blue-100 text-blue-700"
                          : job.type === "Part-time"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {job.type}
                    </span>
                    <span className="text-gray-400 text-xs">
                      {daysAgo(job.posted)}
                    </span>
                  </div>
                </div>
                <Link
                  href={`/jobs/${job.id}`}
                  className="bg-[#6DA2FB] text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition text-center self-start md:self-auto"
                >
                  View Details
                </Link>
              </li>
            ))}
          </ul>
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              <button
                className="px-4 py-2 rounded bg-blue-100 text-blue-700 font-semibold hover:bg-blue-200"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                Previous
              </button>
              <span className="px-4 py-2 text-gray-700 font-semibold">
                Page {page} of {totalPages}
              </span>
              <button
                className="px-4 py-2 rounded bg-blue-100 text-blue-700 font-semibold hover:bg-blue-200"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
