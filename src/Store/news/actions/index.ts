import {createAction} from '@reduxjs/toolkit';

export const currentNews = createAction<number>('newsStore/currentNews');
