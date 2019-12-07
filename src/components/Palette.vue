<template>
  <div class="palette">
    <Delete
      @click.native="$emit('delete', entry.id)"
    />

    <PaletteColor
      v-for="entry in entries"
      :entry="entry"
      :key="entry.id"
      @set-color="bubbleColor"
    />
  </div>
</template>

<script>
import PaletteColor from './PaletteColor.vue'
import Delete from './base/Delete.vue'

export default {
  props: ['entry', ],
  components: { PaletteColor, Delete, },

  computed: {
    entries() { return this.entry.value.reverse() },
  },

  methods: {
    bubbleColor(color, paletteColorId) {
      this.$emit('set-color', color, this.entry.id, {type: 'palette', paletteColorId, })
    },
  },
}
</script>

<style scoped>
.palette {
  display: flex;
  flex-direction: column;

  /* clip inner children corners */
  overflow: hidden;
}

.palette > * {
  flex-grow: 1;
}

.palette > .delete {
  z-index: 2;
}
</style>