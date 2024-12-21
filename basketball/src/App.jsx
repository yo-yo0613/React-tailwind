import React from 'react';
import { Canvas } from '@react-three/fiber'; // 用來在 React 中渲染 3D 場景
import { OrbitControls } from '@react-three/drei'; // 用於控制 3D 項目視角
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

function Basketball() {
  // 加載籃球的紋理圖
  const texture = useLoader(TextureLoader, '/src/assets/bk.jpg'); // 替換為真實的圖片路徑

  return (
    <mesh>
      {/* 創建一個球體 */}
      <sphereGeometry args={[2, 32, 32]} />
      {/* 使用加載的紋理來顯示籃球 */}
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        {/* 設置燈光 */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {/* 渲染籃球 */}
        <Basketball />

        {/* 加入視角控制 */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;