import { DarkTheme, DefaultTheme, ThemeProvider, useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Platform, TouchableOpacity } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { Theme } from '@/constants/Theme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = Theme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
   
  const BackBtn = () => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity onPress={() => navigation.goBack()} >
        <Ionicons name="chevron-back-outline" size={hp(3)} color={theme.logoColor} />
      </TouchableOpacity>
    );
  };
  const stackItems = [
    {
      name:'(stack)/detail-screen/[id]/index',
      title:'Detail'
    },
    {
      name:'(stack)/profile-screen/index',
      title:'Profile' 
    },
    {
      name:'(stack)/cart-screen/cart',
      title:'Cart'
    }
   
   
  ]
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(drawer)" options={{ headerShown: false,title:'' }} />
        {stackItems.map((item,index)=>(
          <Stack.Screen
          key={index}
          name={item.name}
          
          options={{
            title:item.title,
            headerStyle: { backgroundColor: theme.backgroundColor},
            headerTitleStyle: { fontFamily: 'Black', fontSize: hp(3) },
            headerTitleAlign: 'center',
                            
            headerTintColor:theme.titleColor,
            headerLeft: () => <BackBtn/>,
           
          }}
          />
          
        ))}
        
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style='auto'/>
    </ThemeProvider>
  );
}
