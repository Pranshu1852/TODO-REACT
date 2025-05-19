import { useReducer, type ReactNode } from 'react';

import {
  GeneralContextAction,
  type GeneralContextActionType,
  type GeneralContextStateType,
} from '../types/GeneralContextType';

import GeneralContext from './GeneralContext';

const intialState = {
  themeMode: localStorage.getItem('theme') ?? 'light',
  language: localStorage.getItem('lang') ?? 'en',
};

function reducer(
  state: GeneralContextStateType,
  action: GeneralContextActionType
) {
  switch (action.type) {
    case GeneralContextAction.TOGGLETHEME: {
      const newTheme = state.themeMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);

      return {
        ...state,
        themeMode: newTheme,
      };
    }
    case GeneralContextAction.CHANGELANGUAGE: {
      if (!action.payload) {
        return state;
      }
      const newLanguage = action.payload;
      localStorage.setItem('lang', newLanguage);
      return {
        ...state,
        language: newLanguage,
      };
    }
  }

  return state;
}

function GeneralContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <GeneralContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </GeneralContext.Provider>
  );
}

export default GeneralContextProvider;
