import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Section } from '@/components/Section'
import { Main } from '@/components/Main'
import { Txt } from '@/components/Txt'
import { Div } from '@/components/Div'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import tw from 'twrnc';
import { Theme } from '@/constants/Theme'
import { EvilIcons, Feather } from '@expo/vector-icons'
import { router } from 'expo-router'

const TopSellingSection = () => {
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
      { id:4 , 
        name:'Chicken & Pumpkin' , 
        image:require('@/assets/images/food 4.jpg'),
        rating: 4.8,
        reviews: 2.1,
        price: 28.99,
        
      },
      { id:5 , 
        name:'Chicken & Vegetables' , 
        image:require('@/assets/images/food 5.png'),
        rating: 4.8,
        reviews: 2.1,
        price: 28.99,
        
      }
    ];
    const renderItem =({item}:{item:any})=>(
               <Div style={[tw`mr-3 overflow-hidden rounded-lg`,{backgroundColor:theme.boxBackgroundColor ,width:hp(18)}]}>
                <TouchableOpacity onPress={()=>{router.navigate(`/detail-screen/1?name=${item.name}`)}}>
                  <Image source={item.image} style={[tw`w-full `,{height:hp(15),width:hp(18)}]}  />
                  <View style={[tw`mr-1`]}>
                    <Txt type="text" style={[{ color: theme.titleColor , fontSize:hp(1.6) }, tw`capitalize mb-1 mt-2 text-center`]}>{item.name}</Txt>
                    <View style={[tw`flex-row ml-1  `]}>
                        <EvilIcons name='star' size={hp(2.2)} color={'gold'}/>
                        <View style={[tw`ml-1`]}>
                          <Txt type='para' style={[{fontSize:hp(1.6)}]}>{item.rating} (2.2k)</Txt>
                        </View>
                      </View>
                      </View>
                      </TouchableOpacity> 
                      <View style={[tw`flex-row justify-between items-center ml-2 mb-2  `]}>
                        <Txt type='para' style={[tw``]}>${item.price}</Txt>
                        <TouchableOpacity style={[{backgroundColor:theme.logoColor},tw`rounded-full ml-10 `]}>
                          <Feather name='plus-circle' size={hp(3)}  />
                        </TouchableOpacity>
                      </View>
                     
                  
                  

                  
                 
              </Div>
            
           
  )
   
           
  
    const theme =Theme();
  return (
    <Section>
        <Main>
            <Div>
                <Txt style={[{color:theme.titleColor, fontFamily:'Bold', fontSize:hp(2.2)}]}>Top Selling</Txt>
            </Div>
            <Div style={[{marginTop:hp(2)}]}>
              <FlatList style={[tw`overflow-visible`]}
              renderItem={renderItem}
              horizontal
              data={topselling}
              keyExtractor={(item) => item.id.toString()}
              showsHorizontalScrollIndicator={false}
            />
            </Div>
            
        </Main>
    </Section>
  )
}

export default TopSellingSection