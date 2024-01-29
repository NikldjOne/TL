import React from "react";
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  View,
  ViewStyle,
  RefreshControl,
} from "react-native";
import { selectNewsSlice } from "../../Store/news/selectors/formSelectors.ts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Store/store.ts";
import { fetchNews } from "../../Store/news/thunks/newsThunks.ts";
import ItemNews from "./ItemNews";
import { margin } from "../../Utils";
import { NewsType } from "../../types/types.ts";

const Home = (): React.JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector(selectNewsSlice);
  const [refreshing, setRefreshing] = React.useState(false);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const refreshCallback = React.useCallback(() => {
    fetchCallback();
    resetTimerCallback();
  }, []);

  const fetchCallback = React.useCallback(() => {
    setRefreshing(true);
    dispatch(fetchNews()).finally(() => setRefreshing(false));
  }, [dispatch]);

  const resetTimerCallback = React.useCallback(() => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
    intervalRef.current = setInterval(() => {
      fetchCallback();
    }, 30000);
  }, [fetchCallback]);

  const renderItemCallback = React.useCallback(
    ({ item }: ListRenderItemInfo<NewsType>) => {
      return <ItemNews item={item} />;
    },
    []
  );

  React.useEffect(() => {
    fetchCallback();
  }, [dispatch, fetchCallback]);

  React.useEffect(() => {
    resetTimerCallback();
    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, [resetTimerCallback]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data.news}
        renderItem={renderItemCallback}
        keyExtractor={(item) => `${item.id}`}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refreshCallback} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: StyleSheet.flatten<ViewStyle>([margin(10), { flex: 1 }]),
});

export default Home;
