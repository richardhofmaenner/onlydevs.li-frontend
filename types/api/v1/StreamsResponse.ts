import { Stream } from '~/types/twitch/Stream'

export interface StreamsResponse {
  data: Stream[],
  pagination: {
    cursor: string
  }
}
