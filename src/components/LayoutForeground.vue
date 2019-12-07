<template>
  <p class="letter">A</p>
</template>

<script>
import Pickr from '../mixins/pickr'

export default {
  mixins: [ Pickr ],
  props: { 
    entry: { 
      default() {
        return { value: '#7D7D7D'}
      },
    },
  },
}
</script>

<style>
.letter {  
  font-size: 5.5em;
  color: var(--foreground);
  cursor: default;
  user-select: none;
  width: max-content;
  margin: 0;
}
</style>