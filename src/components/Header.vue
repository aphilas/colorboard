<template>
  <header>
    <p id="title">
      <span>color</span>
      <span>board</span>
    </p>
    
    <div id="add">
      <span 
      :title="title" 
      id="help">?</span>

      <select
        name="entry-type" 
        id="entry-type" 
        v-model="entryType"
      >
        <option value="color">Color</option>
        <option value="palette">Palette</option>
        <option value="layout">Layout</option>
      </select>

      <button title="Add" id="add-button" @click="$emit('add-entry', entryType)">✚</button>
    </div>
  </header>
</template>

<script>

import throttle from '../utils/throttle'

export default {
  data() {
    return {
      entryType: 'color',
      title: "Color - single color\nLayout - backround and foreground\nPalette - multiple colors\n\nClick color to edit"
    }
  },

  methods: {
    // TODO: fix perf
    scrollHandler: throttle(function() {
      window.pageYOffset > 0 ? this.$el.classList.add('shadow') : this.$el.classList.remove('shadow')
    }, 15),
  },

  mounted() {
    window.addEventListener('scroll', this.scrollHandler)
  },  

  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHandler)
  },
}
</script>

<style scoped>
  header {
    display: flex;
    align-items: center;
    background-color: white;
    
    position: sticky;
    top: 0;
    z-index: 2;
    width: 100%;
    margin: 0;

    --gray: rgba(125, 125, 125, 1);
  }

  .shadow {
    box-shadow: 0 .005em 10px 0 rgba(150, 150, 150);
  }

  #title {
    flex-grow: 1;
    font-size: 1.25em;
    font-weight: bold;
    text-align: left;
    padding-left: .5em;
  }

  #help {
    width: 1em;
    height: 1em;
    display: inline-block;
    font-weight: 900;
    background-color: var(--gray);
    padding: .15em;
    border-radius: 50%;
    margin: 0 0.5em;
    color: white;
    cursor: default;
  }

  #add {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  #title > span:nth-child(1) {
    color: rgba(62, 100, 255, 1);
  }

  #title > span:nth-child(2) {
    color: rgba(94, 223, 255, 1);
  }

  select {
    border: 0;
    border-bottom: 2px solid var(--gray);
    padding: .25em .5em;
    background: none;
    font-weight: bold;
    width: 7.5em;
  }

  #add-button {
    background: #FF136B;
    color: white;
    padding: .25em 1em;
    border: 0;
    border-radius: .25em;
    margin: 0 .75em;
    cursor: pointer;
    font-size: 1em;
  }

</style>