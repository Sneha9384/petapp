import { Image, Platform, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Theme } from '@/constants/Theme';
import { FontAwesome6, Octicons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native'; 
import { Link, router, usePathname } from 'expo-router';
import tw from 'twrnc'
import { Div } from '@/components/Div';
import { Txt } from '@/components/Txt';

const DrawerLayout = () => {
    const navigation = useNavigation(); 

    const drawerItems = [
        {
            name:'profile',
            path:'/profile-screen'
        }
       
    ]

    const CustomDrawer = ({ props }: any) => {
        const currentPath = usePathname()
        return (
             <DrawerContentScrollView {...props} contentContainerStyle={tw`p-4 h-full`}>
                <Div>
                    <Div style={[tw`flex-row items-center justify-between mb-4 gap-3 p-4`,{marginTop:hp(4)}]}>
                        <Div style={[{},tw`w-20 h-20 relative`]}>
                            <Image source={require('@/assets/images/profile.jpg')} style={[{},tw`w-full h-full absolute rounded-full `]}/>
                            <Txt type='text' style={[tw``,{fontSize:hp(1.8),marginRight:hp(8)}]}>James Martin</Txt>
                        </Div>
                    </Div>
                </Div>
            </DrawerContentScrollView>
        );
    };

    const theme = Theme();
    return (
        <Drawer
            screenOptions={{
                headerTitle: 'PawMart',
                //headerShown:false,
                headerStyle: { 
                    backgroundColor: theme.backgroundColor, 
                    height: Platform.OS ==='android'?hp(10):hp(11),
                    elevation: 0, 
                    shadowColor: 'transparent',
                },
                headerTitleStyle: { fontFamily: 'Black', fontSize: hp(3) },
                headerTitleAlign: 'center',
                headerTintColor: theme.titleColor,
                headerLeft: () => (
                    <TouchableOpacity>
                        <FontAwesome6
                        name='bars'
                        size={hp(2.5)}
                        color={theme.titleColor}
                        style={{ marginLeft: wp(4.5) }}
                        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                        />
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity>
                        <Octicons
                            name='bell'
                            size={hp(2.5)}
                            color={theme.titleColor}
                            style={{ marginRight: wp(4.5) }}
                            onPress={() => console.log('Bell 1 clicked')}
                        />
                    </TouchableOpacity>
                ),
            }}
            drawerContent={(props) => <CustomDrawer {...props} />}
        />
    );
};

export default DrawerLayout;
