import { Appearance, Dimensions, FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Section } from '@/components/Section'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Main } from '@/components/Main';
import tw from 'twrnc'
import { Theme } from '@/constants/Theme';
import { Div } from '@/components/Div';

const SearchSection = () =>{
    const theme = Theme();
    const colorScheme = Appearance.getColorScheme(); 
    const shadowStyle = colorScheme === 'dark' ? theme.shadowStyles.dark : theme.shadowStyles.light; 
    const [currentIndex, setCurrentIndex] = useState(0);
    const {width} = Dimensions.get('window')
    
    const onScroll = (event:any) => {
      const offSetX = event.nativeEvent.contentOffset.x;
      const index = Math.round(offSetX/width);
      setCurrentIndex(index);
    }
    
    const AdBox = () => {
      return(
        <Image source={require('@/assets/images/ad picture.jpg')} style={[tw`w-full h-full`,{width:wp(100)}]}/>
      )
    }
   
   
    return (
   
        <Section style={[{marginTop:hp(1)}]}>
         <Main>
            <Div>
              <TextInput placeholder='Search Pets,Food & Products' style={[{backgroundColor:theme.boxBackgroundColor,color:theme.titleColor,padding:hp(1.7),fontFamily:'Regular',fontSize:hp(1.7),marginBottom:hp(2)},shadowStyle,tw`rounded-md tracking-[1px]`]}/>
              <View style={[tw`bg-transparent rounded-xl h-44 relative overflow-hidden`]}>
                <FlatList  
                    data={Array(5).fill({})}
                    renderItem={AdBox}
                    keyExtractor={(item ,index) => index.toString()}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={onScroll}
                    snapToInterval={width}
                    snapToAlignment='center'
                    decelerationRate='fast'
                      />
                 <View className=' absolute w-full justify-center flex-row gap-6 items-center bottom-4' >
                  { Array.from({length:5}).map((_,index)=>(
                    <View key={index} className={`h-2 w-2 rounded-full transition-all ${
                      index === currentIndex ? 'bg-primary' : 'bg-gray-400'
                    }`}/>
                  ))}
                
                 </View>
              </View>
            
              
            </Div>
         </Main>
        </Section>
       )

}
export default SearchSection
   
 
