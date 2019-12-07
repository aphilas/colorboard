<template>
  <div class="copy" @click.stop="copy(text)">
    <span v-html="icon"></span>
  </div>
</template>

<script>
import copy from '../../utils/copy'

export default {
  props: {
    text: String,
    icon: {
      default: '&#128203;',
    },
  },

  methods: {
    copy,
  },
}
</script>

<style scoped>
.copy {
  color: white;
  position: absolute;
  bottom: .05em;
  right: .5em;
  font-weight: normal;
  cursor: pointer;
  user-select: none;
  text-align: top;
}

span {
  display: inline-block;
}

</style>