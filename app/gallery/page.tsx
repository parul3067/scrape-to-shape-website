"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CTABanner from "@/components/CTABanner";

type Album = {
  slug: string;
  name: string;
  photos: string[];
};

const ALBUMS: Album[] = [
  {
    slug: "kitchen",
    name: "Kitchen",
    photos: Array.from(
      { length: 30 },
      (_, i) => `/gallery/kitchen/kitchen-${String(i + 1).padStart(2, "0")}.jpg`
    ),
  },
  {
    slug: "bathroom",
    name: "Bathroom",
    photos: Array.from(
      { length: 12 },
      (_, i) => `/gallery/bathroom/bathroom-${String(i + 1).padStart(2, "0")}.jpg`
    ),
  },
  {
    slug: "basement",
    name: "Basement",
    photos: Array.from(
      { length: 9 },
      (_, i) => `/gallery/basement/basement-${String(i + 1).padStart(2, "0")}.jpg`
    ),
  },
  { slug: "flooring", name: "Flooring", photos: [] },
  { slug: "tiling", name: "Tiling", photos: [] },
  { slug: "plumbing", name: "Plumbing", photos: [] },
  { slug: "electrical", name: "Electrical", photos: [] },
  { slug: "landscaping", name: "Landscaping", photos: [] },
  { slug: "roofing", name: "Roofing", photos: [] },
  {
    slug: "wainscotting",
    name: "Wainscotting",
    photos: Array.from(
      { length: 21 },
      (_, i) => `/gallery/wainscotting/wainscotting-${String(i + 1).padStart(2, "0")}.jpg`
    ),
  },
];

export default function GalleryPage() {
  const [activeAlbum, setActiveAlbum] = useState<Album | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextPhoto = useCallback(() => {
    if (!activeAlbum || lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % activeAlbum.photos.length);
  }, [activeAlbum, lightboxIndex]);
  const prevPhoto = useCallback(() => {
    if (!activeAlbum || lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + activeAlbum.photos.length) % activeAlbum.photos.length
    );
  }, [activeAlbum, lightboxIndex]);

  // Keyboard navigation in lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") nextPhoto();
      else if (e.key === "ArrowLeft") prevPhoto();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, closeLightbox, nextPhoto, prevPhoto]);

  return (
    <div className="pt-16 min-h-screen bg-[#F7F5F0]">
      {/* Page header */}
      <section className="bg-[#1A1A1A] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-3">
            Project Gallery
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {activeAlbum ? activeAlbum.name : "Our Work Speaks for Itself"}
          </h1>
          {activeAlbum && (
            <p className="text-white/60 text-sm">
              {activeAlbum.photos.length}{" "}
              {activeAlbum.photos.length === 1 ? "photo" : "photos"}
            </p>
          )}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          {activeAlbum ? (
            /* ─── Album view ─────────────────────────────────────────── */
            <motion.div
              key="album"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setActiveAlbum(null)}
                className="inline-flex items-center gap-2 text-[#1A1A1A] hover:text-[#C9A84C] font-semibold text-sm mb-8 transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back to Gallery
              </button>

              {activeAlbum.photos.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl border border-[#1A1A1A]/5">
                  <p className="text-[#2D2D2D]/50 font-medium">
                    Photos coming soon
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {activeAlbum.photos.map((src, i) => (
                    <motion.button
                      key={src}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.4) }}
                      onClick={() => setLightboxIndex(i)}
                      className="relative aspect-square rounded-xl overflow-hidden bg-[#1A1A1A]/5 group focus:outline-none focus:ring-2 focus:ring-[#C9A84C]"
                    >
                      <Image
                        src={src}
                        alt={`${activeAlbum.name} project ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </motion.button>
                  ))}
                </div>
              )}
            </motion.div>
          ) : (
            /* ─── Category grid ──────────────────────────────────────── */
            <motion.div
              key="categories"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5"
            >
              {ALBUMS.map((album, i) => {
                const cover = album.photos[0];
                const hasPhotos = album.photos.length > 0;
                return (
                  <motion.button
                    key={album.slug}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.05, ease: "easeOut" }}
                    onClick={() => setActiveAlbum(album)}
                    className="group relative bg-[#1A1A1A] rounded-2xl overflow-hidden aspect-square cursor-pointer hover:bg-[#2A2A2A] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]"
                  >
                    {cover && (
                      <>
                        <Image
                          src={cover}
                          alt={`${album.name} cover`}
                          fill
                          className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent" />
                      </>
                    )}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <p className="text-[#C9A84C] font-bold text-base text-center px-4">
                        {album.name}
                      </p>
                      {hasPhotos && (
                        <p className="text-white/60 text-xs mt-1">
                          {album.photos.length} photos
                        </p>
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && activeAlbum && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              aria-label="Close"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              aria-label="Previous photo"
              className="absolute left-2 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              aria-label="Next photo"
              className="absolute right-2 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="relative w-full h-full max-w-6xl max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeAlbum.photos[lightboxIndex]}
                alt={`${activeAlbum.name} photo ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm tabular-nums">
              {lightboxIndex + 1} / {activeAlbum.photos.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <CTABanner
        headline="Want Something Like This in Your Home?"
        sub="Tell us about your project and we'll show you what's possible — free consultation, no obligation."
      />
    </div>
  );
}
