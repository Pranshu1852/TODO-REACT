import { configureStore, createSelector } from '@reduxjs/toolkit';

import { generalSlice } from './generalSlice';
import { todoSlice } from './todoSlice';

const store = configureStore({
  reducer: { general: generalSlice.reducer, todo: todoSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const selectThemeMode = (state: StateType) => state.general.themeMode;
const selectLanguage = (state: StateType) => state.general.language;
const selectTodoArray = (state: StateType) => state.todo.todoArray;

export const storeSelector = createSelector(
  [selectThemeMode, selectLanguage, selectTodoArray],
  (themeMode, language, todoArray) => {
    return {
      theme: themeMode,
      language: language,
      todoArray: todoArray,
    };
  }
);

export type StateType = ReturnType<typeof store.getState>;

export { store };
