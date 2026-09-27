"use client";

import { useState, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointLight, Vector3 } from 'three';
import * as THREE from 'three';

function ParticlesAndWebs() {
    const particlesCount = 200;

    // Particle positioning
    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return positions;
    }, [particlesCount]);

    const pointsRef = useRef<THREE.Points>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (pointsRef.current) {
            pointsRef.current.rotation.y = time * 0.05;
            pointsRef.current.rotation.x = time * 0.02;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[particlesPosition, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                color="#e11d48" // red neon accent
                transparent
                opacity={0.8}
                sizeAttenuation
            />
        </points>
    );
}

function WebStrands() {
    const strandsCount = 30;
    const strandsRef = useRef<THREE.LineSegments>(null!);

    const lines = useMemo(() => {
        const points = [];
        for (let i = 0; i < strandsCount; i++) {
            const x = (Math.random() - 0.5) * 15;
            const y = (Math.random() - 0.5) * 15;
            const z = (Math.random() - 0.5) * 5;
            points.push(new THREE.Vector3(x, y, z));
            points.push(new THREE.Vector3(x + (Math.random() - 0.5) * 5, y + (Math.random() - 0.5) * 5, z + (Math.random() - 0.5) * 5));
        }
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return geometry;
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (strandsRef.current) {
            strandsRef.current.rotation.y = -time * 0.02;
        }
    });

    return (
        <lineSegments ref={strandsRef} geometry={lines}>
            <lineBasicMaterial color="#2563eb" transparent opacity={0.2} />
        </lineSegments>
    );
}

function MouseSpotlight() {
    const lightRef = useRef<THREE.PointLight>(null!);
    const vec = new THREE.Vector3();

    useFrame((state) => {
        const x = (state.pointer.x * state.viewport.width) / 2;
        const y = (state.pointer.y * state.viewport.height) / 2;
        lightRef.current.position.lerp(vec.set(x, y, 2), 0.1);
    });

    return <pointLight ref={lightRef} distance={10} intensity={2} color="#ffffff" />;
}

export function BackgroundScene() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none w-full h-full bg-[#050505]">
            {/* CSS overlay for styling the NY silhouette and fog (simplified) */}
            <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-black to-transparent opacity-90 mix-blend-multiply pointer-events-none z-10" />

            <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]}>
                <ambientLight intensity={0.1} />
                <ParticlesAndWebs />
                <WebStrands />
                <MouseSpotlight />
            </Canvas>
        </div>
    );
}
