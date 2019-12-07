<template>
  <Background 
    class="layout" 
    :style="styleStr" 
    :entry="{value: this.entry.value.background }"
    @set-color="bubbleColor('background', arguments[0])"
  >

    <!-- stop event propagation to background -->
    <Foreground 
      :entry="{value: this.entry.value.foreground }"
      @set-color="bubbleColor('foreground', arguments[0])" 
      @click.native.stop 
    />

    <Delete @click.native="$emit('delete', entry.id)" />
    <Copy :text="entry.value.background" />
    <Copy
      :text="entry.value.foreground"
      :icon="'Ⓐ'"
      class="copy--fg"
    />
  </Background>
</template>

<script>
import Delete from './base/Delete.vue'
import Copy from './base/Copy.vue'
import Background from './LayoutBackground.vue'
import Foreground from './LayoutForeground.vue'

export default {
  props: ['entry', ],
  components: { Delete, Copy, Background, Foreground, },

  computed: {
    styleStr() {
      return `
        --background: ${ this.entry.value.background };
        --foreground: ${ this.entry.value.foreground };`
    },
  },

  methods: {
    bubbleColor(mode, color){
      this.$emit('set-color', color, this.entry.id, { type: 'layout', mode, })
    },
  },
}
</script>

<style>
.layout {
  /* default */
  --background: gray;
  --foreground: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--background);
}

.layout > .copy {
  display: none;
}

.layout:hover > .copy {
  display: block;
}

.copy--fg {
  right: 2em !important;
  padding-bottom: .3em !important;
  font-weight: bold !important;
}
</style>