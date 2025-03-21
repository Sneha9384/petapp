import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { Section } from '@/components/Section'
import { Main } from '@/components/Main'
import { Div } from '@/components/Div'
import { Txt } from '@/components/Txt'
import { router, useRouter } from 'expo-router'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import tw from 'twrnc';
import DetailSection from '@/sections/tabs/home-screen/DetailSection'
import SafeAreaMain from '@/components/SafeAreaMain'
import { Theme } from '@/constants/Theme'

const index = () => {
  const theme =Theme()
  return (
    <SafeAreaMain>
        <ScrollView>
          <Section>
            <Main>
               <DetailSection/>
            </Main>
          </Section>
        
          
        </ScrollView>
        {/* <TouchableOpacity style={[tw`border w-full rounded-lg`,{width:hp(30),height:hp(5),backgroundColor:theme.logoColor}]}>
          <Txt type='text' style={[{color:theme.textInvertColor},tw`justify-center text-center`]}>Add to Cart</Txt>
        
        </TouchableOpacity> */}
          <View style={[tw` w-full p-4 bottom-22`]}>
            <TouchableOpacity onPress={() => router.push('/(stack)/cart-screen/cart')}  style={[tw` py-3 rounded-3xl`,{backgroundColor:theme.logoColor}]}>
              <Txt type='default' style={[tw`text-center`,{fontSize:hp(2),color:theme.textInvertColor}]}>Add to Cart</Txt>
            </TouchableOpacity>
      </View>
         
    </SafeAreaMain>
    
  )
}

export default index