import { Tabs } from 'expo-router';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { Colors } from '@/constants/Colors';
import { Platform } from 'react-native';
import { Theme } from '@/constants/Theme';
import TabBarIcon from '@/components/navigation/TabBarIcon';

const TabLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Theme();
  const tabList = [
    {
      name: 'index',
      title: 'Home',
      focusTrue: 'home',
      focusFalse: 'home',
      family: 'Octicons'
    },
    {
      name: 'cart',
      title: 'Cart',
      focusTrue: 'shopping-cart',
      focusFalse: 'shopping-cart',
      family: 'Feather'
    },
    {
      name: 'whislist',
      title: 'Whislist',
      focusTrue: 'heart',
      focusFalse: 'heart',
      family: 'Feather'
    },
    {
      name: 'chat',
      title: 'Chat',
      focusTrue: 'chatbubble-ellipses-outline',
      focusFalse: 'chatbubble-ellipses-outline',
      family: 'Ionicons'
    },
    {
      name: 'profile',
      title: 'Profile',
      focusTrue: 'person-outline',
      focusFalse: 'person-outline',
      family: 'Ionicons'
    },
  ];

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: Platform.OS === 'ios' ? hp(10) : hp(8),
        },
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tertiaryColor,
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: hp(1.2),
          fontFamily:'Bold',
          color: theme.paraColor,
          paddingBottom:Platform.OS === 'ios' ? hp(0) : hp(1),
        },
      }}>
      {tabList.map((item, index) => (
        <Tabs.Screen
          key={index}
          name={item.name}
          options={{
            title: item.title,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? item.focusTrue : item.focusFalse}
                color={color}
                size={hp(3)}
                family={item.family}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}

export default TabLayout;
