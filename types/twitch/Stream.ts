/* eslint-disable camelcase */

enum Type {
  'live' = 'live',
  '' = ''
}

export interface Stream {
  id: string,
  user_id: string
  user_login: string
  user_name: string
  game_id: string
  game_name: string
  type: Type
  title: string
  viewer_count: number
  started_at: string
  language: string
  thumbnail_url: string
  tag_ids: string[]
}
