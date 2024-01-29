import { createSelector } from "@reduxjs/toolkit";
import { type RootState } from "../../store";
import { type AppState, INews } from "../../../Types/types";

const selectFormSlice = (state: RootState): AppState => state.newsStore;

export const selectNewsSlice = createSelector(
  [selectFormSlice],
  (news) => news.newsState
) as (state: RootState) => INews;
