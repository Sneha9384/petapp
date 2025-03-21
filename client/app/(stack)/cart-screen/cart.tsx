import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Section } from '@/components/Section'
import { Main } from '@/components/Main'
import { Div } from '@/components/Div'
import { Txt } from '@/components/Txt'
import SafeAreaMain from '@/components/SafeAreaMain'
import CartSection from '@/sections/tabs/home-screen/CartSection'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import tw from 'twrnc';
import { Theme } from '@/constants/Theme'

const cart = () => {
    const theme = Theme();
  return (
    <SafeAreaMain>
    <ScrollView>
       <CartSection/>
    </ScrollView>
        <Div style={[tw` w-full p-4 `,{marginBottom: hp(12)}]}>
        <TouchableOpacity  style={[tw` py-3 rounded-3xl`,{backgroundColor:theme.logoColor}]}>
             <Txt type='default' style={[tw`text-center`,{fontSize:hp(2),color:theme.textInvertColor}]}>CheckOut</Txt>
        </TouchableOpacity>
       </Div>
     
  </SafeAreaMain>
  )
}

export default cart