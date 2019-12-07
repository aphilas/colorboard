<template>
  <div class="color" :style="styleStr">
    <Delete @click.native.stop="$emit('delete', entry.id)" />
    <Copy :text="entry.value" />
  </div>
</template>

<script>

import Delete from './base/Delete.vue'
import Copy from './base/Copy.vue'
import Pickr from '../mixins/pickr'

export default {
  props: ['entry', ],
  components: { Delete, Copy, },
  mixins: [ Pickr ],
  computed: { styleStr() { return `--background: ${ this.entry.value }` }, },
}

</script>

<style scoped>
.color {
  --background: gray; 
  background-color: var(--background);
}

.color > .copy {
  display: none;
}

.color:hover > .copy {
  display: block;
}
</style>