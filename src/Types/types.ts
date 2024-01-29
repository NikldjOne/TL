export type NewsType = {
  id: number;
  title: string;
  summary: string;
  category: string;
  image: string;
  url: string;
};
export interface INews {
  error: string | null;
  loading: boolean;
  news: NewsType[];
  currentNews?: NewsType;
}

export interface AppState {
  newsState: INews;
}
export type RootStackParamList = {
  News: undefined;
  ModalNews: undefined;
};
