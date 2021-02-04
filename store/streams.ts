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
  liveStreams: Stream[] = []

  @Mutation
  setStreams (streams: Stream[]) {
    this.liveStreams = streams
  }

  @Action
  async updateStreams () {
    await $axios.$get('/v1/streams/')
      .then((result: StreamsResponse) => {
        this.context.commit('setStreams', result.data)
      })
      .catch((err) => {
        console.log('Err', err)
      })
  }

  get streams () {
    return this.liveStreams
  }
}

export default Streams
