<script lang="ts">
  import Textfield from '@smui/textfield';
  import List, { Item, Text } from '@smui/list';

  export let pos_x = 1
</script>

<List>
  <Item><Text>Position</Text></Item>
  <Item>
    <Textfield 
      id="pos_x"
      bind:value={pos_x}
      variant="outlined" />
  </Item>
</List>

