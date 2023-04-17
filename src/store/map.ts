import { writable } from 'svelte/store';

import data from '../data';

const { subscribe, set, update } = writable(data.simple);

const reset = () => {
  set(data.simple);
};

export default {
  subscribe,
  set,
  update,
  reset
}