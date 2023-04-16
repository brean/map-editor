<script lang="ts">
	import { T, OrbitControls } from '@threlte/core';
  import { MOUSE, TOUCH } from 'three';
  import type { IMap } from '../model/IMap';
  import Wall from './Wall.svelte';

  export let data: IMap;
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
{#if data && data.walls}
  {#each data.walls as wall}
    <Wall wall={wall} />
  {/each}
{/if}