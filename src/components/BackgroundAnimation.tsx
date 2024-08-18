import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Stars } from '@react-three/drei';
import styled from 'styled-components';
import * as THREE from 'three';

const AnimatedSphere: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Sphere ref={meshRef} args={[2, 64, 64]}>
      <meshStandardMaterial attach="material" color="lightblue" wireframe />
    </Sphere>
  );
};

const BackgroundAnimation: React.FC = () => {
  return (
    <AnimationContainer>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      </Canvas>
    </AnimationContainer>
  );
};

export default BackgroundAnimation;

const AnimationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  opacity: 0.3;
`;
