"use client";

import dynamic from "next/dynamic";

const DEFAULT_SCENE = "/cube3d.splinecode";

const Spline = dynamic(
  () => import("@splinetool/react-spline").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[300px] flex items-center justify-center">
        <span className="text-gray-500">Loading 3D scene…</span>
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

export function SplineScene({ embedded, scene = DEFAULT_SCENE }: SplineSceneProps) {
  if (embedded) {
    return (
      <div className="spline-scene-wrapper w-full h-full relative rounded-lg overflow-hidden">
        <Spline
          scene={scene}
          style={{ width: "100%", height: "100%" }}
        />
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
