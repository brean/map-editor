<script lang="ts">
  import type { IWall } from "../model/IWall";
  import { T } from "@threlte/core";

  export let wall:IWall;
  // TODO: polyline! -> T.ExtrudeGeometry
  let rotation = wall.data.pose.orientation;
</script>

{#if wall.type === 'box'}
<T.Mesh castShadow receiveShadow
  scale={wall.data.dimension}
  position={wall.data.pose.position}
  rotation={rotation}>
  {@html `<!-- box: ${wall.name} ${wall.data.pose.position} ${wall.data.dimension} ${rotation} -->`}
  <T.BoxGeometry />
</T.Mesh>
{/if}