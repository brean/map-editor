<script lang="ts">
  import { Canvas, T } from '@threlte/core'
  import Map from "../components/Map.svelte";
  import Inspector from '../components/Inspector.svelte';

</script>
<Canvas shadows size={{width: 640, height: 480}}>
  <T.AmbientLight />
  <Map />
</Canvas>
<div class="toolbar">
</div>
<Inspector></Inspector>
