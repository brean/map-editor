import type { ILaneNode } from "./ILaneNode";

export interface ILaneEdge {
  source: ILaneNode
  target: ILaneNode
  params: object;  // key-value pair
}