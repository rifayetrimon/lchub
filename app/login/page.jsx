"use client";
import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [remember, setRemember] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-50 to-white">
      <div className="bg-white p-12 rounded-2xl shadow-2xl w-full max-w-3xl">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-2 text-center tracking-tight">
          Welcome Back
        </h1>
        <p className="text-gray-600 mb-8 text-center text-lg">
          Login to your account.
        </p>
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <Input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <label className="flex items-center gap-2 text-gray-700 text-base">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="rounded"
              />
              Remember me
            </label>
            <Link
              href="/forgot-password"
              className="text-blue-600 hover:underline text-base"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#6DA2FB] to-blue-500 text-white py-3 rounded-lg font-bold text-lg shadow hover:from-blue-600 hover:to-blue-700 transition"
          >
            Login
          </button>
        </form>
        <div className="mt-8 text-center text-gray-600 text-base">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-blue-600 hover:underline font-semibold"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}
