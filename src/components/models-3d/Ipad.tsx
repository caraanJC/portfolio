/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 web-design.gltf --transform
Files: web-design.gltf [15.61KB] > C:\Users\MaroonStudios\Downloads\voxel_web_development\web-design-transformed.glb [9.42KB] (40%)
Author: Diego G. (https://sketchfab.com/empty_mirror)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/voxel-web-development-50ad959d6c6b4799806c45bfa46ca550
Title: Voxel Web Development
*/

import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'

export default function Ipad(props: GroupProps) {
  const { nodes, materials } = useGLTF('/web-design-transformed.glb')
  return (
    <group {...props} dispose={null}>
      {/* @ts-expect-error @ts-ignore */}
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.palette}
        rotation={[Math.PI / 2, 0, 0]}
      />
      {/* @ts-expect-error @ts-ignore */}
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials['palette.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      {/* @ts-expect-error @ts-ignore */}
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials['palette.002']}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/web-design-transformed.glb')
