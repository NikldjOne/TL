import {createSlice} from '@reduxjs/toolkit';
import {type AppState} from '../../../types/types';
import {fetchNews} from '../thunks/newsThunks.ts';

const initialState: AppState = {
  newsState: {
    news: [],
    error: null,
    loading: false,
  },
};

const newsSlice = createSlice({
  name: 'newsStore',
  initialState,
  reducers: {
    currentNews(state, action) {
      state.newsState.currentNews = state.newsState.news.find(
        item => item.id === action.payload,
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNews.pending, state => {
        state.newsState.loading = true;
        state.newsState.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, {payload}) => {
        state.newsState.loading = false;
        state.newsState.news = payload;
      })
      .addCase(fetchNews.rejected, (state, {payload}) => {
        state.newsState.loading = false;
        if (typeof payload === 'string') {
          state.newsState.error = payload;
        } else {
          state.newsState.error = null;
        }
      });
  },
});
export const {currentNews} = newsSlice.actions;
export default newsSlice.reducer;
