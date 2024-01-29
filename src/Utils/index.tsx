import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const designDeviceWidth = 375;

export const sizeDP = (size: number): number =>
  wp(`${(size / designDeviceWidth) * 100}%`);

export const fontSize = (size: number): TextStyle =>
  StyleSheet.flatten<TextStyle>({
    fontSize: sizeDP(size),
  });

export const lineHeight = (size: number): TextStyle =>
  StyleSheet.flatten<TextStyle>({
    lineHeight: sizeDP(size),
  });

export const width = (size: number): ViewStyle | ImageStyle =>
  StyleSheet.flatten<ViewStyle>({
    width: sizeDP(size),
  });
export const height = (size: number): ViewStyle | ImageStyle =>
  StyleSheet.flatten<ViewStyle>({
    height: sizeDP(size),
  });

export const borderRadius = (size: number): ViewStyle | ImageStyle =>
  StyleSheet.flatten<ViewStyle>({
    borderRadius: sizeDP(size),
  });

export const borderBottomLeftRadius = (size: number): ViewStyle =>
  StyleSheet.flatten<ViewStyle>({
    borderBottomLeftRadius: sizeDP(size),
  });

export const borderBottomRightRadius = (size: number): ViewStyle =>
  StyleSheet.flatten<ViewStyle>({
    borderBottomRightRadius: sizeDP(size),
  });

export const borderTopLeftRadius = (size: number): ViewStyle =>
  StyleSheet.flatten<ViewStyle>({
    borderTopLeftRadius: sizeDP(size),
  });

export const borderTopRightRadius = (size: number): ViewStyle =>
  StyleSheet.flatten<ViewStyle>({
    borderTopRightRadius: sizeDP(size),
  });

export const marginHorizontal = (size: number): ViewStyle =>
  StyleSheet.flatten<ViewStyle>({
    marginHorizontal: sizeDP(size),
  });
export const marginVertical = (size: number): ViewStyle =>
  StyleSheet.flatten<ViewStyle>({
    marginVertical: sizeDP(size),
  });
export const paddingHorizontal = (size: number): ViewStyle =>
  StyleSheet.flatten<ViewStyle>({
    paddingHorizontal: sizeDP(size),
  });

export const paddingVertical = (size: number): ViewStyle =>
  StyleSheet.flatten<ViewStyle>({
    paddingVertical: sizeDP(size),
  });

export const paddingLeft = (size: number): ViewStyle =>
  StyleSheet.flatten<ViewStyle>({
    paddingLeft: sizeDP(size),
  });
export const paddingRight = (size: number): ViewStyle =>
  StyleSheet.flatten<ViewStyle>({
    paddingRight: sizeDP(size),
  });

export const paddingTop = (size: number): ViewStyle =>
  StyleSheet.flatten<ViewStyle>({
    paddingTop: sizeDP(size),
  });

export const paddingBottom = (size: number): ViewStyle =>
  StyleSheet.flatten<ViewStyle>({
    paddingBottom: sizeDP(size),
  });

export const padding = (size: number): ViewStyle =>
  StyleSheet.flatten<ViewStyle>({
    padding: sizeDP(size),
  });

export const margin = (size: number): ViewStyle =>
  StyleSheet.flatten<ViewStyle>({
    margin: sizeDP(size),
  });

export const marginTop = (size: number): ViewStyle =>
  StyleSheet.flatten<ViewStyle>({
    marginTop: sizeDP(size),
  });

export const marginBottom = (size: number): ViewStyle =>
  StyleSheet.flatten<ViewStyle>({
    marginBottom: sizeDP(size),
  });

export const marginLeft = (size: number): ViewStyle =>
  StyleSheet.flatten<ViewStyle>({
    marginLeft: sizeDP(size),
  });

export const marginRight = (size: number): ViewStyle =>
  StyleSheet.flatten<ViewStyle>({
    marginRight: sizeDP(size),
  });

export const color = (color: string): TextStyle =>
  StyleSheet.flatten<TextStyle>({
    color,
  });

export const uppercase = StyleSheet.flatten<TextStyle>({
  textTransform: 'uppercase',
});

export default {
  fontSize,
  lineHeight,
  sizeDP,
  width,
  height,
  borderRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  marginHorizontal,
  marginVertical,
  paddingHorizontal,
  paddingVertical,
  margin,
  padding,
  paddingLeft,
  paddingRight,
  paddingBottom,
  paddingTop,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  uppercase,
  color,
};
