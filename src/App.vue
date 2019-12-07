<template>
  <!-- Icon by Aleks from the Noun Project -->

  <div id="app">
    <Header
      @add-entry="addEntry"
    />

    <!-- TODO: fix transition -->
    <transition-group 
      name="list" 
      tag="section" 
      id="entries"
      mode="out-in"
    >
      <Component
        class="entry"
        v-for="entry of entries"
        :entry="entry"
        :key="entry.id"
        :is="components[entry.type]"
        @delete="deleteEntry"
        @set-color="setColor"
      />
    </transition-group>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import { type } from 'os'

import Color from './components/Color.vue'
import Layout from './components/Layout.vue'
import Palette from './components/Palette.vue'
import ID from './utils/uuid'

const findById = (arr, id) => arr.findIndex(el => el.id === id)

export default {
  name: 'app',

  data(){
    return {
      entries: [
        { id: ID.get(), type: 'color', value: '#3E64FF', },
        { id: ID.get(), type: 'layout', value: { background: '#3E64FF', foreground: 'white' }, },
        { id: ID.get(), type: 'palette', value: [{ id: ID.get(), value: '#3E64FF', }, { id: ID.get(), value: '#00B8E5', }, { id: ID.get(), value: '#5EDFFF', }, ]},
      ],

      defaults: {
        color: _ => ({ id: ID.get(), type: 'color', value: '#7D7D7D', }),
        layout:  _ => ({ id: ID.get(), type: 'layout', value: { background: '#7D7D7D', foreground: 'white' }, }),
        palette: _ => ({ id: ID.get(), type: 'palette', value: [{ id: ID.get(), value: '#7D7D7D', }, { id: ID.get(), value: '#AAA', }, { id: ID.get(), value: '#DDD', }, ]}),
      },

      components: { color: 'Color', palette: 'Palette', layout: 'Layout' }, // map entry type to component
    }
  },

  methods: {
    addEntry(type){
      this.entries.push(this.defaults[type]())
    },
    deleteEntry(id){
      this.entries = this.entries.filter(entry => entry.id !== id)
    },
    setColor(color, id, opts){
      if (!opts) {
      // set color
        this.entries[findById(this.entries, id)].value = color
      } else if (opts.type === 'palette') {
      // set palettecolor
        const palette = this.entries[findById(this.entries, id)]
        palette.value[findById(palette.value, opts.paletteColorId)].value = color
      } else if (opts.type === 'layout') {
        const layout = this.entries[findById(this.entries, id)]
        layout.value[opts.mode] = color
      }
    }
  },

  components: {
    Header, Color, Layout, Palette
  },
}
</script>

<style>
@import './styles/transitions.css';

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#entries {
  display: flex;
  flex-wrap: wrap;
}

.entry {
  width: 10em;
  height: 10em;
  margin: 1em;
  border-radius: .5em;
  position: relative; /* enable absolute positioning for children */
}

.entry > .delete {
  display: none;
}

.entry:hover > .delete {
  display: block;
}
</style>
