"use client";

export default function EmergencyTeaser() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Need Urgent Help?
        </h2>
        <a
          href="/emergency-contacts"
          className="bg-[#6DA2FB] text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-blue-600 transition"
        >
          View Emergency Contacts
        </a>
      </div>
    </section>
  );
}
