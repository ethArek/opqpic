import { ActionTypes } from './types';

export interface SwitchThemeAction {
  type: ActionTypes.switchTheme;
  payload: string;
}

export function switchTheme(theme: string): SwitchThemeAction {
  return {
    type: ActionTypes.switchTheme,
    payload: theme
  };
}
