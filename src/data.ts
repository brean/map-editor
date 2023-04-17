import type { IBox } from './model/IBox';
import type { IMap } from './model/IMap'
import type { IMarker } from './model/IMarker';
import type { IWall } from './model/IWall';

// Our goal is to create a map for robot simulations like gazebo, 
// so a wall is rougly defined by SDF geometry
// http://sdformat.org/spec?ver=1.9&elem=geometry
export default {
  simple: {
    name: "Simple boxes as wall",
    description: "A simple room with 4 walls and a big entrance.",
    marker: [
      {
        name: 'center_marker',
        pose: {
          position: [0, 0, 0],
          orientation: [0, 0, 0]
        },
        color: [255, 50, 50],
        radius: 0.3
      } as IMarker
    ],
    area: [
      {
        area_type: 'outside',
        name: 'outside',
        pose: {
          'position': [0, 17, 0],
          'orientation': [0, 0, 0]
        },
        dimension: [10, 10, 2],
        color: [100, 200, 170]
      }
    ],
    walls: [
      {
        type: 'box',
        data: {
          pose: {
            position: [10, 0, 1.5],
            orientation: [0, 0, 0]
          },
          dimension: [.2, 20, 3]
        } as IBox
      } as IWall,
      {
        type: 'box',
        data: {
          pose: {
            position: [-10, 0, 1.5],
            orientation: [0, 0, 0]
          },
          dimension: [.2, 20, 3]
        } as IBox
      } as IWall,
      {
        type: 'box',
        data: {
          pose: {
            position: [0, 10, 1.5],
            orientation: [0, 0, Math.PI / 2]
          },
          dimension: [.2, 20, 3]
        } as IBox
      } as IWall,
      {
        type: 'box',
        data: {
          pose: {
            position: [7.5, -10, 1.5],
            orientation: [0, 0, Math.PI / 2]
          },
          dimension: [.2, 5, 3]
        } as IBox
      } as IWall,
      {
        type: 'box',
        data: {
          pose: {
            position: [-7.5, -10, 1.5],
            orientation: [0, 0, Math.PI / 2]
          },
          dimension: [.2, 5, 3]
        } as IBox
      } as IWall
    ]
  } as IMap
};