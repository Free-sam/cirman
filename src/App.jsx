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
    
      <h1 className='bg-transparent text-slate-800 font-bold font-sans text-5xl text-opacity-40 text-center mb-4 mt-4 gap-3 -z-10'>
        A SamFuturistic Presents  
        <br /><br />🩶 </h1>
   

  <Canvas flat camera={{fov : 22}} className='z-20'>
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