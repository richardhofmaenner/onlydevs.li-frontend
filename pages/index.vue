<template>
  <section id="home" class="grid grid-cols-1">
    <div v-for="stream in streams">
      <h2>{{ stream.title }}</h2>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import { Stream } from '~/types/twitch/Stream'

export default Vue.extend({
  async asyncData (ctx:Context) {
    await ctx.store.dispatch('streams/updateStreams')
    return { streams: ctx.store.getters['streams/streams'] }
  },
  data () {
    const streams: Array<Stream>|null = null

    return {
      streams
    }
  },
  head: {
    title: 'Home - OnlyDevs.li'
  }
})
</script>
