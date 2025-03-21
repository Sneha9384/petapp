import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Section } from '@/components/Section'
import { Main } from '@/components/Main'
import { Div } from '@/components/Div'
import { Txt } from '@/components/Txt'
import { router, useLocalSearchParams } from 'expo-router'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import tw from 'twrnc';
import { AntDesign, Entypo, Feather, FontAwesome } from '@expo/vector-icons'
import { Theme } from '@/constants/Theme'
import SafeAreaMain from '@/components/SafeAreaMain'

const flavors = [
  "Chicken & Green Pea",
  "Duck & Green Pea",
  "Salmon & Green Pea",
  "Turkey & PeaChickpeas",
];
const sizes = [2, 4, 6, 8, 10, 15];

const DetailSection = () => {
   const theme = Theme()
   const [selectedFlavor, setSelectedFlavor] = useState(flavors[0]);
   const [selectedSize, setSelectedSize] = useState<number | null>(null);
  return (
    
            <Section>
        <Main>
          <Div style={[tw`flex-row `,{marginLeft:hp(30)}]}>
              <Feather name='heart' size={hp(2.5)} color={'white'}/>
              <FontAwesome name='share' color={'white'} size={hp(2.5)} style={[tw`left-6`]}/>
          </Div>
          <Div style={[tw`mr-2 justify-center mt-2 items-center`]}>
                <Image style={[tw`rounded-3xl `,{width:hp(31),height:hp(29)}]} source={require('@/assets/images/food 1.jpg')}/>
          </Div> 
          <Div style={[tw`mt-7`]}>
            <View>
              <Txt type='subTitle' style={[{fontFamily:'Bold',fontSize:hp(2.5)}]}>Chicken & Milk Recipe</Txt>
            </View>
            <View style={[tw`flex-row mt-2`]}>
               <Txt type='text'>By</Txt>
               <Txt type='text' style={[tw`left-1`,{color:theme.logoColor}]}>Pedigree</Txt>
               <Entypo name='dot-single' size={hp(1.2)} color={'gray'} style={[tw`mt-2`,{marginLeft:hp(4)}]}/>
               <Feather name='star' size={hp(1.6)} color={'orange'} style={[tw``,{marginLeft:hp(4)}]}/>
                <Txt type='text' style={[tw`left-1 `,{fontSize:hp(1.8)}]}>4.8 (2.2k)</Txt>
            </View>
            <View style={[tw`flex-row mt-4`]}>
              <Txt type='subTitle'>$28.99</Txt>
              <Txt type='subTitle' style={[{marginLeft:hp(24)}]}> -- 1</Txt>
              <TouchableOpacity style={[{backgroundColor:theme.logoColor},tw`rounded-full  ml-5 `]}>
                    <Feather name='plus-circle' size={hp(3)}  />
              </TouchableOpacity>

            </View>
          </Div>
          <Div style={[tw`mt-10`]}>
            <View style={[tw``]}>
              <Txt type='title' style={[{fontSize:hp(2)}]}>Flavour</Txt>
            </View>
            <View style={[tw`flex-row flex-wrap gap-3 mt-2`]}>
              {flavors.map((flavors)=>(
                <TouchableOpacity key={flavors} style={[tw`px-3 py-2 border rounded-lg`,{borderColor:theme.boxBackgroundColor}]}
                onPress={() => setSelectedFlavor(flavors)}
    >
                 <Txt type='text' style={[tw``,{fontSize:hp(1.5)}]} className={selectedFlavor === flavors ? "text-white" : "text-gray-600" }>
                  {flavors}
                </Txt>
                </TouchableOpacity>
              ))}
            </View>
            
          </Div>
          <Div style={[tw`mt-7`]}>
            <View>
              <Txt type='title'>Size in Pound</Txt>
            </View>
            <View style={[tw`flex-row flex-wrap gap-2`]}>
            {sizes.map((size) => (
          <TouchableOpacity
            key={size}
            style={[tw` flex items-center justify-center rounded-full border mt-2 `,{width:hp(7),height:hp(7),borderColor:theme.boxBackgroundColor}]}
            onPress={() => setSelectedSize(size)}
          >
            <Txt type='text' style={[tw``,{fontSize:hp(1.5)}]} className={selectedSize === size ? "text-white" : "text-gray-600"}>
              {size}
            </Txt>
          </TouchableOpacity>
        ))}
             {/* <TouchableOpacity style={[tw`p-1 px-2 mt-1 mb-2 rounded-md`,{backgroundColor:theme.logoColor,marginLeft:hp(22)}]}>
                   <Txt type='title' style={[{color:theme.textInvertColor,fontSize:hp(1.6)}]}>Applied</Txt>
             </TouchableOpacity> */}
             
            </View>
          </Div>
          
           
        </Main>
        
    </Section>
   
          
          
    
    
  

   
  )
 
}

export default DetailSection