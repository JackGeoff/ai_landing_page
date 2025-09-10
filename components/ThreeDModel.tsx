"use client"

import React, { Suspense } from "react"
import dynamic from "next/dynamic"
import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js"
import * as THREE from "three"

// 👇 Model loader
function Model() {
  const obj = useLoader(OBJLoader, "/robot.glb")

  obj.traverse((child: any) => {
    if (child instanceof THREE.Mesh) {
      child.material = new THREE.MeshStandardMaterial({ color: "white" })
    }
  })

  return <primitive object={obj} scale={0.5} />
}

// 👇 Canvas wrapped with Suspense
function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls enableZoom={true} />
    </Canvas>
  )
}

// 👇 Export with SSR disabled (important!)
export default dynamic(() => Promise.resolve(Scene), { ssr: false })

