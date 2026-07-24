import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshReflectorMaterial, ContactShadows, Stage } from '@react-three/drei';
import { useConfigurator } from '../../context/ConfiguratorContext';

const ConfigurableHypercarModel = () => {
  const { paint, wheel, caliper, interior, aero } = useConfigurator();
  const groupRef = useRef();

  useFrame((state) => {
    // Gentle floating kinetic sway
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.1, 0]}>
      {/* Dynamic Paint Hypercar Main Shell */}
      <mesh position={[0, 0.45, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.25, 0.46, 4.5]} />
        <meshPhysicalMaterial
          color={paint.hex}
          metalness={paint.finish.includes('Matte') ? 0.4 : 0.95}
          roughness={paint.finish.includes('Matte') ? 0.5 : 0.1}
          clearcoat={paint.finish.includes('Matte') ? 0.1 : 1.0}
          clearcoatRoughness={0.03}
          reflectivity={0.9}
        />
      </mesh>

      {/* Cockpit Canopy & Glass Roof */}
      <mesh position={[0, 0.84, -0.1]} castShadow>
        <sphereGeometry args={[0.96, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.45]} />
        <meshPhysicalMaterial
          color={interior.accentColor || '#111111'}
          metalness={0.8}
          roughness={0.1}
          transmission={0.35}
          opacity={0.85}
          transparent
        />
      </mesh>

      {/* Carbon Aero Wing */}
      <mesh position={[0, 1.18, -2.15]} castShadow>
        <boxGeometry args={[aero.id === 'track-carbon' ? 2.6 : 2.2, 0.08, 0.5]} />
        <meshStandardMaterial color="#0A0A0A" metalness={0.95} roughness={0.1} />
      </mesh>
      <mesh position={[-0.85, 0.9, -2.15]}>
        <boxGeometry args={[0.06, 0.48, 0.22]} />
        <meshStandardMaterial color={paint.hex} metalness={0.9} />
      </mesh>
      <mesh position={[0.85, 0.9, -2.15]}>
        <boxGeometry args={[0.06, 0.48, 0.22]} />
        <meshStandardMaterial color={paint.hex} metalness={0.9} />
      </mesh>

      {/* Brake Caliper Accents */}
      {/* Front Left Caliper */}
      <mesh position={[-0.95, 0.35, 1.4]}>
        <boxGeometry args={[0.15, 0.25, 0.12]} />
        <meshStandardMaterial color={caliper.hex} metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Front Right Caliper */}
      <mesh position={[0.95, 0.35, 1.4]}>
        <boxGeometry args={[0.15, 0.25, 0.12]} />
        <meshStandardMaterial color={caliper.hex} metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Rear Left Caliper */}
      <mesh position={[-0.98, 0.38, -1.4]}>
        <boxGeometry args={[0.15, 0.26, 0.12]} />
        <meshStandardMaterial color={caliper.hex} metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Rear Right Caliper */}
      <mesh position={[0.98, 0.38, -1.4]}>
        <boxGeometry args={[0.15, 0.26, 0.12]} />
        <meshStandardMaterial color={caliper.hex} metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Dynamic Wheel Designs */}
      {/* Front Left */}
      <mesh position={[-1.15, 0.35, 1.4]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.38, 0.38, 0.35, 32]} />
        <meshStandardMaterial
          color={wheel.id === 'carbon-21' ? '#1A1A1A' : wheel.id === 'y-spoke-21' ? '#111111' : '#D4AF37'}
          metalness={wheel.id === 'carbon-21' ? 0.4 : 0.95}
          roughness={wheel.id === 'carbon-21' ? 0.4 : 0.15}
        />
      </mesh>
      {/* Front Right */}
      <mesh position={[1.15, 0.35, 1.4]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.38, 0.38, 0.35, 32]} />
        <meshStandardMaterial
          color={wheel.id === 'carbon-21' ? '#1A1A1A' : wheel.id === 'y-spoke-21' ? '#111111' : '#D4AF37'}
          metalness={wheel.id === 'carbon-21' ? 0.4 : 0.95}
          roughness={wheel.id === 'carbon-21' ? 0.4 : 0.15}
        />
      </mesh>
      {/* Rear Left */}
      <mesh position={[-1.18, 0.38, -1.4]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.42, 0.42, 0.4, 32]} />
        <meshStandardMaterial
          color={wheel.id === 'carbon-21' ? '#1A1A1A' : wheel.id === 'y-spoke-21' ? '#111111' : '#D4AF37'}
          metalness={wheel.id === 'carbon-21' ? 0.4 : 0.95}
          roughness={wheel.id === 'carbon-21' ? 0.4 : 0.15}
        />
      </mesh>
      {/* Rear Right */}
      <mesh position={[1.18, 0.38, -1.4]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.42, 0.42, 0.4, 32]} />
        <meshStandardMaterial
          color={wheel.id === 'carbon-21' ? '#1A1A1A' : wheel.id === 'y-spoke-21' ? '#111111' : '#D4AF37'}
          metalness={wheel.id === 'carbon-21' ? 0.4 : 0.95}
          roughness={wheel.id === 'carbon-21' ? 0.4 : 0.15}
        />
      </mesh>
    </group>
  );
};

const ConfiguratorCanvas3D = () => {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [5, 2.5, 7], fov: 40 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 15, 10]} intensity={2.5} castShadow color="#FFFFFF" />
        <pointLight position={[-10, 5, -10]} intensity={1.8} color="#C87D55" />
        <pointLight position={[0, -5, 5]} intensity={1.2} color="#D4AF37" />

        <ConfigurableHypercarModel />

        {/* Studio Floor Reflector */}
        <mesh position={[0, -0.22, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[60, 60]} />
          <MeshReflectorMaterial
            blur={[400, 100]}
            resolution={1024}
            mirror={0.65}
            mixBlur={0.7}
            mixStrength={1.4}
            roughness={0.15}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#0A0A0A"
            metalness={0.9}
          />
        </mesh>

        <ContactShadows position={[0, -0.2, 0]} opacity={0.8} scale={12} blur={2.5} far={5} />

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={4}
          maxDistance={12}
          maxPolarAngle={Math.PI / 2 - 0.02}
        />
      </Canvas>
    </div>
  );
};

export default ConfiguratorCanvas3D;
