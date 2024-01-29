import React from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { borderRadius, fontSize, height, marginBottom } from "../../../Utils";
import FastImage from "react-native-fast-image";
import { NewsType, RootStackParamList } from "../../../Types/types.ts";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/store.ts";
import { currentNews } from "../../../Store/news/actions";
type Props = {
  item: NewsType;
};
const ItemNews = ({ item }: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch<AppDispatch>();
  const openModal = React.useCallback(() => {
    dispatch(currentNews(item.id));
    navigation.push("ModalNews");
  }, [dispatch, item.id, navigation]);

  return (
    <>
      <TouchableOpacity activeOpacity={0.7} onPress={openModal}>
        <View style={styles.container}>
          <FastImage
            style={styles.image}
            source={{
              uri: item.image,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={styles.containerText}>
            <Text numberOfLines={3} style={styles.textMain}>
              {item.title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  container: StyleSheet.flatten<ViewStyle>([
    height(110),
    marginBottom(8),
    borderRadius(6),
    {
      backgroundColor: "rgba(0,78,194,0.42)",
      borderColor: "rgba(0,0,0,0.3)",
      borderWidth: 1,
      flexDirection: "row",
      alignItems: "center",
    },
  ]),
  containerText: StyleSheet.flatten<ViewStyle>([
    {
      flex: 1,
      height: "100%",
      justifyContent: "space-around",
    },
  ]),
  image: {
    flexDirection: "row",
    alignItems: "center",
    width: 120,
    height: 120,
    marginHorizontal: 12,
    borderRadius: 25,
  },
  textMain: StyleSheet.flatten<TextStyle>([
    fontSize(16),
    {
      fontWeight: "bold",
    },
  ]),
  text: StyleSheet.flatten<TextStyle>([fontSize(11), {}]),
});

export default ItemNews;
