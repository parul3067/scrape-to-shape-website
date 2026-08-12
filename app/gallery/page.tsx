"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CTABanner from "@/components/CTABanner";

type Project = {
  slug: string;
  name: string;
  photos: string[];
};

type Album = {
  slug: string;
  name: string;
  photos?: string[];
  projects?: Project[];
};

function kitchenPhotos(project: string, count: number): string[] {
  return Array.from(
    { length: count },
    (_, i) => `/gallery/kitchen/${project}/photo-${String(i + 1).padStart(2, "0")}.jpg`
  );
}

const KITCHEN_PROJECTS: Project[] = [
  { slug: "bristol-rd-mississuaga", name: "Bristol Rd, Mississauga", photos: kitchenPhotos("bristol-rd-mississuaga", 2) },
  { slug: "chatfield-dr-ajax", name: "Chatfield Dr, Ajax", photos: kitchenPhotos("chatfield-dr-ajax", 2) },
  { slug: "dundas-st-mississuaga", name: "Dundas St, Mississauga", photos: kitchenPhotos("dundas-st-mississuaga", 7) },
  { slug: "farewell-st-oshawa", name: "Farewell St, Oshawa", photos: kitchenPhotos("farewell-st-oshawa", 12) },
  { slug: "flemington-dr-brampton", name: "Flemington Dr, Brampton", photos: kitchenPhotos("flemington-dr-brampton", 4) },
  { slug: "gail-st-cambridge", name: "Gail St, Cambridge", photos: kitchenPhotos("gail-st-cambridge", 2) },
  { slug: "krista-ct-markham", name: "Krista Ct, Markham", photos: kitchenPhotos("krista-ct-markham", 2) },
  { slug: "lloyd-cr-brampton", name: "Lloyd Cr, Brampton", photos: kitchenPhotos("lloyd-cr-brampton", 4) },
  { slug: "nash-rd-courtice", name: "Nash Rd, Courtice", photos: kitchenPhotos("nash-rd-courtice", 2) },
  { slug: "pinebrook-cr-whitby", name: "Pinebrook Cr, Whitby", photos: kitchenPhotos("pinebrook-cr-whitby", 4) },
  { slug: "quantz-ct-markham", name: "Quantz Ct, Markham", photos: kitchenPhotos("quantz-ct-markham", 6) },
  { slug: "rands-rd-ajax", name: "Rands Rd, Ajax", photos: kitchenPhotos("rands-rd-ajax", 4) },
  { slug: "redbird-cr-pickering", name: "Redbird Cr, Pickering", photos: kitchenPhotos("redbird-cr-pickering", 1) },
  { slug: "riverwood-st-whitby", name: "Riverwood St, Whitby", photos: kitchenPhotos("riverwood-st-whitby", 3) },
  { slug: "shoal-point-ajax", name: "Shoal Point, Ajax", photos: kitchenPhotos("shoal-point-ajax", 2) },
  { slug: "tampa-cr-oshawa", name: "Tampa Cr, Oshawa", photos: kitchenPhotos("tampa-cr-oshawa", 2) },
  { slug: "tanasi-rd-brampton", name: "Tanasi Rd, Brampton", photos: kitchenPhotos("tanasi-rd-brampton", 5) },
  { slug: "toronto", name: "Toronto", photos: kitchenPhotos("toronto", 1) },
  { slug: "vodden-st-brampton", name: "Vodden St, Brampton", photos: kitchenPhotos("vodden-st-brampton", 4) },
  { slug: "zeller-dr-kitchener", name: "Zeller Dr, Kitchener", photos: kitchenPhotos("zeller-dr-kitchener", 3) },
  { slug: "other", name: "Other Projects", photos: kitchenPhotos("other", 12) },
];

const ALBUMS: Album[] = [
  { slug: "kitchen", name: "Kitchen", projects: KITCHEN_PROJECTS },
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
  {
    slug: "landscaping",
    name: "Landscaping",
    photos: Array.from(
      { length: 8 },
      (_, i) => `/gallery/landscaping/landscaping-${String(i + 1).padStart(2, "0")}.jpg`
    ),
  },
  {
    slug: "wainscotting",
    name: "Wainscotting",
    photos: Array.from(
      { length: 21 },
      (_, i) => `/gallery/wainscotting/wainscotting-${String(i + 1).padStart(2, "0")}.jpg`
    ),
  },
];

function albumCover(album: Album): string | undefined {
  return album.photos?.[0] ?? album.projects?.[0]?.photos?.[0];
}

function albumTotal(album: Album): number {
  if (album.photos) return album.photos.length;
  if (album.projects) return album.projects.reduce((sum, p) => sum + p.photos.length, 0);
  return 0;
}

