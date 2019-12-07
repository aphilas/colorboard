import Pickr from '@simonwep/pickr';
import opts from '../utils/pickr-opts'

export default {
  data(){
    return {
      pickrs: [],
      pickrEls: [],
    }
  },

  mounted() {
    this.pickrEls.push(this.$el)

    let def = '#7D7D7D'
    if (this.entry) {
      def = this.entry.value
    }

    this.pickrEls.forEach(el => {
      this.pickrs.push({
        el,
        pickr: new Pickr({ ...opts, el, default: def }),
      })
    })

    this.pickrs.forEach(({ pickr }) => {
      pickr.on('save', color => {
        if (this.entry && this.entry.id) {
          this.$emit('set-color', color.toHEXA().toString(), this.entry.id)
        } else {
          this.$emit('set-color', color.toHEXA().toString())
        }
        pickr.hide()
      })
    })
  },

  beforeDestroy() {
    this.pickrs.forEach(({ pickr }) => {
      if (pickr) pickr.destroyAndRemove()
    })
  }
}

// TODO: focus input on 'show', save on 'Enter'
