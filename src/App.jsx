import React from 'react';
import "./style.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from './Scene';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize, Resolution } from 'postprocessing'

const App = () => {



  return (
  <>
    <div className='flex justify-center items-center text-white font-bold backdrop-blur-sm'><h1 className='text-5xl text-gray-700 shadow-gray-50 text-center mb-4 mt-4 gap-3'>A SamFuturistic Presents  <br /><br />🩶 </h1>
   
    </div>
  <Canvas flat camera={{fov : 22}}>
    <OrbitControls />
    <ambientLight />
   <Scene />
   <EffectComposer>
   <Bloom
    intensity={14.0} // The bloom intensity.
    luminanceThreshold={0.03} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0.7} // smoothness of the luminance threshold. Range is [0, 1]

  />
  <ToneMapping adaptive />
  </EffectComposer>
  </Canvas>
  </>
  );

};

export default App;