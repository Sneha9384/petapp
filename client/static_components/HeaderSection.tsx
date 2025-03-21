import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Theme } from '@/constants/Theme'
import { Section } from '@/components/Section';
import { Main } from '@/components/Main';
import { useNavigation } from 'expo-router';
import { Div } from '@/components/Div';
import { FontAwesome6, Octicons } from '@expo/vector-icons';
import tw from 'twrnc';
import { Txt } from '@/components/Txt'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { DrawerActions } from '@react-navigation/native';
const HeaderSection = () => {
    const theme = Theme();
    const navigation = useNavigation()
  return (
    <Section>
        <Main>
        <Div style={[tw`flex flex-row justify-between  items-center rounded-xl`]}>
            <TouchableOpacity>
                <FontAwesome6 name='bars' color={theme.titleColor} size={hp(2.6)} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
            </TouchableOpacity>
            <Txt style={[tw`capitalize`, { color: theme.titleColor, fontFamily: 'Black', fontSize: hp(3) }]}>PawMart</Txt>
            <TouchableOpacity>
                <Octicons name='bell' color={theme.titleColor} size={hp(2.6)} />
            </TouchableOpacity>
        </Div>
        </Main>
    </Section>
  )
}

export default HeaderSection