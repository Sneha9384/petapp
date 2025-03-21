import { View, type ViewProps } from 'react-native';
import tw from 'twrnc'
import { useThemeColor } from '@/hooks/useThemeColor';

export type MainProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function Main({ style, lightColor, darkColor, ...otherProps }: MainProps) {

  return <View style={[style,tw`w-11/12 mx-auto`]} {...otherProps} />;
}
