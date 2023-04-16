import type { IArea } from "./IArea"
import type { ILaneGraph } from "./ILaneGraph"
import type { IMarker } from "./IMarker"
import type { IWall } from "./IWall"

export interface IMap {
  name: string
  description: string
  walls: IWall[]
  marker?: IMarker[]
  area?: IArea[]
  lane_graph: ILaneGraph
}