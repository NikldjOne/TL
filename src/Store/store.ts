import {configureStore} from '@reduxjs/toolkit';
import newsReducer from './news/slice/newsSlice.ts';

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    newsStore: newsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
