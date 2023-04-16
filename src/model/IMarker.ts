import type { IParam } from "./IParam"
import type { IPose } from "./IPose"

export interface IMarker {
  name: string
  pose: IPose
  params: IParam[]
  color: number[] // color in RGB, e.g. 255 255 255 for white
  radius?: number
}