function ExplodeToggle({
  on,
  onChange,
}: {
  on: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() => onChange(!on)}
      className="inline-flex items-center gap-3 group"
    >
      <span className="text-sm text-[#1A1A1A] font-medium select-none">
        Show all photos
      </span>
      <span
        className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
          on ? "bg-[#C9A84C]" : "bg-[#1A1A1A]/20 group-hover:bg-[#1A1A1A]/30"
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${
            on ? "translate-x-5" : ""
          }`}
        />
      </span>
    </button>
  );
}

export default function GalleryPage() {
  const [activeAlbum, setActiveAlbum] = useState<Album | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [explodedView, setExplodedView] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Photos currently shown (project photos, exploded album photos, or direct album photos)
  const currentPhotos: string[] = activeProject
    ? activeProject.photos
    : explodedView && activeAlbum?.projects
    ? activeAlbum.projects.flatMap((p) => p.photos)
    : activeAlbum?.photos ?? [];

  // Toggle appears when browsing an album with projects (but not inside a specific project)
  const showToggle = Boolean(activeAlbum?.projects && !activeProject);

  const showProjectGrid =
    activeAlbum && activeAlbum.projects && !activeProject && !explodedView;
  const showPhotos =
    activeAlbum &&
    (activeProject || activeAlbum.photos !== undefined || explodedView);

  const goBack = () => {
    if (activeProject) {
      setActiveProject(null);
    } else {
      setActiveAlbum(null);
      setExplodedView(false);
    }
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextPhoto = useCallback(() => {
    if (lightboxIndex === null || currentPhotos.length === 0) return;
    setLightboxIndex((lightboxIndex + 1) % currentPhotos.length);
  }, [lightboxIndex, currentPhotos.length]);
  const prevPhoto = useCallback(() => {
    if (lightboxIndex === null || currentPhotos.length === 0) return;
    setLightboxIndex(
      (lightboxIndex - 1 + currentPhotos.length) % currentPhotos.length
    );
  }, [lightboxIndex, currentPhotos.length]);

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

  // Reset scroll to top on view change (album/project navigation, or toggling exploded view)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeAlbum, activeProject, explodedView]);

  // Header title reflects current level
  let headerTitle = "Our Work Speaks for Itself";
  let headerSubtitle: string | null = null;
  if (activeAlbum && activeProject) {
    headerTitle = activeProject.name;
    headerSubtitle = `${activeAlbum.name} · ${activeProject.photos.length} photos`;
  } else if (activeAlbum && explodedView && activeAlbum.projects) {
    headerTitle = activeAlbum.name;
    headerSubtitle = `All ${albumTotal(activeAlbum)} photos`;
  } else if (activeAlbum) {
    headerTitle = activeAlbum.name;
    if (activeAlbum.projects) {
      headerSubtitle = `${activeAlbum.projects.length} projects · ${albumTotal(activeAlbum)} photos`;
    } else if ((activeAlbum.photos?.length ?? 0) > 0) {
      headerSubtitle = `${activeAlbum.photos!.length} photos`;
    }
  }

  return (
    <div className="pt-16 min-h-screen bg-[#F7F5F0]">
      {/* Page header */}
      <section className="bg-[#1A1A1A] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-3">
            Project Gallery
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {headerTitle}
          </h1>
          {headerSubtitle && (
            <p className="text-white/60 text-sm">{headerSubtitle}</p>
          )}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          {/* ─── Photos view (album direct photos OR project photos) ── */}
          {showPhotos && (
            <motion.div
              key={
                activeProject?.slug ??
                (explodedView ? `exploded-${activeAlbum!.slug}` : `album-${activeAlbum!.slug}`)
              }
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
                <button
                  onClick={goBack}
                  className="inline-flex items-center gap-2 text-[#1A1A1A] hover:text-[#C9A84C] font-semibold text-sm transition-colors duration-200"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  {activeProject ? `Back to ${activeAlbum!.name}` : "Back to Gallery"}
                </button>
                {showToggle && (
                  <ExplodeToggle on={explodedView} onChange={setExplodedView} />
                )}
              </div>

              {currentPhotos.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl border border-[#1A1A1A]/5">
                  <p className="text-[#2D2D2D]/50 font-medium">
                    Photos coming soon
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {currentPhotos.map((src, i) => (
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
                        alt={`${activeProject?.name ?? activeAlbum!.name} project ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </motion.button>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* ─── Project grid (nested album, e.g. Kitchen) ────────── */}
          {showProjectGrid && (
            <motion.div
              key={`projects-${activeAlbum!.slug}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
                <button
                  onClick={goBack}
                  className="inline-flex items-center gap-2 text-[#1A1A1A] hover:text-[#C9A84C] font-semibold text-sm transition-colors duration-200"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Gallery
                </button>
                {showToggle && (
                  <ExplodeToggle on={explodedView} onChange={setExplodedView} />
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                {activeAlbum!.projects!.map((project, i) => {
                  const cover = project.photos[0];
                  return (
                    <motion.button
                      key={project.slug}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: Math.min(i * 0.04, 0.4) }}
                      onClick={() => setActiveProject(project)}
                      className="group relative bg-[#1A1A1A] rounded-2xl overflow-hidden aspect-square cursor-pointer hover:bg-[#2A2A2A] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]"
                    >
                      {cover && (
                        <>
                          <Image
                            src={cover}
                            alt={`${project.name} cover`}
                            fill
                            className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent" />
                        </>
                      )}
                      <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center">
                        <p className="text-[#C9A84C] font-bold text-sm sm:text-base">
                          {project.name}
                        </p>
                        <p className="text-white/60 text-xs mt-1">
                          {project.photos.length}{" "}
                          {project.photos.length === 1 ? "photo" : "photos"}
                        </p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* ─── Category grid (top level) ────────────────────────── */}
          {!activeAlbum && (
            <motion.div
              key="categories"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {ALBUMS.map((album, i) => {
                const cover = albumCover(album);
                const total = albumTotal(album);
                const hasContent = total > 0;
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
                      <p className="text-[#C9A84C] font-bold text-lg sm:text-xl text-center px-4">
                        {album.name}
                      </p>
                      {hasContent && (
                        <p className="text-white/60 text-sm mt-1.5">
                          {album.projects
                            ? `${album.projects.length} projects`
                            : `${total} photos`}
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
        {lightboxIndex !== null && currentPhotos.length > 0 && (
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
                src={currentPhotos[lightboxIndex]}
                alt={`${activeProject?.name ?? activeAlbum?.name ?? "Gallery"} photo ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm tabular-nums">
              {lightboxIndex + 1} / {currentPhotos.length}
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
