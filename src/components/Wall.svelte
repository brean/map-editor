<script lang="ts">
  import type { IWall } from "../model/IWall";
  import { InteractiveObject, T, type ThreltePointerEvent } from "@threlte/core";
  import selection from '../store/selection';

  export let wall:IWall;
  // TODO: polyline! -> T.ExtrudeGeometry
  let rotation = wall.data.pose.orientation;
  const onClick = () => {
    selection.select(wall)
  }
</script>

{#if wall.type === 'box'}
<T.Mesh castShadow receiveShadow
  scale={wall.data.dimension}
  position={wall.data.pose.position}
  rotation={rotation}
  let:ref>
  <InteractiveObject
		object={ref}
		interactive
		on:click={onClick}
	/>
  {@html `<!-- box: ${wall.name} ${wall.data.pose.position} ${wall.data.dimension} ${rotation} -->`}
  <T.BoxGeometry />
</T.Mesh>
{/if}