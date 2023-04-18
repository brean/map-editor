<script lang="ts">
  import Textfield from '@smui/textfield';
  import Drawer, { AppContent, Content } from '@smui/drawer';
  import List, { Item, Text } from '@smui/list';

  import selection from '../store/selection';
</script>
{#if $selection}
<div>
  <Drawer
    open
    class="inspector-drawer"
  >
    <Content>
      <List class="inspector-list" nonInteractive>
        <Item class="inspector-item-input">
          <div class="inp">
            <Textfield 
              id="name"
              label="Name"
              style="width: 100%;"
              helperLine$style="width: 100%;"
              bind:value={$selection.name}
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
              bind:value={$selection.data.pose.position[0]}
              variant="outlined" />
          </div>
          <div class="inp">
            <Textfield 
              id="pos_y"
              label="y"
              style="width: 100%;"
              bind:value={$selection.data.pose.position[1]}
              variant="outlined" />
          </div>
          <div class="inp">
            <Textfield 
              id="pos_z"
              label="z"
              style="width: 100%;"
              bind:value={$selection.data.pose.position[2]}
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
              bind:value={$selection.data.pose.orientation[0]}
              variant="outlined" />
          </div>
          <div class="inp">
            <Textfield 
              id="rot_y"
              label="pitch"
              style="width: 100%;"
              bind:value={$selection.data.pose.orientation[1]}
              variant="outlined" />
          </div>
          <div class="inp">
            <Textfield 
              id="rot_z"
              label="yaw"
              style="width: 100%;"
              bind:value={$selection.data.pose.orientation[2]}
              variant="outlined" />
          </div>
        </Item>
      </List>
    </Content>
  </Drawer>
</div>
{/if}
<style>
  * :global(.inspector-item-input) {
    padding: 10px;
  }

  * :global(.inp) {
    padding: 3px;
    width: 100%;
  }

  * :global(.inspector-drawer) {
    position: absolute;
    right: 0px;
    top: 0px;
  }
</style>