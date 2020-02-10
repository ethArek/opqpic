import { Action, ActionTypes } from '../actions/types';

import { getActiveTheme, setActiveTheme } from '../services/theme';

export interface ThemeState {
  activeTheme: string;
}

export function themeReducer(
  state: ThemeState = { activeTheme: getActiveTheme() },
  action: Action
) {
  switch (action.type) {
    case ActionTypes.switchTheme:
      setActiveTheme(action.payload);

      return {
        ...state,
        activeTheme: action.payload
      };

    default:
      return state;
  }
}
