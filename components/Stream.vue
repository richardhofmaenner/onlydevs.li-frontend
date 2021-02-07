<template>
  <div class="border border-white hover:bg-white hover:text-black relative">
    <a :href="twitchLink" class="absolute top-0 left-0 w-full h-full" target="_blank" />
    <img :src="thumbnailUrl" alt="">
    <div class="px-4">
      <h3 class="text-xl">
        {{ stream.title }}
      </h3>
      <p class="mb-3">
        {{ stream.user_name }} is streaming in front of {{ stream.viewer_count }} viewers.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Stream } from '~/types/twitch/Stream'

export default Vue.extend({
  name: 'Stream',
  props: {
    stream: {
      type: Object,
      required: true
    } as PropOptions<Stream>
  },
  computed: {
    twitchLink (): string {
      return `https://twitch.tv/${this.stream.user_login}`
    },
    thumbnailUrl (): string {
      let url = this.stream.thumbnail_url
      url = url.replace('{width}', '480')
      url = url.replace('{height}', '270')
      return url
    }
  }
})
</script>
