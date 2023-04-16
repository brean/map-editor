import type { IBox } from "./IBox"
import type { IMesh } from "./IMesh"

export interface IWall {
  type: 'box' | 'mesh'
  data: IBox | IMesh
  name?: string
}