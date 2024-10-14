/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 watch.gltf --transform
Files: watch.gltf [519.72KB] > C:\Users\MaroonStudios\Downloads\wrist_watch_smartwatch\watch-transformed.glb [112.33KB] (78%)
Author: Mohit Batta (https://sketchfab.com/mohitdx)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/wrist-watch-smartwatch-c896964ab7274bff810ac5ae9165cf8c
Title: Wrist watch (smartWatch)
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import { Group, Object3DEventMap } from 'three'

export default function Watch(props: GroupProps) {
  const group = React.useRef<Group<Object3DEventMap>>(null)
  const { nodes, materials } = useGLTF('/watch-transformed.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Object_2">
          <group name="RootNode">
            <group name="menWatch" rotation={[1.309, 0, 0]}>
              <group name="FinalStrap1_1">
                <group name="strapClip">
                  <mesh
                    name="strapClip_MenMetal2_0"
                    // @ts-expect-error @ts-ignore
                    geometry={nodes.strapClip_MenMetal2_0.geometry}
                    material={materials.MenMetal2}
                  />
                </group>
                <group name="FinalStrap1">
                  <mesh
                    name="FinalStrap1_MenMetal2_0"
                    // @ts-expect-error @ts-ignore
                    geometry={nodes.FinalStrap1_MenMetal2_0.geometry}
                    material={materials.MenMetal2}
                  />
                  <mesh
                    name="FinalStrap1_MenMetal_0"
                    // @ts-expect-error @ts-ignore
                    geometry={nodes.FinalStrap1_MenMetal_0.geometry}
                    material={materials.MenMetal}
                  />
                </group>
                <group name="FinalStrap2">
                  <mesh
                    name="FinalStrap2_MenMetal2_0"
                    // @ts-expect-error @ts-ignore
                    geometry={nodes.FinalStrap2_MenMetal2_0.geometry}
                    material={materials.MenMetal2}
                  />
                  <mesh
                    name="FinalStrap2_MenMetal_0"
                    // @ts-expect-error @ts-ignore
                    geometry={nodes.FinalStrap2_MenMetal_0.geometry}
                    material={materials.MenMetal}
                  />
                </group>
              </group>
              <group name="Watch">
                <group name="watchShell">
                  <mesh
                    name="watchShell_MenMetal2_0"
                    // @ts-expect-error @ts-ignore
                    geometry={nodes.watchShell_MenMetal2_0.geometry}
                    material={materials.MenMetal2}
                  />
                  <mesh
                    name="watchShell_MenMetal_0"
                    // @ts-expect-error @ts-ignore
                    geometry={nodes.watchShell_MenMetal_0.geometry}
                    material={materials.MenMetal}
                  />
                </group>
                <group name="WatchshellTop">
                  <mesh
                    name="WatchshellTop_RIS_ShaderPxrDisney2_0"
                    // @ts-expect-error @ts-ignore
                    geometry={nodes.WatchshellTop_RIS_ShaderPxrDisney2_0.geometry}
                    material={materials.PaletteMaterial001}
                  />
                </group>
                <group name="watchBottom">
                  <mesh
                    name="watchBottom_Plastic_0"
                    // @ts-expect-error @ts-ignore
                    geometry={nodes.watchBottom_Plastic_0.geometry}
                    material={materials.PaletteMaterial001}
                  />
                </group>
                <group name="watchGlass">
                  <mesh
                    name="watchGlass_Glass_0"
                    // @ts-expect-error @ts-ignore
                    geometry={nodes.watchGlass_Glass_0.geometry}
                    material={materials.PaletteMaterial002}
                  />
                </group>
              </group>
              <group name="Men">
                <group name="hrHand1">
                  <mesh
                    name="hrHand1_menWatchHands_0"
                    // @ts-expect-error @ts-ignore
                    geometry={nodes.hrHand1_menWatchHands_0.geometry}
                    material={materials.PaletteMaterial003}
                  />
                </group>
                <group name="hrHand">
                  <mesh
                    name="hrHand_menWatchHands_0"
                    // @ts-expect-error @ts-ignore
                    geometry={nodes.hrHand_menWatchHands_0.geometry}
                    material={materials.PaletteMaterial003}
                  />
                </group>
                <group name="hrHand2">
                  <mesh
                    name="hrHand2_MenSec_0"
                    // @ts-expect-error @ts-ignore
                    geometry={nodes.hrHand2_MenSec_0.geometry}
                    material={materials.PaletteMaterial004}
                  />
                </group>
                <group name="Pointers">
                  <mesh
                    name="Pointers_PointerTxt_0"
                    // @ts-expect-error @ts-ignore
                    geometry={nodes.Pointers_PointerTxt_0.geometry}
                    material={materials.PaletteMaterial003}
                  />
                </group>
                <group name="CenterPart">
                  <mesh
                    name="CenterPart_menWatchHands_0"
                    // @ts-expect-error @ts-ignore
                    geometry={nodes.CenterPart_menWatchHands_0.geometry}
                    material={materials.PaletteMaterial003}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/watch-transformed.glb')
