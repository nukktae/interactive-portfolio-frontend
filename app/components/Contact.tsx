"use client";

import { useEffect, useState } from "react";

const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

/** Use your event-type URL (e.g. …/30min) so the embed opens straight to "Select a Day" instead of event-type picker. */
function getCalendlyUrl() {
  if (typeof process === "undefined") return "";
  return process.env.NEXT_PUBLIC_CALENDAR_BOOKING_URL ?? "";
}

export function Contact() {
  const [showCalendar, setShowCalendar] = useState(true);
  const calendlyUrl = getCalendlyUrl();

  useEffect(() => {
    if (!showCalendar) return;

    const link = document.createElement("link");
    link.href = CALENDLY_CSS;
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT;
    script.async = true;
    document.body.appendChild(script);

    const style = document.createElement("style");
    style.setAttribute("data-calendly-contact", "true");
    style.textContent = `
      .calendly-inline-widget {
        border: none !important;
        border-radius: 40px;
        overflow: hidden;
      }
      .calendly-inline-widget iframe {
        border: none !important;
        border-radius: 40px;
        background: transparent !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      const existingLink = document.querySelector(`link[href="${CALENDLY_CSS}"]`);
      if (existingLink) document.head.removeChild(existingLink);
      const existingScript = document.querySelector(
        `script[src="${CALENDLY_SCRIPT}"]`
      );
      if (existingScript) document.body.removeChild(existingScript);
      const customStyle = document.querySelector(
        "style[data-calendly-contact='true']"
      );
      if (customStyle) document.head.removeChild(customStyle);
    };
  }, [showCalendar]);

  return (
    <section
      id="contact"
      className="w-full py-20 md:py-40 px-6 md:px-12 bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left: Headline + contact info */}
        <div>
          <h2 className="text-[48px] sm:text-[64px] md:text-[80px] font-black leading-none tracking-tighter mb-8 md:mb-12">
            LET&apos;S
            <br />
            BUILD
            <br />
            NEXT.
          </h2>
          <div className="space-y-6">
            <a
              href="mailto:anu.bn@yahoo.com"
              className="flex items-center gap-6 group cursor-pointer w-fit"
            >
              <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-all">
                <i className="fa-solid fa-envelope" aria-hidden />
              </div>
              <span className="text-lg md:text-xl font-bold">
                anu.bn@yahoo.com
              </span>
            </a>
            <div className="flex items-center gap-6 group cursor-pointer w-fit">
              <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-all">
                <i className="fa-solid fa-location-dot" aria-hidden />
              </div>
              <span className="text-lg md:text-xl font-bold">
                Available Globally
              </span>
            </div>
          </div>
        </div>

        {/* Right: Form or Calendly inline */}
        <div className="bg-gray-50 p-8 md:p-12 rounded-[40px]">
          {showCalendar ? (
            <>
              <p className="text-sm text-gray-500 mb-4">
                <button
                  type="button"
                  onClick={() => setShowCalendar(false)}
                  className="font-bold text-[#6C6FF2] hover:underline"
                >
                  ← Back to message form
                </button>
              </p>
              {calendlyUrl ? (
                <div
                  className="calendly-inline-widget w-full"
                  data-url={calendlyUrl}
                  style={{
                    minWidth: "320px",
                    height: "630px",
                    background: "transparent",
                  }}
                />
              ) : (
                <div className="py-16 text-center">
                  <p className="text-gray-500 font-medium mb-2">
                    Set your Calendly link to enable booking.
                  </p>
                  <p className="text-sm text-gray-400 mb-6">
                    Add <code className="bg-gray-200 px-2 py-1 rounded text-xs">NEXT_PUBLIC_CALENDAR_BOOKING_URL</code> to .env.local
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowCalendar(false)}
                    className="text-sm font-bold text-[#6C6FF2] hover:underline"
                  >
                    ← Back to message form
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <p className="text-sm text-gray-500 mb-6">
                Prefer to pick a time?{" "}
                <button
                  type="button"
                  onClick={() => setShowCalendar(true)}
                  className="font-bold text-[#6C6FF2] hover:underline"
                >
                  Book a 30-min slot →
                </button>
              </p>
              <form
                className="space-y-6 md:space-y-8"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-bold uppercase tracking-widest text-gray-400 block"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-gray-200 py-4 focus:outline-none focus:border-[#6C6FF2] transition-colors placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-bold uppercase tracking-widest text-gray-400 block"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-gray-200 py-4 focus:outline-none focus:border-[#6C6FF2] transition-colors placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="contact-details"
                    className="text-xs font-bold uppercase tracking-widest text-gray-400 block"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="contact-details"
                    rows={4}
                    placeholder="Tell me about your vision..."
                    className="w-full bg-transparent border-b border-gray-200 py-4 focus:outline-none focus:border-[#6C6FF2] transition-colors resize-none placeholder:text-gray-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-6 bg-[#6C6FF2] text-white font-black rounded-2xl hover:bg-black transition-all transform hover:-translate-y-1"
                >
                  SEND MESSAGE
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 md:mt-20 pt-8 md:pt-12 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold text-gray-400 tracking-[0.2em] uppercase">
        <div>© 2025 ANU. ALL RIGHTS RESERVED.</div>
        <div>DESIGNED WITH LOGIC & HEART.</div>
      </footer>
    </section>
  );
}
