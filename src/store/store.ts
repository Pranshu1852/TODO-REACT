import { configureStore } from '@reduxjs/toolkit';

import { generalSlice } from './generalSlice';
import { todoSlice } from './todoSlice';

const store = configureStore({
  reducer: { general: generalSlice.reducer, todo: todoSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type StateType = ReturnType<typeof store.getState>;

export { store };
