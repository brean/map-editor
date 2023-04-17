<script lang="ts">
  import Textfield from '@smui/textfield';
  import List, { Item, Text } from '@smui/list';

  import map from "../store/map"
  export let pos_x = 1
  export let pos_y = 2
  export let pos_z = 3
</script>

<div>
  <List class="inspector-list" nonInteractive>
    <Item class="inspector-item-input">
      <div class="inp">
        <Textfield 
          id="name"
          label="Name"
          style="width: 100%;"
          helperLine$style="width: 100%;"
          bind:value={$map.name}
          variant="outlined" />
      </div>
    </Item>
    <Item><Text>Position</Text></Item>
    <Item class="inspector-item-input">
      <div class="inp">
        <Textfield 
          id="pos_x"
          label="x"
          style="width: 100%;"
          bind:value={pos_x}
          variant="outlined" />
      </div>
      <div class="inp">
        <Textfield 
          id="pos_y"
          label="y"
          style="width: 100%;"
          bind:value={pos_y}
          variant="outlined" />
      </div>
      <div class="inp">
        <Textfield 
          id="pos_z"
          label="z"
          style="width: 100%;"
          bind:value={pos_z}
          variant="outlined" />
      </div>
    </Item>
    <Item><Text>Orientation</Text></Item>
    <Item class="inspector-item-input">
      <div class="inp">
        <Textfield 
          id="rot_x"
          label="roll"
          style="width: 100%;"
          bind:value={pos_x}
          variant="outlined" />
      </div>
      <div class="inp">
        <Textfield 
          id="rot_y"
          label="pitch"
          style="width: 100%;"
          bind:value={pos_y}
          variant="outlined" />
      </div>
      <div class="inp">
        <Textfield 
          id="rot_z"
          label="yaw"
          style="width: 100%;"
          bind:value={pos_z}
          variant="outlined" />
      </div>
    </Item>
  </List>
</div>

<style>
  * :global(.inspector-item-input) {
    padding: 10px;
  }

  * :global(.inp) {
    padding: 3px;
    width: 100%;
  }
</style>