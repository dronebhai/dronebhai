"use client";

import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Float, Center, Html } from "@react-three/drei";

/* Preload 3D Model */
if (typeof window !== "undefined") {
  useGLTF.preload("/models/drone.glb");
}

function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center gap-2.5 text-center select-none pointer-events-none">
        <div className="w-9 h-9 border-2 border-primary/25 border-t-primary rounded-full animate-spin" />
        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider font-mono">
          Loading 3D Model...
        </span>
      </div>
    </Html>
  );
}

function Drone() {
  const { scene } = useGLTF("/models/drone.glb");
  return <primitive object={scene} />;
}

export default function HeroAnimatedDrone() {
  const controlsRef = useRef<any>(null);

  return (
    <div className="hidden md:flex relative w-full h-[460px] md:h-[500px] lg:h-[560px] xl:h-[600px] items-center justify-center select-none -translate-y-3 lg:-translate-y-6">
      {/* Soft Ambient Background Glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="w-[85%] h-[80%] bg-primary/10 rounded-full blur-3xl opacity-70" />
      </div>

      {/* 3D Interactive Canvas */}
      <Canvas
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0.36, 0.30, 0.46], fov: 36 }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
        dpr={[1, 2]}
      >
        {/* Studio Lighting */}
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 8, 5]} intensity={1.6} />
        <directionalLight position={[-5, 3, -3]} intensity={0.7} />
        <directionalLight position={[0, -4, 2]} intensity={0.3} />
        <hemisphereLight args={["#ffffff", "#334155", 0.6]} />

        {/* Orbit Controls (Drag to rotate, pinch/scroll to zoom) */}
        <OrbitControls
          ref={controlsRef}
          target={[0, 0.04, 0]}
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.8}
          minDistance={0.25}
          maxDistance={1.6}
          maxPolarAngle={Math.PI / 2 + 0.15} // Prevent going fully beneath the ground
          minPolarAngle={0.15}
          dampingFactor={0.06}
        />

        {/* Subtle levitation float effect + Auto-centering elevated slightly */}
        <Suspense fallback={<Loader />}>
          <Float
            position={[0, 0.04, 0]}
            speed={1.5}
            rotationIntensity={0.15}
            floatIntensity={0.25}
            floatingRange={[-0.03, 0.03]}
          >
            <Center>
              <Drone />
            </Center>
          </Float>
        </Suspense>
      </Canvas>

      {/* Interactive Helper Hint */}
      <div className="absolute bottom-2 right-3 sm:right-6 pointer-events-none flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-500 bg-white/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-200/60 shadow-sm opacity-75">
        <span className="material-symbols-outlined text-sm text-primary">3d_rotation</span>
        <span>Drag to rotate • Scroll to zoom</span>
      </div>
    </div>
  );
}