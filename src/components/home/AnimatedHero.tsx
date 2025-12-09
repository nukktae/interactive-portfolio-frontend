"use client";

import { Canvas } from '@react-three/fiber';
import { useRef, Suspense } from 'react';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { Group } from 'three';
import { motion } from 'framer-motion';

function TeddyBear() {
  const { scene } = useGLTF('/models/teddy_bear.glb');
  const groupRef = useRef<Group>(null);

  return (
    <group ref={groupRef}>
      <primitive 
        object={scene} 
        scale={1.5}
        position={[2, -1, 0]}
        rotation={[0, Math.PI / 3, 0]}
      />
    </group>
  );
}

function Book() {
  const { scene } = useGLTF('/models/book.glb');
  const groupRef = useRef<Group>(null);

  return (
    <group ref={groupRef}>
      <primitive 
        object={scene} 
        scale={1.5}
        position={[-2, 1, 0]}
        rotation={[Math.PI / 6, -Math.PI / 4, 0]}
      />
    </group>
  );
}

export function AnimatedHero() {
  return (
    <div className="absolute inset-0">
      <div className="absolute right-0 lg:right-0 top-1/2 -translate-y-1/2 w-full lg:w-2/3 h-[900px]">
        <motion.div 
          className="relative w-full h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Canvas shadows>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <OrbitControls 
              enableZoom={false} 
              autoRotate={true}
              autoRotateSpeed={0.5}
              enableRotate={true}
              enablePan={false}
            />
            
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={0.6} />
            <pointLight position={[-5, -5, -5]} intensity={0.4} color="#14b8a6" />
            <spotLight
              position={[0, 5, 0]}
              intensity={0.6}
              angle={0.6}
              penumbra={1}
              castShadow
            />
            
            <Suspense fallback={null}>
              <TeddyBear />
              <Book />
            </Suspense>
          </Canvas>
        </motion.div>
      </div>
    </div>
  );
}

useGLTF.preload('/models/teddy_bear.glb');
useGLTF.preload('/models/book.glb'); 