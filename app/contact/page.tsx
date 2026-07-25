"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const GTA_CITIES = [
  "Toronto",
  "Mississauga",
  "Brampton",
  "Etobicoke",
  "Scarborough",
  "North York",
  "Vaughan",
  "Richmond Hill",
  "Markham",
  "Oakville",
  "Pickering",
  "Whitby",
  "Oshawa",
];

const SERVICES = [
  "Bathroom Renovation",
  "Kitchen Renovation",
  "Basement Finishing",
  "Full House Renovation",
  "Landscaping & Sodding",
  "Roofing",
  "Flooring & Tiling",
  "Not sure yet",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  city: string;
  service: string;
  message: string;
}

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  service: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Please tell us about your project.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setSubmitted(true);
      setForm(EMPTY_FORM);
      setErrors({});
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-16">
      {/* Page header */}
      <section className="bg-[#1A1A1A] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Ready to get started? Send us a message and we&apos;ll schedule a
            free on-site consultation within 48 hours.
          </p>
        </div>
      </section>

      <div className="bg-[#F7F5F0] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-14">
          {/* Contact info */}
          <aside className="lg:col-span-2">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">
                Reach Us Directly
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] flex items-center justify-center text-white text-xl shrink-0">
                    📞
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#2D2D2D]/50 mb-0.5">
                      Phone
                    </p>
                    <p className="font-bold text-[#1A1A1A]">
                      226-899-1190
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] flex items-center justify-center text-white text-xl shrink-0">
                    ✉️
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#2D2D2D]/50 mb-0.5">
                      Email
                    </p>
                    <p className="font-bold text-[#1A1A1A]">
                      scrapetoshape@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] flex items-center justify-center text-white text-xl shrink-0">
                    📍
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#2D2D2D]/50 mb-0.5">
                      Service Area
                    </p>
                    <p className="font-bold text-[#1A1A1A]">
                      Greater Toronto Area, ON
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-base mb-3">
                  What Happens After You Contact Us?
                </h3>
                <ol className="space-y-2">
                  {[
                    "We call or email you back within 24 hours",
                    "We schedule a free on-site consultation",
                    "You receive a detailed written quote within a few days",
                    "No pressure — take as much time as you need",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="w-5 h-5 rounded-full bg-[#C9A84C] text-[#1A1A1A] text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </ScrollReveal>
          </aside>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl shadow-md p-8 sm:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-[#1A1A1A] flex items-center justify-center text-4xl mb-6">
                      ✅
                    </div>
                    <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                      Thank You!
                    </h2>
                    <p className="text-[#2D2D2D]/60 max-w-sm leading-relaxed mb-6">
                      We&apos;ve received your message and will be in touch
                      within 24 hours to schedule your free consultation.
                    </p>
                    <p className="text-sm text-[#2D2D2D]/40">
                      Prefer to talk now? Call us at{" "}
                      <a
                        href="tel:2268991190"
                        className="text-[#C9A84C] font-semibold hover:underline"
                      >
                        226-899-1190
                      </a>
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-sm text-[#1A1A1A] hover:text-[#C9A84C] font-medium underline transition-colors duration-200"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                      Request a Free Consultation
                    </h2>
                    <p className="text-[#2D2D2D]/50 text-sm mb-8">
                      Fill out the form below and we&apos;ll be in touch within
                      24 hours.
                    </p>

                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      {/* Name + Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-[#2D2D2D] mb-1.5"
                          >
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Jane Smith"
                            className={`w-full rounded-xl border px-4 py-3 text-sm text-[#2D2D2D] bg-[#F7F5F0] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] transition-all duration-200 ${
                              errors.name
                                ? "border-red-400"
                                : "border-[#1A1A1A]/20"
                            }`}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-[#2D2D2D] mb-1.5"
                          >
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="jane@example.com"
                            className={`w-full rounded-xl border px-4 py-3 text-sm text-[#2D2D2D] bg-[#F7F5F0] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] transition-all duration-200 ${
                              errors.email
                                ? "border-red-400"
                                : "border-[#1A1A1A]/20"
                            }`}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Phone + City */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-semibold text-[#2D2D2D] mb-1.5"
                          >
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="416-555-0100"
                            className="w-full rounded-xl border border-[#1A1A1A]/20 px-4 py-3 text-sm text-[#2D2D2D] bg-[#F7F5F0] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] transition-all duration-200"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="city"
                            className="block text-sm font-semibold text-[#2D2D2D] mb-1.5"
                          >
                            City / Neighbourhood
                          </label>
                          <select
                            id="city"
                            name="city"
                            value={form.city}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-[#1A1A1A]/20 px-4 py-3 text-sm text-[#2D2D2D] bg-[#F7F5F0] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] transition-all duration-200"
                          >
                            <option value="">Select a city…</option>
                            {GTA_CITIES.map((city) => (
                              <option key={city} value={city}>
                                {city}
                              </option>
                            ))}
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      {/* Service */}
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-semibold text-[#2D2D2D] mb-1.5"
                        >
                          Service of Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-[#1A1A1A]/20 px-4 py-3 text-sm text-[#2D2D2D] bg-[#F7F5F0] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] transition-all duration-200"
                        >
                          <option value="">Select a service…</option>
                          {SERVICES.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold text-[#2D2D2D] mb-1.5"
                        >
                          Tell Us About Your Project{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Describe what you're looking to do — rough timeline, scope, any specific questions…"
                          className={`w-full rounded-xl border px-4 py-3 text-sm text-[#2D2D2D] bg-[#F7F5F0] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] transition-all duration-200 resize-none ${
                            errors.message
                              ? "border-red-400"
                              : "border-[#1A1A1A]/20"
                          }`}
                        />
                        {errors.message && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-[#C9A84C] hover:bg-[#b8963f] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-base"
                      >
                        {submitting ? "Sending…" : "Send My Request"}
                      </button>

                      {submitError && (
                        <p className="text-red-500 text-sm text-center">{submitError}</p>
                      )}

                      <p className="text-xs text-[#2D2D2D]/40 text-center">
                        We&apos;ll never share your information. View our privacy
                        policy for details.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
