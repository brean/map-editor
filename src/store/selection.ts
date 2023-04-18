import { writable } from 'svelte/store';
import type { IWall } from '../model/IWall';

const { subscribe, set } = writable<undefined | IWall>(undefined);

const select = set;

const unselect = () => {
  set(undefined);
};

export default {
  subscribe,
  select,
  unselect
}