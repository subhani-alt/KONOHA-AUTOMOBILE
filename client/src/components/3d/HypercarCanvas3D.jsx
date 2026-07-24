import React, { useRef, Component } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows } from '@react-three/drei';

class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn('R3F 3D Canvas warning:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-obsidian-card border border-copper/30 rounded-3xl p-8 text-center">
          <img
            src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1920&q=85"
            alt="Valence Apex Stratos"
            className="w-full h-full object-cover rounded-2xl opacity-60"
          />
        </div>
      );
    }
    return this.props.children;
  }
}

const ProceduralHypercarBody = () => {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.35 + (state.pointer.x * 0.15);
      groupRef.current.rotation.x = (state.pointer.y * 0.08);
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* Hypercar Main Chassis */}
      <mesh position={[0, 0.45, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.2, 0.45, 4.4]} />
        <meshStandardMaterial
          color="#C87D55"
          metalness={0.9}
          roughness={0.15}
        />
      </mesh>

      {/* Cockpit Glass Canopy */}
      <mesh position={[0, 0.82, -0.1]} castShadow>
        <sphereGeometry args={[0.95, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.45]} />
        <meshStandardMaterial
          color="#111111"
          metalness={0.8}
          roughness={0.05}
          opacity={0.9}
          transparent
        />
      </mesh>

      {/* Front Splitter Hood */}
      <mesh position={[0, 0.48, 1.8]} rotation={[-0.15, 0, 0]}>
        <boxGeometry args={[1.9, 0.2, 1.2]} />
        <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Rear Wing Spoiler */}
      <mesh position={[0, 1.15, -2.1]}>
        <boxGeometry args={[2.4, 0.08, 0.45]} />
        <meshStandardMaterial color="#0A0A0A" metalness={0.95} roughness={0.1} />
      </mesh>

      {/* Glowing Headlights */}
      <mesh position={[-0.85, 0.45, 2.18]}>
        <boxGeometry args={[0.35, 0.06, 0.1]} />
        <meshBasicMaterial color="#F8F9FA" />
      </mesh>
      <mesh position={[0.85, 0.45, 2.18]}>
        <boxGeometry args={[0.35, 0.06, 0.1]} />
        <meshBasicMaterial color="#F8F9FA" />
      </mesh>

      {/* Rear Lightbar Strip */}
      <mesh position={[0, 0.55, -2.22]}>
        <boxGeometry args={[2.1, 0.05, 0.08]} />
        <meshBasicMaterial color="#FF2A2A" />
      </mesh>

      {/* 4 Alloy Wheels */}
      <mesh position={[-1.15, 0.35, 1.4]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.38, 0.38, 0.35, 32]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.95} roughness={0.15} />
      </mesh>
      <mesh position={[1.15, 0.35, 1.4]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.38, 0.38, 0.35, 32]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.95} roughness={0.15} />
      </mesh>
      <mesh position={[-1.18, 0.38, -1.4]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.42, 0.42, 0.4, 32]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.95} roughness={0.15} />
      </mesh>
      <mesh position={[1.18, 0.38, -1.4]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.42, 0.42, 0.4, 32]} />
        <meshStandardMaterial color="#D4AF37" metalness={0.95} roughness={0.15} />
      </mesh>
    </group>
  );
};

const HypercarCanvas3D = () => {
  return (
    <CanvasErrorBoundary>
      <div className="w-full h-full absolute inset-0 pointer-events-auto">
        <Canvas
          camera={{ position: [4.2, 2.2, 6.5], fov: 42 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 15, 10]} intensity={2.0} color="#FFFFFF" />
          <pointLight position={[-10, -5, -10]} intensity={1.5} color="#C87D55" />
          <pointLight position={[5, 10, -5]} intensity={1.8} color="#D4AF37" />

          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
            <ProceduralHypercarBody />
          </Float>

          {/* Ground Mirror Floor */}
          <mesh position={[0, -0.22, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <meshStandardMaterial color="#050505" metalness={0.9} roughness={0.2} />
          </mesh>

          <ContactShadows position={[0, -0.2, 0]} opacity={0.75} scale={10} blur={2.5} far={4} />
        </Canvas>
      </div>
    </CanvasErrorBoundary>
  );
};

export default HypercarCanvas3D;
