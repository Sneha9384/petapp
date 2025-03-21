import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TabBarIcon from './navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Theme } from '@/constants/Theme';
import tw from 'twrnc'
import { Txt } from './Txt';
const TabBar = ({ state, descriptors, navigation }:{state:any, descriptors:any, navigation:any}) => {
  const colorScheme = useColorScheme();
    const theme = Theme() 
  const shadowStyle = colorScheme === 'dark' ? theme.shadowStyles.dark : theme.shadowStyles.light; 
  
  return (
    <View style={[tw`flex-row `,{height:Platform.OS === 'ios'?hp(10):hp(9),backgroundColor:theme.boxBackgroundColor},shadowStyle]}>
      {state.routes.map((route:any, index:any) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[tw`flex-1 items-center gap-1 `,{paddingTop:Platform.OS === 'ios'?hp(1.4):hp(1.8)}]}>
            <TabBarIcon
              name={isFocused ? options.tabBarIcon.focusTrue : options.tabBarIcon.focusFalse}
              color={isFocused?theme.logoColor:theme.paraColor}
              family={options.tabBarIcon.family}
            />
            <Txt type='text' style={[ { color:theme.paraColor,fontSize:hp(1.3) }]}>{options.title}</Txt>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};


export default TabBar;