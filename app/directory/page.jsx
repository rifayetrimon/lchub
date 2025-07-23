"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaSearch, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import myAxios from "@/lib/myAxios";
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
import { Button } from "@/components/common/Button";

const LIMIT = 12;

export default function DirectoryPage() {
  const [providers, setProviders] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [hydrated, setHydrated] = useState(false);
  const [categoryMap, setCategoryMap] = useState({});
  const [totalCount, setTotalCount] = useState(50); // fallback total if API doesn't return

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await myAxios.get("service-categories/");
        const data = res.data || [];
        setCategories(data);
        const map = {};
        data.forEach((cat) => {
          if (cat?.id && cat?.name) map[cat.id] = cat.name;
        });
        setCategoryMap(map);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const fetchProviders = async (pageNum = 1) => {
    setLoading(true);
    const skip = (pageNum - 1) * LIMIT;

    try {
      const res = await myAxios.get(`services/?skip=${skip}&limit=${LIMIT}`);
      const data = res.data;

      // Check if backend returns total count
      if (data?.total) setTotalCount(data.total);

      setProviders(data?.items || []);
    } catch (error) {
      console.error("Failed to fetch providers:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProviders(page);
  }, [page]);

  const filteredProviders = providers.filter((p) => {
    const matchesSearch =
      p.name?.toLowerCase().includes(search.toLowerCase()) ||
      p.address?.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      categoryMap[p.service_category_id]?.toLowerCase() ===
        category.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(totalCount / LIMIT);

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

          {/* Category Filter */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Category</label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  <SelectItem key="all-category" value="All">
                    All
                  </SelectItem>
                  {categories.map((cat, idx) => (
                    <SelectItem key={cat?.id ?? `cat-${idx}`} value={cat.name}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </aside>

        {/* Results */}
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
              filteredProviders.map((p, idx) => (
                <div
                  key={p?.id ?? `provider-${idx}`}
                  className="bg-white rounded-2xl shadow p-6 flex flex-col"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {p.name}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    <FaMapMarkerAlt className="inline mr-2 text-blue-500" />
                    {p.address}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <FaPhoneAlt className="inline mr-2 text-green-500" />
                    {p.phone}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <span className="font-semibold">Category:</span>{" "}
                    {categoryMap[p.service_category_id] || "Unknown"}
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              <Button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                Previous
              </Button>
              <span className="px-4 py-2 rounded bg-gray-200 text-gray-700">
                Page {page} of {totalPages}
              </span>
              <Button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
