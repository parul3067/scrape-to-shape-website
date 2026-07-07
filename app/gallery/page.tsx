"use client";

import { useState } from "react";

/* TODO: replace with real photos */

const CATEGORIES = [
  "All",
  "Bathroom",
  "Kitchen",
  "Basement",
  "Landscaping",
  "Roofing",
  "Flooring & Tiling",
  "Wainscoting",
];

interface GalleryItem {
  id: number;
  label: string;
  category: string;
  location: string;
  beforeColor: string;
  afterColor: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, label: "Master Bath Refresh", category: "Bathroom", location: "Etobicoke", beforeColor: "bg-stone-300", afterColor: "bg-blue-200" },
  { id: 2, label: "Ensuite Overhaul", category: "Bathroom", location: "North York", beforeColor: "bg-yellow-200", afterColor: "bg-sky-200" },
  { id: 3, label: "Powder Room Upgrade", category: "Bathroom", location: "Mississauga", beforeColor: "bg-orange-200", afterColor: "bg-teal-200" },
  { id: 4, label: "Open-Concept Kitchen", category: "Kitchen", location: "Brampton", beforeColor: "bg-stone-300", afterColor: "bg-orange-200" },
  { id: 5, label: "White Shaker Kitchen", category: "Kitchen", location: "Vaughan", beforeColor: "bg-yellow-300", afterColor: "bg-amber-100" },
  { id: 6, label: "Two-Tone Kitchen", category: "Kitchen", location: "Richmond Hill", beforeColor: "bg-gray-300", afterColor: "bg-green-100" },
  { id: 7, label: "Legal Basement Suite", category: "Basement", location: "Mississauga", beforeColor: "bg-gray-400", afterColor: "bg-purple-200" },
  { id: 8, label: "Basement Rec Room", category: "Basement", location: "Scarborough", beforeColor: "bg-gray-300", afterColor: "bg-indigo-200" },
  { id: 9, label: "Home Gym Basement", category: "Basement", location: "Markham", beforeColor: "bg-stone-400", afterColor: "bg-lime-200" },
  { id: 10, label: "Backyard Patio & Sod", category: "Landscaping", location: "Brampton", beforeColor: "bg-brown-300", afterColor: "bg-green-200" },
  { id: 11, label: "Interlock Driveway", category: "Landscaping", location: "Oakville", beforeColor: "bg-gray-400", afterColor: "bg-emerald-200" },
  { id: 12, label: "Retaining Wall & Garden", category: "Landscaping", location: "Vaughan", beforeColor: "bg-stone-300", afterColor: "bg-teal-100" },
  { id: 13, label: "Full Shingle Replacement", category: "Roofing", location: "Etobicoke", beforeColor: "bg-red-300", afterColor: "bg-red-200" },
  { id: 14, label: "Flat Roof System", category: "Roofing", location: "Toronto", beforeColor: "bg-gray-400", afterColor: "bg-slate-300" },
  { id: 15, label: "LVP Throughout Main Floor", category: "Flooring & Tiling", location: "North York", beforeColor: "bg-yellow-200", afterColor: "bg-amber-200" },
  { id: 16, label: "Hardwood Refinish", category: "Flooring & Tiling", location: "Mississauga", beforeColor: "bg-stone-300", afterColor: "bg-orange-100" },
  { id: 17, label: "Large-Format Tile Kitchen", category: "Flooring & Tiling", location: "Richmond Hill", beforeColor: "bg-gray-300", afterColor: "bg-slate-100" },
  { id: 18, label: "Board & Batten Feature Wall", category: "Wainscoting", location: "Markham", beforeColor: "bg-gray-200", afterColor: "bg-green-50" },
  { id: 19, label: "Dining Room Wainscoting", category: "Wainscoting", location: "Brampton", beforeColor: "bg-white", afterColor: "bg-stone-100" },
  { id: 20, label: "Staircase Wainscoting", category: "Wainscoting", location: "Oakville", beforeColor: "bg-gray-100", afterColor: "bg-amber-50" },
];

function GalleryCard({ item }: { item: GalleryItem }) {
  const [showAfter, setShowAfter] = useState(true);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
      {/* Image placeholder — TODO: replace with real photos */}
      <div className="relative h-52 overflow-hidden">
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            showAfter ? "opacity-100" : "opacity-0"
          } ${item.afterColor} flex items-end p-4`}
        >
          <span className="text-xs font-bold uppercase tracking-wider bg-[#C9A84C] text-white px-2 py-1 rounded-full">
            After
          </span>
        </div>
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            showAfter ? "opacity-0" : "opacity-100"
          } ${item.beforeColor} flex items-end p-4`}
        >
          <span className="text-xs font-bold uppercase tracking-wider bg-[#2D2D2D]/60 text-white px-2 py-1 rounded-full">
            Before
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A84C]">
              {item.category}
            </span>
            <h3 className="font-bold text-[#1A1A1A] text-base mt-0.5">
              {item.label}
            </h3>
            <p className="text-[#2D2D2D]/50 text-xs mt-0.5">{item.location}</p>
          </div>
        </div>

        {/* Before/After toggle */}
        <button
          onClick={() => setShowAfter((prev) => !prev)}
          className="mt-3 text-xs font-semibold text-[#1A1A1A] hover:text-[#C9A84C] transition-colors duration-200 flex items-center gap-1"
        >
          <span className="w-4 h-4 rounded-full border-2 border-current flex items-center justify-center text-[8px]">
            ↔
          </span>
          Toggle {showAfter ? "Before" : "After"}
        </button>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-16 min-h-screen bg-[#F7F5F0]">
      {/* Page header */}
      <section className="bg-[#1A1A1A] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-3">
            Project Gallery
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Work Speaks for Itself
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Browse before-and-after project photos from across the GTA. Toggle
            each card to compare the transformation.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <div className="sticky top-16 z-30 bg-white/90 backdrop-blur-md border-b border-[#1A1A1A]/10 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#1A1A1A] text-white shadow-md"
                    : "bg-[#F7F5F0] text-[#2D2D2D] hover:bg-[#1A1A1A]/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-[#2D2D2D]/50 text-sm mb-6">
          Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
        </p>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#2D2D2D]/40 text-lg">
              No projects found in this category yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
