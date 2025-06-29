"use client";
import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const businessCategories = [
  "Plumbing",
  "Cleaning",
  "Tutoring",
  "Fitness",
  "IT Services",
  "Food & Beverage",
  "Other",
];

export default function RegisterPage() {
  const [role, setRole] = useState("resident");
  const [residentForm, setResidentForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [businessForm, setBusinessForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    businessCategory: "",
    businessAddress: "",
    businessPhone: "",
    registrationNumber: "", // Added field
  });

  function handleResidentChange(e) {
    setResidentForm({ ...residentForm, [e.target.name]: e.target.value });
  }

  function handleBusinessChange(e) {
    setBusinessForm({ ...businessForm, [e.target.name]: e.target.value });
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-50 to-white">
      <div className="bg-white p-12 rounded-2xl shadow-2xl w-full max-w-3xl">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-2 text-center tracking-tight">
          Create an Account
        </h1>
        <p className="text-gray-600 mb-8 text-center text-lg">
          Join Local Connect Hub
        </p>
        {/* Role Selection */}
        <div className="flex mb-8 w-full max-w-lg mx-auto">
          <button
            type="button"
            className={`flex-1 py-3 rounded-l-lg font-semibold border transition-all duration-200 focus:outline-none ${
              role === "resident"
                ? "bg-[#6DA2FB] text-white border-blue-400 shadow"
                : "bg-gray-100 text-gray-700 border-gray-200"
            }`}
            onClick={() => setRole("resident")}
            tabIndex={0}
          >
            Resident/Student
          </button>
          <button
            type="button"
            className={`flex-1 py-3 rounded-r-lg font-semibold border-l-0 border transition-all duration-200 focus:outline-none ${
              role === "business"
                ? "bg-[#6DA2FB] text-white border-blue-400 shadow"
                : "bg-gray-100 text-gray-700 border-gray-200"
            }`}
            onClick={() => setRole("business")}
            tabIndex={0}
          >
            Business
          </button>
        </div>

        {/* Resident/Student Form */}
        {role === "resident" && (
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <Input
                  type="text"
                  name="fullName"
                  value={residentForm.fullName}
                  onChange={handleResidentChange}
                  placeholder="Full Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  value={residentForm.email}
                  onChange={handleResidentChange}
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Password
                </label>
                <Input
                  type="password"
                  name="password"
                  value={residentForm.password}
                  onChange={handleResidentChange}
                  placeholder="Password"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Confirm Password
                </label>
                <Input
                  type="password"
                  name="confirmPassword"
                  value={residentForm.confirmPassword}
                  onChange={handleResidentChange}
                  placeholder="Confirm Password"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#6DA2FB] to-blue-500 text-white py-3 rounded-lg font-bold text-lg shadow hover:from-blue-600 hover:to-blue-700 transition"
            >
              Register
            </button>
          </form>
        )}

        {/* Business Form */}
        {role === "business" && (
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <Input
                  type="text"
                  name="fullName"
                  value={businessForm.fullName}
                  onChange={handleBusinessChange}
                  placeholder="Full Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  value={businessForm.email}
                  onChange={handleBusinessChange}
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Password
                </label>
                <Input
                  type="password"
                  name="password"
                  value={businessForm.password}
                  onChange={handleBusinessChange}
                  placeholder="Password"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Confirm Password
                </label>
                <Input
                  type="password"
                  name="confirmPassword"
                  value={businessForm.confirmPassword}
                  onChange={handleBusinessChange}
                  placeholder="Confirm Password"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Business Name
                </label>
                <Input
                  type="text"
                  name="businessName"
                  value={businessForm.businessName}
                  onChange={handleBusinessChange}
                  placeholder="Business Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Business Category
                </label>
                <Select
                  value={businessForm.businessCategory}
                  onValueChange={(value) =>
                    setBusinessForm({
                      ...businessForm,
                      businessCategory: value,
                    })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Categories</SelectLabel>
                      {businessCategories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Business Address
                </label>
                <Input
                  type="text"
                  name="businessAddress"
                  value={businessForm.businessAddress}
                  onChange={handleBusinessChange}
                  placeholder="Business Address"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Business Phone
                </label>
                <Input
                  type="text"
                  name="businessPhone"
                  value={businessForm.businessPhone}
                  onChange={handleBusinessChange}
                  placeholder="Business Phone"
                  required
                />
              </div>
            </div>
            {/* Registration Number / Licence Number field */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Registration Number / Licence Number
              </label>
              <Input
                type="text"
                name="registrationNumber"
                value={businessForm.registrationNumber}
                onChange={handleBusinessChange}
                placeholder="Registration or Licence Number"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#6DA2FB] to-blue-500 text-white py-3 rounded-lg font-bold text-lg shadow hover:from-blue-600 hover:to-blue-700 transition"
            >
              Register
            </button>
          </form>
        )}

        <div className="mt-8 text-center text-gray-600 text-base">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 hover:underline font-semibold"
          >
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
