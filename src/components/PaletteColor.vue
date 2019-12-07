<template>
  <div class="color" :style="styleStr">
    <Copy :text="entry.value" />
  </div>
</template>

<script>
import Copy from './base/Copy.vue'
import Pickr from '../mixins/pickr'

export default {
  props: ['entry'],
  components: { Copy },
  mixins: [ Pickr ],
  computed: { styleStr() { return `--background: ${ this.entry.value }` }, },
}
</script>

<style scoped>
  .color {
    /* default color */
    --background: gray; 
    background-color: var(--background);
    position: relative;
  }

  .color > .copy {
    display: none;
  }

  .color:hover > .copy {
    display: block;
  }
</style>