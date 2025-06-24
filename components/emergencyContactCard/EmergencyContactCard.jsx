"use client";
import Link from "next/link";

export default function EmergencyContactCard({ label, name, phone, address }) {
  return (
    <div className="bg-white w-full max-w-3xl p-8 rounded shadow">
      <h1 className="text-2xl font-bold text-blue-700 mb-6 text-left">
        {label}
      </h1>
      <div className="flex flex-col items-start gap-2 text-left">
        <div className="flex flex-row items-start gap-8">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Name:</span>
            <span>{name}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Address:</span>
            <span>{address}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Phone:</span>
          <a
            href={`tel:${phone.replace(/\s+/g, "")}`}
            className="text-blue-700 underline"
          >
            {phone}
          </a>
        </div>
      </div>
    </div>
  );
}
