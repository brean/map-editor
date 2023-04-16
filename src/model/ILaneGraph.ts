import type { ILaneEdge } from "./ILaneEdge";
import type { ILaneNode } from "./ILaneNode";

export interface ILaneGraph {
  edges: ILaneEdge[]
  nodes: ILaneNode[]
}