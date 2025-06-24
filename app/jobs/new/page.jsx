"use client";
import { useState } from "react";

const jobTypes = ["Full-time", "Part-time", "Freelance", "Internship"];
const categories = [
  "IT & Software",
  "Education",
  "Design",
  "Marketing",
  "Customer Service",
  "Other",
];

// Dummy companies for dropdown
const companies = [
  "Tech Solutions",
  "Creative Studio",
  "EduSmart",
  "Marketify",
  "HelpDesk Pro",
];

export default function JobPostPage() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    category: "",
    salary: "",
    apply: "",
    description: "",
    requirements: "",
  });
  const [preview, setPreview] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setPreview(false);
    // Here you would send the form data to your backend
  }

  function handlePreview(e) {
    e.preventDefault();
    setPreview(true);
  }

  return (
    <main className="min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <section className="flex-1">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-1">
              Post a New Job
            </h1>
            <p className="text-gray-600 text-lg">
              Reach local talent in your community.
            </p>
          </div>

          {/* Form or Preview */}
          {submitted ? (
            <div className="bg-white rounded-2xl shadow p-8 text-center">
              <h2 className="text-2xl font-bold text-green-700 mb-2">
                Job Submitted!
              </h2>
              <p className="text-gray-700">
                Your job post has been submitted for review.
              </p>
            </div>
          ) : preview ? (
            <div className="bg-white rounded-2xl shadow p-8">
              <h2 className="text-2xl font-bold mb-2">
                {form.title || "Job Title"}
              </h2>
              <div className="mb-2 text-gray-700">
                <span className="font-semibold">
                  {form.company || "Company"}
                </span>{" "}
                &middot; {form.location || "Location"}
              </div>
              <div className="mb-2 text-sm text-gray-500">
                {form.type && <span className="mr-2">{form.type}</span>}
                {form.category && <span>{form.category}</span>}
              </div>
              <div className="mb-2 text-gray-700">
                <span className="font-semibold">Salary/Rate:</span>{" "}
                {form.salary || "-"}
              </div>
              <div className="mb-2 text-gray-700">
                <span className="font-semibold">Apply:</span>{" "}
                {form.apply || "-"}
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-1">
                  Description
                </h3>
                <div className="text-gray-700 whitespace-pre-line">
                  {form.description || "-"}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Requirements
                </h3>
                <div className="text-gray-700 whitespace-pre-line">
                  {form.requirements || "-"}
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition"
                  onClick={() => setPreview(false)}
                >
                  Edit
                </button>
                <button
                  className="bg-[#6DA2FB] text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition"
                  onClick={handleSubmit}
                >
                  Submit for Review
                </button>
              </div>
            </div>
          ) : (
            <form
              className="bg-white rounded-2xl shadow p-8 space-y-6"
              onSubmit={handleSubmit}
            >
              {/* Job Title */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Job Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  required
                  className="w-full rounded border border-gray-200 p-2"
                />
              </div>
              {/* Company */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Company / Business
                </label>
                <select
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  required
                  className="w-full rounded border border-gray-200 p-2"
                >
                  <option value="">Select company</option>
                  {companies.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              {/* Location */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Kuala Lumpur"
                  className="w-full rounded border border-gray-200 p-2"
                />
                {/* For a map picker, you can integrate a map library here */}
              </div>
              {/* Job Type */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Job Type
                </label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  required
                  className="w-full rounded border border-gray-200 p-2"
                >
                  <option value="">Select type</option>
                  {jobTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              {/* Category */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Category
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  required
                  className="w-full rounded border border-gray-200 p-2"
                >
                  <option value="">Select category</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              {/* Salary or Rate */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Salary or Rate
                </label>
                <input
                  type="text"
                  name="salary"
                  value={form.salary}
                  onChange={handleChange}
                  placeholder="e.g. RM3000/month or RM20/hour"
                  className="w-full rounded border border-gray-200 p-2"
                />
              </div>
              {/* Application Email or URL */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Application Email or URL
                </label>
                <input
                  type="text"
                  name="apply"
                  value={form.apply}
                  onChange={handleChange}
                  placeholder="e.g. jobs@company.com or https://apply.com"
                  className="w-full rounded border border-gray-200 p-2"
                />
              </div>
              {/* Description */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Describe the job role, responsibilities, and company culture."
                  className="w-full rounded border border-gray-200 p-2"
                />
                {/* For a rich text editor, you can integrate a library like react-quill */}
              </div>
              {/* Requirements */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Requirements
                </label>
                <textarea
                  name="requirements"
                  value={form.requirements}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="List key requirements or qualifications."
                  className="w-full rounded border border-gray-200 p-2"
                />
              </div>
              {/* Buttons */}
              <div className="flex gap-4">
                <button
                  type="button"
                  className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition"
                  onClick={handlePreview}
                >
                  Preview
                </button>
                <button
                  type="submit"
                  className="bg-[#6DA2FB] text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition"
                >
                  Submit for Review
                </button>
              </div>
            </form>
          )}
        </section>

        {/* Guidelines Sidebar */}
        <aside className="md:w-1/3 bg-white rounded-2xl shadow p-6 h-fit">
          <h2 className="text-lg font-semibold text-blue-700 mb-3">
            Job Posting Guidelines
          </h2>
          <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2">
            <li>Use a clear, descriptive job title.</li>
            <li>Summarize the company and work environment.</li>
            <li>Be specific about job duties and expectations.</li>
            <li>List required skills and qualifications.</li>
            <li>Include salary or rate if possible.</li>
            <li>Provide accurate contact or application info.</li>
            <li>Proofread for clarity and professionalism.</li>
          </ul>
        </aside>
      </div>
    </main>
  );
}
