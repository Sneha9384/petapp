import React from 'react';
import {  ScrollView } from 'react-native';
import { Theme } from '@/constants/Theme';
import SafeAreaMain from '@/components/SafeAreaMain';
import SearchSection from '@/sections/tabs/home-screen/SearchSection';
import CategorySection from '@/sections/tabs/home-screen/CategorySection';
import TopSellingSection from '@/sections/tabs/home-screen/TopSellingSection';



const HomeScreen = () => {
  const theme = Theme();
  
  return (
    <SafeAreaMain>
      <ScrollView>
         <SearchSection/>
         <CategorySection/>
         <TopSellingSection/>
      </ScrollView>
    </SafeAreaMain>
  );
};

export default HomeScreen;
