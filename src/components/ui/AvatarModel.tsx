"use client";

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

export function AvatarModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { scene } = useGLTF('/models/avatar.glb');

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <primitive 
        ref={meshRef}
        object={scene} 
        scale={2}
        position={[0, -1, 0]}
      />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
} 