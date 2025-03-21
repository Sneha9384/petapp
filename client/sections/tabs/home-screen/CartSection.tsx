import { View, Text, TouchableOpacity, Image, FlatList, TextInput } from 'react-native'
import React from 'react'
import { Txt } from '@/components/Txt'
import { Section } from '@/components/Section'
import { Main } from '@/components/Main'
import { Div } from '@/components/Div'
import { Theme } from '@/constants/Theme'
import { AntDesign, EvilIcons, Feather } from '@expo/vector-icons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import tw from 'twrnc';

const CartSection = () => {
  const topselling=[
    {
       id:1 ,
       name:'Chicken & Milk recipe' ,
       image:require('@/assets/images/food 1.jpg') , 
       rating: 4.8,
       reviews: 2.2,
       price: 28.99,
       
    },
    { id:2 ,
      name:'Beef & Chicken Flavors' , 
      image:require('@/assets/images/food 2.png'),
      rating: 4.8,
      reviews: 2.1,
      price: 28.99,
     
    },
    { id:3 , 
      name:'Chicken & Carrot Recipe' , 
      image:require('@/assets/images/food 3.jpg'),
      rating: 4.8,
      reviews: 2.1,
      price: 28.99,
      
    },
    
  ];
 
          
         

 
         

  const theme =Theme();
  return (
      <Section>
          <Main>
            <Div style={[tw`mb-4`]}>
              <Txt type='subTitle' style={[tw`top-7`,{fontSize:hp(2.4)}]}>Cart List</Txt>
              <TouchableOpacity style={[tw`flex-row  mb-4 gap-2`,{marginLeft:hp(32)}]}>

                  <Feather name='trash-2' size={hp(2.2)} color={theme.textInvertColor} style={[tw`px-2 py-2 border rounded-full`,{borderColor:theme.boxBackgroundColor}]}/>
                  <AntDesign name='sharealt' size={hp(2.2)} color={theme.textInvertColor} style={[tw`px-2 py-2 border rounded-full`,{borderColor:theme.boxBackgroundColor}]}/>
              </TouchableOpacity>
               
            </Div>
            <Div style={[tw`gap-3`]}>
              {topselling.map((item)=>(
                 <TouchableOpacity
                 key={item.id}
                 style={[tw` border rounded-lg flex flex-row items-center`,{borderColor:theme.boxBackgroundColor,padding:hp(3)}]}
               >
                 <Image source={item.image} style={tw`w-24 h-24 rounded-lg`} />
                 <View style={tw`ml-4`}>
                   <Txt type="text" style={[tw``,{fontSize:hp(2)}]}>{item.name}</Txt>
                   <View style={[tw`flex-row ml-1 mt-2  `]}>
                        <EvilIcons name='star' size={hp(2.2)} color={'gold'}/>
                        <View style={[tw`ml-1`]}>
                          <Txt type='para' style={[{fontSize:hp(1.6)}]}>{item.rating} (2.2k)</Txt>
                        </View>
                      </View>
                      <View style={[tw`flex-row  justify-between items-center ml-2 mb-2 `]}>
                   <Txt type='para' style={[tw`mt-2`,{fontSize:hp(1.6)}]}>$28.99</Txt>
                   <Txt type='para' style={[tw`ml-10 top-1`]}> -- 1</Txt>
                   <TouchableOpacity style={[{backgroundColor:theme.logoColor},tw`rounded-full ml-5 top-1 `]}>
                     <Feather name='plus-circle' size={hp(3)}  />
                   </TouchableOpacity>
                 </View>
                 </View>
                 
               </TouchableOpacity>
                  
                

              ))}
              
           
            </Div>
            <Div style={[tw`flex-row`]}>
                 <TouchableOpacity style={[tw`flex-row px-7 py-3 mt-3  border rounded-3xl`,{borderColor:theme.boxBackgroundColor}]}>
                  <Feather name='percent' size={hp(1)} color={theme.paraColor} style={[tw`px-1 py-1 rounded-full border`,{borderColor:theme.boxBackgroundColor}]}/>
                  <Txt type='text' style={[tw``,{marginLeft:hp(1)}]}>Enter Your Promo Code</Txt>
                </TouchableOpacity>
                <TouchableOpacity style={[tw` px-5 py-2 border mt-3 rounded-full`,{marginLeft:hp(2),backgroundColor: theme.logoColor}]}>
                    <Txt type='text' style={[tw`justify-center text-center`,{color:theme.textInvertColor}]}>Apply</Txt>
                  </TouchableOpacity>
              
                
        
              
            </Div>
            
            
          </Main>

      </Section>
  )
}

export default CartSection