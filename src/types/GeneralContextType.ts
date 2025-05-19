import type { ActionDispatch } from 'react';

export enum GeneralContextAction {
  TOGGLETHEME,
  CHANGELANGUAGE,
}

export interface GeneralContextStateType {
  themeMode: string;
  language: string;
}

export type GeneralContextActionType = {
  type: GeneralContextAction;
  payload?: string;
};

export interface GeneralContextType {
  state: GeneralContextStateType;
  dispatch: ActionDispatch<[action: GeneralContextActionType]>;
}
