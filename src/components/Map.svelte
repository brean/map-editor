<script lang="ts">
	import { T, OrbitControls } from '@threlte/core';
  import { MOUSE, TOUCH } from 'three';
  import Wall from './Wall.svelte';
  import map from "../store/map"
</script>


<T.PerspectiveCamera
  makeDefault
  castShadow
  up={[0, 0, 1]}
  position={[0, 0, 50]} fov={25}
  let:ref={camera}>
  <!-- see https://threejs.org/examples/jsm/controls/MapControls.js -->
  <OrbitControls
    screenSpacePanning={false}
    mouseButtons={{LEFT: MOUSE.PAN, MIDDLE: MOUSE.DOLLY, RIGHT: MOUSE.ROTATE}}
    touches={{ONE: TOUCH.PAN, TWO: TOUCH.DOLLY_ROTATE}}
    minDistance={10}
    maxDistance={100}
    enableZoom={true}
  />
</T.PerspectiveCamera>
<T.SpotLight
  penumbra={1}
  position={[0, 0, 0]}
  intensity={1}
  castShadow
/>
<T.PointLight
  position={[0, 0, 0]}
  intensity={0.5}
  castShadow
/>
{#if $map && $map.walls}
  {#each $map.walls as wall}
    <Wall wall={wall} />
  {/each}
{/if}