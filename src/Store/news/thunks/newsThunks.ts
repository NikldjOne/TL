import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {type AppDispatch, type RootState} from '../../store';
import {NewsType} from '../../../types/types';

export const fetchNews = createAsyncThunk<
  NewsType[],
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    rejectValue: string;
  }
>('news/fetchNews', async (_, {rejectWithValue}) => {
  const url =
    'https://api.mockfly.dev/mocks/7e261841-9bfa-49a5-a3e5-1cce60253f88/news';
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
});
