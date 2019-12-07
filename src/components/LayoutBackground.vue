<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import Pickr from '../mixins/pickr'

export default {
  props: { 
    entry: { 
      default() {
        return { value: '#7D7D7D'}
      },
    }
  },
  mixins: [ Pickr ],
}
</script>

