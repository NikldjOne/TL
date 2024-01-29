import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { useSelector } from "react-redux";
import { selectNewsSlice } from "../../../Store/news/selectors/formSelectors.ts";
import FastImage from "react-native-fast-image";
import {
  fontSize,
  height,
  marginHorizontal,
  marginLeft,
  marginTop,
} from "../../../Utils";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../types/types.ts";

const ModalNews = () => {
  const { currentNews } = useSelector(selectNewsSlice);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const goBackCalback = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.backContainer}>
        <TouchableOpacity style={styles.touchable} onPress={goBackCalback}>
          <Text style={styles.textBack}>{"Назад"}</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <FastImage
            style={styles.image}
            source={{
              uri: currentNews?.image,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text style={styles.textMain}>{currentNews?.title}</Text>
          <Text style={styles.text}>{currentNews?.summary}</Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: StyleSheet.flatten<ViewStyle>([
    {
      flex: 1,
    },
  ]),
  mainContainer: StyleSheet.flatten<ViewStyle>([
    { backgroundColor: "rgba(0,78,194,0.11)", flex: 1 },
  ]),
  backContainer: StyleSheet.flatten<ViewStyle>([
    height(50),
    {
      flexDirection: "row",
      alignItems: "center",
    },
  ]),
  image: {
    flexDirection: "row",
    alignItems: "center",
    height: 250,
    marginHorizontal: 12,
    borderRadius: 25,
  },
  scrollView: StyleSheet.flatten<ViewStyle>([marginHorizontal(20), {}]),
  textMain: StyleSheet.flatten<TextStyle>([
    fontSize(16),
    marginTop(16),
    {
      fontWeight: "bold",
      textAlign: "center",
    },
  ]),
  touchable: StyleSheet.flatten<ViewStyle>([marginLeft(8), {}]),
  text: StyleSheet.flatten<TextStyle>([
    fontSize(14),
    marginTop(16),
    { textAlign: "justify" },
  ]),
  textBack: StyleSheet.flatten<TextStyle>([
    fontSize(18),
    { color: "rgb(0,78,194)" },
  ]),
});
export default ModalNews;
