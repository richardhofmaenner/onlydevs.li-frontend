<template>
  <div>
    <div class="grid grid-cols-4 gap-4">
      <Stream v-for="stream in reversedList" :key="stream.user_id" :stream="stream" />
    </div>
    <div class="mt-10 text-center">
      <a class="btn" @click="loadMore">Load more</a>
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
      const streamsList = this.streams
      if (streamsList.length !== null && streamsList.length > 0) {
        return streamsList.reverse()
      } else {
        return streamsList
      }
    }
  },
  methods: {
    loadMore () {
      this.$nuxt.context.store.dispatch('streams/loadNewStreams')
    }
  }
})
</script>
