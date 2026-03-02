"use client";

import { useEffect, useState, useRef } from "react";
import { SplineScene } from "@/app/components/SplineScene";
import MagicLoader from "@/app/components/MagicLoader";

const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

/** Use your event-type URL (e.g. …/30min) so the embed opens straight to "Select a Day" instead of event-type picker. */
function getCalendlyUrl() {
  if (typeof process === "undefined") return "";
  return process.env.NEXT_PUBLIC_CALENDAR_BOOKING_URL ?? "";
}

export function Contact() {
  const [showCalendar, setShowCalendar] = useState(true);
  const [calendlyLoading, setCalendlyLoading] = useState(true);
  const calendlyContainerRef = useRef<HTMLDivElement>(null);
  const calendlyUrl = getCalendlyUrl();

  // Reset loading when switching to calendar view and we have a URL
  useEffect(() => {
    if (showCalendar && calendlyUrl) {
      setCalendlyLoading(true);
    } else {
      setCalendlyLoading(false);
    }
  }, [showCalendar, calendlyUrl]);

  // Detect when Calendly iframe is injected into the container
  useEffect(() => {
    if (!showCalendar || !calendlyUrl || !calendlyContainerRef.current) return;

    const container = calendlyContainerRef.current;
    const checkForIframe = () => {
      if (container.querySelector("iframe")) {
        setCalendlyLoading(false);
        return true;
      }
      return false;
    };

    const observer = new MutationObserver(() => {
      if (checkForIframe()) observer.disconnect();
    });
    observer.observe(container, { childList: true, subtree: true });

    // Fallback: assume loaded after a delay (script might not inject iframe immediately)
    const fallback = window.setTimeout(() => setCalendlyLoading(false), 4000);

    // Initial check in case iframe is already there
    if (checkForIframe()) {
      observer.disconnect();
      clearTimeout(fallback);
    }

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [showCalendar, calendlyUrl]);

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
      className="w-full py-12 md:py-40 px-4 md:px-12 bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
        {/* Left: Headline + contact info + 3D scene */}
        <div className="space-y-6 md:space-y-10">
          <div>
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-black leading-none tracking-tighter mb-6 md:mb-12">
              LET&apos;S
              <br />
              BUILD
              <br />
              NEXT.
            </h2>
            <div className="space-y-4 md:space-y-6">
              <a
                href="mailto:anu.bn@yahoo.com"
                className="flex items-center gap-4 md:gap-6 group cursor-pointer w-fit"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-all">
                  <i className="fa-solid fa-envelope text-sm md:text-base" aria-hidden />
                </div>
                <span className="text-base md:text-xl font-bold break-all">
                  anu.bn@yahoo.com
                </span>
              </a>
              <div className="flex items-center gap-4 md:gap-6 group cursor-pointer w-fit">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-all">
                  <i className="fa-solid fa-location-dot text-sm md:text-base" aria-hidden />
                </div>
                <span className="text-base md:text-xl font-bold">
                  Available Globally
                </span>
              </div>
            </div>
          </div>
          <div className="w-full h-[220px] sm:h-[280px] md:h-[320px] rounded-xl md:rounded-2xl overflow-hidden">
            <SplineScene embedded scene="/bigball.splinecode" />
          </div>
        </div>

        {/* Right: Form or Calendly inline */}
        <div className="bg-gray-50 p-5 md:p-12 rounded-2xl md:rounded-[40px] relative min-h-[400px] md:min-h-[500px]">
          {showCalendar ? (
            <>
              <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                <button
                  type="button"
                  onClick={() => setShowCalendar(false)}
                  className="font-bold text-[#6C6FF2] hover:underline"
                >
                  ← Back to message form
                </button>
              </p>
              {calendlyUrl ? (
                <div ref={calendlyContainerRef} className="relative w-full min-h-[500px] md:min-h-[630px]">
                  {calendlyLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-xl z-10">
                      <MagicLoader
                        size={100}
                        particleCount={1}
                        speed={0.8}
                        hueRange={[250, 280]}
                      />
                    </div>
                  )}
                  <div
                    className="calendly-inline-widget w-full min-w-0"
                    data-url={calendlyUrl}
                    style={{
                      minWidth: "280px",
                      height: "630px",
                      background: "transparent",
                    }}
                  />
                </div>
              ) : (
                <div className="py-10 md:py-16 text-center">
                  <p className="text-gray-500 font-medium text-sm md:text-base mb-2">
                    Set your Calendly link to enable booking.
                  </p>
                  <p className="text-xs md:text-sm text-gray-400 mb-4 md:mb-6 px-1">
                    Add <code className="bg-gray-200 px-1.5 py-0.5 md:px-2 md:py-1 rounded text-[10px] md:text-xs break-all">NEXT_PUBLIC_CALENDAR_BOOKING_URL</code> to .env.local
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
              <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">
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
                className="space-y-4 md:space-y-8"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="space-y-1.5 md:space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 block"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-gray-200 py-3 md:py-4 focus:outline-none focus:border-[#6C6FF2] transition-colors placeholder:text-gray-400 text-base"
                  />
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 block"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-gray-200 py-3 md:py-4 focus:outline-none focus:border-[#6C6FF2] transition-colors placeholder:text-gray-400 text-base"
                  />
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <label
                    htmlFor="contact-details"
                    className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 block"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="contact-details"
                    rows={3}
                    placeholder="Tell me about your vision..."
                    className="w-full bg-transparent border-b border-gray-200 py-3 md:py-4 focus:outline-none focus:border-[#6C6FF2] transition-colors resize-none placeholder:text-gray-400 text-base min-h-[80px] md:min-h-0"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 md:py-6 bg-[#6C6FF2] text-white font-black rounded-xl md:rounded-2xl hover:bg-black transition-all transform hover:-translate-y-1 text-sm md:text-base"
                >
                  SEND MESSAGE
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 md:mt-20 pt-6 md:pt-12 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4 text-[10px] md:text-xs font-bold text-gray-400 tracking-[0.15em] md:tracking-[0.2em] uppercase text-center sm:text-left">
        <div>© 2025 ANU. ALL RIGHTS RESERVED.</div>
        <div>DESIGNED WITH LOGIC & HEART.</div>
      </footer>
    </section>
  );
}
