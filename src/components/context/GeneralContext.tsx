import { createContext, useReducer, type ActionDispatch, type ReactNode } from "react";

export enum GeneralContextAction{
    TOGGLETHEME,
    CHANGELANGUAGE
}

const intialState={
    themeMode: localStorage.getItem('theme') ?? 'light',
    language: localStorage.getItem('') ?? 'en'
}

type GeneralContextStateType=typeof intialState;

type GeneralContextActionType={
    type: GeneralContextAction,
    payload?: string
}

function reducer(state: GeneralContextStateType, action: GeneralContextActionType){
    switch (action.type) {
        case GeneralContextAction.TOGGLETHEME: {
            const newTheme=state.themeMode==='light'?'dark':'light';
            localStorage.setItem('theme',newTheme);
            
            return {
                ...state,
                themeMode: newTheme
            };
        }
        case GeneralContextAction.CHANGELANGUAGE:
    }

    return state;
}

export interface GeneralContextType{
    state: GeneralContextStateType,
    dispatch: ActionDispatch<[action: GeneralContextActionType]>
}

const GeneralContext=createContext<GeneralContextType | null>(null);

function GeneralContextProvider({children}: {children: ReactNode}) {
    const [state, dispatch]=useReducer(reducer, intialState);

    return (
        <GeneralContext.Provider value={{state: state,dispatch: dispatch}}>{children}</GeneralContext.Provider>
    )
}

export {GeneralContext,GeneralContextProvider};