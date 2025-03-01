import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import { EffectComposer, Outline } from "@react-three/postprocessing";
import CameraMovement from "./CameraMovement";
import CameraRotation from "./CameraRotation";
import FreeCameraControls from "./FreeCameraControls";

const Model = () => {
  const { scene } = useGLTF("/showroom9.glb");
  const [hoveredObject, setHoveredObject] = useState(null);

  return (
    <>
      <primitive object={scene} scale={1} />
      <EffectComposer>{hoveredObject && <Outline selection={[hoveredObject]} edgeStrength={5} />}</EffectComposer>
    </>
  );
};

const Scene = () => {
  const [cameraTarget, setCameraTarget] = useState(null);
  const [cameraStats, setCameraStats] = useState({
    position: [0, 50, 0],
    rotation: [0, 0, 0],
  });

  const locations = {
    christmas: {
      position: [-1.08, 5.0, 3.37],
      rotation: [0.92, 180.83, 0.0],
    },
    essentials: {
      position: [2.87, 5.0, 1.8],
      rotation: [-21.89, 55.92, 0.0],
    },
    accessories: {
      position: [-0.17, 5.0, -1.96],
      rotation: [-8.48, -1.6, 0.0],
    },
    beauty: {
      position: [-3.63, 5.0, -0.38],
      rotation: [-5.16, 86.4, 0.0],
    },
    clothing: {
      position: [13.18, 5.0, 3.19],
      rotation: [-19.94, 89.5, 0.0],
    },
    bags: {
      position: [12.95, 5.0, -2.78],
      rotation: [-19.94, 89.5, 0.0],
    },
  };

  return (
    <div className="w-full h-screen bg-[#fff] p-5 flex flex-col gap-5 rounded-lg">
      <h1 className="mb-1 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        <span className="block text-[#e01d47]">SHOW ROOM</span>
      </h1>
      <p className="text-lg text-gray-600">
      A bright and modern showroom designed to showcase KNM’s products, making them easy to see and appreciate.
      </p>
      <div className="w-full h-[calc(100%-80px)] border border-gray-300 rounded-lg overflow-hidden">
        <Canvas camera={{ fov: 75, near: 0.1, far: 1000 }}>
          <ambientLight intensity={5} />
          <directionalLight position={[0, 0, 0]} intensity={10} />
          <Model />
          <FreeCameraControls onStatsUpdate={setCameraStats} target={cameraTarget} />

          <CameraMovement onStatsUpdate={setCameraStats} target={cameraTarget} />
          <CameraRotation target={cameraTarget} />
        </Canvas>
      </div>

      <div className="h-[60px] bg-white px-5 rounded-lg flex justify-between items-center">
        <div className="text-black font-mono text-xs">
          <div>
            Position: X:{cameraStats.position[0]} Y:{cameraStats.position[1]} Z:{cameraStats.position[2]}
          </div>
          <div>
            Rotation: X:{cameraStats.rotation[0]} Y:{cameraStats.rotation[1]} Z:{cameraStats.rotation[2]}
          </div>
        </div>

        <div className="flex gap-5">
          {Object.keys(locations).map((location) => (
            <button
              key={location}
              onClick={() => setCameraTarget(locations[location])}
              className="px-5 py-2.5 bg-white/10 text-red-400 border border-red-400 rounded-md cursor-pointer capitalize hover:bg-white/20 transition-colors"
            >
              {location}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scene;
