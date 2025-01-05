"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { motion as motion3d } from 'framer-motion-3d';

function Computer() {
  const computer = useGLTF('/models/computer.glb');
  return (
    <motion3d.primitive 
      object={computer.scene} 
      scale={4.0}
      position={[0, -1, 0]}
      rotation={[0, -Math.PI / 4, 0]}
      initial={{ scale: 0 }}
      animate={{ scale: 4.0 }}
      transition={{ duration: 0.8 }}
    />
  );
}

export default function Model3D() {
  return (
    <div className="h-[600px] relative bg-white">
      <Canvas shadows className="relative z-20" style={{ background: 'white' }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls 
          enableZoom={false} 
          autoRotate={true}
          autoRotateSpeed={0.5}
          enableRotate={true}
          enablePan={false}
        />
        
        <color attach="background" args={['#ffffff']} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <pointLight position={[-5, -5, -5]} intensity={0.4} color="#498FD8" />
        <spotLight
          position={[0, 5, 0]}
          intensity={0.6}
          angle={0.6}
          penumbra={1}
          castShadow
        />
        
        <Suspense fallback={null}>
          <Computer />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload('/models/computer.glb'); 