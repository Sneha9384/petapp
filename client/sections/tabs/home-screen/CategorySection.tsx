import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Section } from '@/components/Section'
import { Main } from '@/components/Main'
import { Div } from '@/components/Div'
import { Txt } from '@/components/Txt'
import { Theme } from '@/constants/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import tw from 'twrnc';

const CategorySection = () => {
    
    const categories=[
        { title:'Animals', image:require('@/assets/images/animal.jpg')},
        { title:'Birds', image:require('@/assets/images/birds.jpg') },
        { title:'Fish', image:require('@/assets/images/fish.jpg') },
        { title:'Foods', image:require('@/assets/images/food.jpg') },
        { title:'Products', image:require('@/assets/images/product.jpg') }
        
    ]
    const [showAll,setShowAll]=useState(false);
    const displayedCategories = showAll ? categories : categories.slice(0, 5);
    const theme =Theme();
    const renderItem =({item}:{item:any})=>(
        <Div style={[tw` mr-5  overflow-hidden`]}>
            <Image source={item.image} style={[tw`rounded-full`,{height:hp(7),width:hp(7)}]}  />
            <Txt type="text" style={[{ color: theme.titleColor }, tw`capitalize px-2 py-2 text-center`]}>{item.title}</Txt>
        </Div>
             
    )
  return (
    <Section>
        <Main>
            <Div style={[tw`flex-row justify-between items-center`,{marginBottom:hp(2)}]}>
                <Txt style={[{color:theme.titleColor, fontFamily:'Bold', fontSize:hp(2.2)}]}>Categories</Txt>
                <TouchableOpacity onPress={()=>setShowAll(!showAll)} style={[]}>
                     <Txt type='text' style={[{color:theme.logoColor,fontSize:hp(1.7)}]}>{showAll?'See Less':'See All'}</Txt>
                </TouchableOpacity>
            </Div>  
            <Div style={[{marginTop:hp(2)}]}>
                 <FlatList style={[tw`overflow-visible `]} data={displayedCategories}
                    renderItem={renderItem}
                    keyExtractor={(item)=>item.title}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToAlignment='start'
                    decelerationRate='fast'
                    snapToInterval={wp(24.2)}/>
            </Div>
           
        </Main>
    </Section>
  )
}

export default CategorySection

