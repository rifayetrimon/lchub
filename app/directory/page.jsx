"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaSearch, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import myAxios from "@/lib/myAxios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  "All",
  "Plumbing",
  "Home Cleaning",
  "Tutoring",
  "Fitness & Wellness",
  "IT & Tech Support",
];

export default function DirectoryPage() {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const res = await myAxios.get("/services/");
        setProviders(res.data);
      } catch (error) {
        console.error("Failed to fetch providers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProviders();
  }, []);

  const filteredProviders = providers.filter((p) => {
    const matchesSearch =
      p.name?.toLowerCase().includes(search.toLowerCase()) ||
      p.address?.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      category === "All" ||
      categories
        .find((c) => c.toLowerCase() === category.toLowerCase())
        ?.includes(p.name);

    return matchesSearch && matchesCategory;
  });

  if (!hydrated) return null;

  return (
    <main className="min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Local Service Directory
        </h1>
        <p className="text-gray-600 text-lg">
          Browse and filter services offered by verified providers.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="md:w-1/4 bg-white rounded-2xl shadow p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Filters</h2>

          {/* Search */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Search</label>
            <div className="relative">
              <Input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name or address"
                className="w-full py-2 pl-10 pr-3"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Category</label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </aside>

        {/* Results Section */}
        <section className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              <div className="col-span-full text-center text-gray-500 py-12">
                Loading providers...
              </div>
            ) : filteredProviders.length === 0 ? (
              <div className="col-span-full text-center text-gray-500 py-12">
                No providers found.
              </div>
            ) : (
              filteredProviders.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl shadow p-6 flex flex-col"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {p.name}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    <FaMapMarkerAlt className="inline mr-2 text-blue-500" />
                    {p.address}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <FaPhoneAlt className="inline mr-2 text-green-500" />
                    {p.phone}
                  </p>
                  <Link
                    href={`/directory/${p.id}`}
                    className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-full text-center font-semibold hover:bg-blue-600 transition"
                  >
                    View Profile
                  </Link>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
