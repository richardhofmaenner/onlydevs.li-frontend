import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Streams from '~/store/streams'

// eslint-disable-next-line import/no-mutable-exports
let streamsStore: Streams

function initialiseStores (store: Store<any>): void {
  streamsStore = getModule(Streams, store)
}

export { initialiseStores, streamsStore }
