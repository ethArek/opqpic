import { combineReducers } from 'redux';

import { ThemeState, themeReducer } from './themeReducer';

export interface StoreState {
  theme: ThemeState;
}

export const reducers = combineReducers<StoreState>({
  theme: themeReducer
});
