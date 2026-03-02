"use client";

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import MagicLoader from "@/app/components/MagicLoader";

const DEFAULT_SCENE = "/cube3d.splinecode";

const Spline = dynamic(
  () => import("@splinetool/react-spline").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-gray-50/50">
        <MagicLoader
          size={120}
          particleCount={1}
          speed={0.8}
          hueRange={[250, 280]}
          className="w-full h-full"
        />
      </div>
    ),
  }
);

type SplineSceneProps = {
  /** When true, renders in a compact wrapper for use next to hero text */
  embedded?: boolean;
  /** Override scene URL (e.g. "/bigball.splinecode" for contact section) */
  scene?: string;
};

function EmbeddedHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 4500);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white/90 text-[10px] md:text-[11px] font-medium tracking-wide opacity-0 animate-fade-in-hint pointer-events-none"
      aria-hidden
    >
      <span className="opacity-90 hidden md:inline">Drag to rotate</span>
      <span className="opacity-50 hidden md:inline">·</span>
      <span className="opacity-90 hidden md:inline">Scroll to zoom</span>
      <span className="opacity-90 md:hidden">Two fingers to rotate & zoom</span>
    </div>
  );
}

export function SplineScene({ embedded, scene = DEFAULT_SCENE }: SplineSceneProps) {
  const [hintDismissed, setHintDismissed] = useState(false);
  const dismissHint = useCallback(() => setHintDismissed(true), []);

  if (embedded) {
    return (
      <div
        className="spline-scene-wrapper w-full h-full relative rounded-lg overflow-hidden group"
        onPointerDown={dismissHint}
      >
        <Spline
          scene={scene}
          style={{ width: "100%", height: "100%" }}
        />
        {!hintDismissed && <EmbeddedHint />}
      </div>
    );
  }

  return (
    <section
      className="spline-scene-wrapper w-full relative"
      style={{ height: "70vh", minHeight: 400 }}
    >
      <div
        className="w-full h-full"
        style={{ minHeight: 400, position: "relative" }}
      >
        <Spline
          scene={scene}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </section>
  );
}
