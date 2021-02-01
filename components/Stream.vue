<template>
  <div class="border border-white hover:bg-white hover:text-black relative">
    <a :href="twitchLink" class="absolute top-0 left-0 w-full h-full" target="_blank"></a>
    <img :src="stream.thumbnail_url" alt="">
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
    }
  },
  mounted () {
    // eslint-disable-next-line vue/no-mutating-props
    this.stream.thumbnail_url = this.stream.thumbnail_url.replace('{width}', '960')
    // eslint-disable-next-line vue/no-mutating-props
    this.stream.thumbnail_url = this.stream.thumbnail_url.replace('{height}', '540')
  }
})
</script>
