import type { IBox } from "./IBox";

export interface IMesh extends IBox {
  polygon: number[][] | undefined
}