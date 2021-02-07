import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'
import { StreamsResponse } from '~/types/api/v1/StreamsResponse'
import { Stream } from '~/types/twitch/Stream'

@Module({
  name: 'Streams',
  stateFactory: true,
  namespaced: true
})
class Streams extends VuexModule {
  liveStreams: Array<Stream> = []
  paginationCursor: string = ''

  @Mutation
  setStreams (streams: Array<Stream>) {
    this.liveStreams = streams
  }

  @Mutation
  addStreams (streams: Array<Stream>) {
    const newStreams = this.liveStreams
    streams.forEach((stream: Stream) => {
      newStreams.push(stream)
    })
    this.liveStreams = newStreams
  }

  @Mutation
  setCursor (cursor: string) {
    this.paginationCursor = cursor
  }

  @Action
  async updateStreams () {
    await $axios.$get('/v1/streams/')
      .then((result: StreamsResponse) => {
        this.context.commit('setStreams', result.data)
        this.context.commit('setCursor', result.pagination.cursor)
      })
      .catch((err) => {
        console.log('Err', err)
      })
  }

  @Action
  async loadNewStreams () {
    await $axios.$get(`/v1/streams?limit=4&cursor=${this.context.getters['cursor']}`)
      .then((result: StreamsResponse) => {
        this.context.commit('addStreams', result.data)
        this.context.commit('setCursor', result.pagination.cursor)
      })
  }

  get streams () {
    return this.liveStreams
  }

  get cursor () {
    return this.paginationCursor
  }
}

export default Streams
