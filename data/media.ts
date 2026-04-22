export interface MediaItem {
  name: string
  creator: string
  note?: string
  lang?: string
  state?: string
}

export type MediaType = 'anime' | 'manga' | 'movie' | 'tv' | 'book' | 'game'

export const media: Record<MediaType, MediaItem[]> = {
  anime: [],
  manga: [],
  movie: [],
  tv: [],
  book: [],
  game: [],
}

export const socials = [
  {
    name: 'GitHub',
    link: 'https://github.com/Phyll1s0',
    icon: 'i-simple-icons-github',
  },
  {
    name: 'Email',
    link: 'mailto:louhao088@gmail.com',
    icon: 'i-carbon-email',
  },
  {
    name: 'X/Twitter',
    link: 'https://x.com/Phyll1s0',
    icon: 'i-simple-icons-x',
  },
]
