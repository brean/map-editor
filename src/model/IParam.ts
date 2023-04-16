// see https://github.com/open-rmf/rmf_building_map_msgs/blob/main/rmf_building_map_msgs/msg/Param.msg

export enum ParamType {
  UNDEFINED = 0,
  STRING = 1,
  INT = 2,
  DOUBLE = 3,
  BOOL = 4
}

export interface IParam {
  name: string
  type: ParamType
  
  // int and float are the same in json but we want to
  // keep consistent with the ROS Message format.
  value_int: number
  value_float: number

  value_string: string
  value_bool: boolean
}