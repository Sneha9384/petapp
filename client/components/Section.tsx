import { Platform, View, type ViewProps } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useThemeColor } from '@/hooks/useThemeColor';
import tw from 'twrnc'
export type SectionProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function Section({ style, lightColor, darkColor, ...otherProps }: SectionProps) {
  return <View style={[style,{marginBottom:hp(2)}]} {...otherProps} />;
}