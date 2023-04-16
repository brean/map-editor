import type { IMesh } from "./IMesh"
import type { IPose } from "./IPose"

export interface IArea extends IMesh {
  // area_type can for example be 'recharging' or 'unload'
  area_type: string
  name: string
  color: number[] // color in RGB, e.g. 255 255 255 for white
  pose: IPose
  dimension: number[]
}