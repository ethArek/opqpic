import { createStore as createReduxStore, Store } from 'redux';

import { StoreState, reducers } from '../reducers/index';

export function createStore(): Store<StoreState> {
  return createReduxStore(reducers);
}
