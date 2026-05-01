import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

function OrganizerModel() {
  const groupRef = useRef<Group>(null);

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* Base frame - bottom tray */}
      <mesh position={[0, -0.85, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.4, 0.08, 1.2]} />
        <meshStandardMaterial color="#9ca3af" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Middle shelf */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.4, 0.08, 1.2]} />
        <meshStandardMaterial color="#9ca3af" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Top shelf */}
      <mesh position={[0, 0.85, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.4, 0.08, 1.2]} />
        <meshStandardMaterial color="#9ca3af" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Left vertical legs */}
      <mesh position={[-1.1, -0.425, -0.5]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.85, 10]} />
        <meshStandardMaterial
          color="#6b7280"
          metalness={0.9}
          roughness={0.15}
        />
      </mesh>
      <mesh position={[-1.1, -0.425, 0.5]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.85, 10]} />
        <meshStandardMaterial
          color="#6b7280"
          metalness={0.9}
          roughness={0.15}
        />
      </mesh>

      {/* Right vertical legs */}
      <mesh position={[1.1, -0.425, -0.5]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.85, 10]} />
        <meshStandardMaterial
          color="#6b7280"
          metalness={0.9}
          roughness={0.15}
        />
      </mesh>
      <mesh position={[1.1, -0.425, 0.5]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.85, 10]} />
        <meshStandardMaterial
          color="#6b7280"
          metalness={0.9}
          roughness={0.15}
        />
      </mesh>

      {/* Upper tier legs */}
      <mesh position={[-1.1, 0.425, -0.5]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.85, 10]} />
        <meshStandardMaterial
          color="#6b7280"
          metalness={0.9}
          roughness={0.15}
        />
      </mesh>
      <mesh position={[-1.1, 0.425, 0.5]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.85, 10]} />
        <meshStandardMaterial
          color="#6b7280"
          metalness={0.9}
          roughness={0.15}
        />
      </mesh>
      <mesh position={[1.1, 0.425, -0.5]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.85, 10]} />
        <meshStandardMaterial
          color="#6b7280"
          metalness={0.9}
          roughness={0.15}
        />
      </mesh>
      <mesh position={[1.1, 0.425, 0.5]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.85, 10]} />
        <meshStandardMaterial
          color="#6b7280"
          metalness={0.9}
          roughness={0.15}
        />
      </mesh>

      {/* Bottom drawer - lower tier */}
      <mesh position={[0, -0.45, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.0, 0.55, 1.0]} />
        <meshStandardMaterial
          color="#d1d5db"
          metalness={0.3}
          roughness={0.5}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Upper drawer */}
      <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.0, 0.55, 1.0]} />
        <meshStandardMaterial
          color="#d1d5db"
          metalness={0.3}
          roughness={0.5}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Side hooks - left */}
      <mesh
        position={[-1.26, 0.0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        castShadow
      >
        <cylinderGeometry args={[0.03, 0.03, 0.25, 8]} />
        <meshStandardMaterial color="#f97316" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[-1.3, -0.08, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#f97316" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Side hooks - right */}
      <mesh position={[1.26, 0.0, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.25, 8]} />
        <meshStandardMaterial color="#f97316" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[1.3, -0.08, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#f97316" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Rubber feet */}
      {[-0.9, 0.9].map((x) =>
        [-0.45, 0.45].map((z) => (
          <mesh key={`foot-${x}-${z}`} position={[x, -0.9, z]}>
            <cylinderGeometry args={[0.07, 0.07, 0.06, 8]} />
            <meshStandardMaterial
              color="#374151"
              metalness={0.1}
              roughness={0.9}
            />
          </mesh>
        )),
      )}
    </group>
  );
}

export function ThreeOrganizer() {
  return (
    <Canvas
      camera={{ position: [4, 2, 4], fov: 35 }}
      shadows
      gl={{ antialias: true }}
      style={{ width: "100%", height: "100%" }}
      aria-label="3D interactive PESOMA organizer model"
    >
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-3, 3, -3]} intensity={0.8} color="#f97316" />
      <pointLight position={[3, -1, 3]} intensity={0.4} color="#60a5fa" />

      <OrganizerModel />

      <Environment preset="city" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 5}
        autoRotate={false}
      />
    </Canvas>
  );
}
