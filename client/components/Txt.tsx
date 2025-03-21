import { Text, type TextProps, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'subTitle' | 'text' | 'para';
};

export function Txt({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'textColor');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'subTitle' ? styles.subtitle : undefined,
        type === 'text' ? styles.text : undefined,
        type === 'para' ? styles.para : undefined,

        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: hp(1.7),
    fontFamily: 'Regular'
  },
  title: {
    fontSize: hp(2),
    fontFamily: 'Black',
    marginBottom:hp(.7)
  },
  subtitle: {
    fontSize: hp(2),
    fontFamily:'Bold'
  },
  text: {
    fontSize: hp(1.7),
    fontFamily:'Bold',
    lineHeight:hp(2.4)
  },
  para: {
    fontSize: hp(1.7),
    fontFamily:'Regular',
    lineHeight:hp(2.6)
  },
});
