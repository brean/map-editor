export interface IRosMap {
  image?: string
  resolution?: number
  origin: number[]  // position
  negate?: number
  occupied_thresh?: number
  free_thresh?: number
  // mapTexture?: Texture
  orientation: number[]
}