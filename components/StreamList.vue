<template>
  <div>
    <div class="grid grid-cols-4 gap-4">
      <Stream v-for="stream in reversedList" :key="stream.user_id" :stream="stream" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Stream } from '~/types/twitch/Stream'

export default Vue.extend({
  name: 'StreamList',
  props: {
    streams: {
      type: Array,
      required: true
    } as PropOptions<Array<Stream>>
  },
  computed: {
    reversedList (): Array<Stream> {
      // eslint-disable-next-line vue/no-mutating-props,vue/no-side-effects-in-computed-properties
      console.log('BaseURL', typeof this.$axios.defaults.baseURL, this.$axios.defaults.baseURL)
      if (this.streams.length !== null && this.streams.length > 0) {
        return this.streams.reverse()
      } else {
        return  this.streams
      }
    }
  }
})
</script>
