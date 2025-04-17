import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const SolarSystem = ({ classCode }) => {
    if (!classCode) return <div>Ingresa un código válido</div>;

    return (
        <div className="solar-system">
            <h2>Sistema Solar - Clase: {classCode}</h2>
            <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <Stars radius={100} depth={50} count={5000} factor={4} />
                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[2, 32, 32]} />
                    <meshStandardMaterial color="#FDB813" />
                </mesh>
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default SolarSystem;
