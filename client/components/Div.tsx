import { View, type ViewProps } from 'react-native';


export type DivProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function Div({ style, lightColor, darkColor, ...otherProps }: DivProps) {
  return <View style={[style]} {...otherProps} />
}
