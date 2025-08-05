import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const StarField = () => {
  const mesh = useRef();
  const light = useRef();

  // Generate random star positions
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    const colors = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      // Random positions in a sphere
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      // Random colors (blue to purple to white)
      const colorChoice = Math.random();
      if (colorChoice < 0.3) {
        // Blue stars
        colors[i * 3] = 0.4;
        colors[i * 3 + 1] = 0.6;
        colors[i * 3 + 2] = 1;
      } else if (colorChoice < 0.6) {
        // Purple stars
        colors[i * 3] = 0.8;
        colors[i * 3 + 1] = 0.4;
        colors[i * 3 + 2] = 1;
      } else {
        // White stars
        colors[i * 3] = 1;
        colors[i * 3 + 1] = 1;
        colors[i * 3 + 2] = 1;
      }
    }
    
    return [positions, colors];
  }, []);

  // Animate the stars
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.05;
      mesh.current.rotation.y += delta * 0.02;
    }
    
    if (light.current) {
      light.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 5;
      light.current.position.z = Math.cos(state.clock.elapsedTime * 0.5) * 5;
    }
  });

  return (
    <>
      {/* Ambient light */}
      <ambientLight intensity={0.3} />
      
      {/* Moving point light */}
      <pointLight 
        ref={light}
        position={[5, 5, 5]} 
        intensity={1} 
        color="#60a5fa"
      />
      
      {/* Star field */}
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          sizeAttenuation={true}
          vertexColors={true}
          transparent={true}
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>
      
      {/* Floating geometric shapes */}
      <mesh position={[5, 2, -3]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshPhongMaterial color="#60a5fa" transparent opacity={0.3} />
      </mesh>
      
      <mesh position={[-4, -2, -2]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshPhongMaterial color="#d946ef" transparent opacity={0.4} />
      </mesh>
      
      <mesh position={[2, -3, -4]}>
        <octahedronGeometry args={[0.4]} />
        <meshPhongMaterial color="#10b981" transparent opacity={0.3} />
      </mesh>
    </>
  );
};

export default StarField;
