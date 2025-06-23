"use client";

const jobs = [
  {
    title: "Part-Time Barista",
    company: "Kopi Corner",
    location: "Bangsar",
  },
  {
    title: "Math Tutor",
    company: "Private Family",
    location: "Cheras",
  },
  {
    title: "Freelance Web Designer",
    company: "Startup Studio",
    location: "Remote",
  },
];

export default function JobsSection() {
  return (
    <section className="bg-[#94C9FB] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Latest Job Opportunities
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-6 flex-1 min-w-[220px]"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {job.title}
              </h3>
              <p className="text-gray-600 mb-2">{job.company}</p>
              <p className="text-gray-500 mb-4">{job.location}</p>
              <a
                href="#"
                className="bg-[#6DA2FB] text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
