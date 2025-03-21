import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo, Feather, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';
interface TabBarIconProps {
    name:string;
    color:string;
    size?:number;
    family?:'Ionicons' | 'FontAwesome' | 'MaterialIcons' | 'Octicons' | 'Feather' | 'Entypo' | 'MaterialCommunityIcons';
    style?: any;
}
export default function TabBarIcon({
    name,
    color,
    size = 28,
    family = 'Ionicons',
    style,
}: TabBarIconProps){
    const IconComponent = family === 'FontAwesome' ? FontAwesome :
    family === 'MaterialIcons' ? MaterialIcons :
    family === 'Octicons' ? Octicons :
    family === 'Feather' ? Feather :
    family === 'Entypo' ? Entypo :
    family === 'MaterialCommunityIcons' ? MaterialCommunityIcons :
    Ionicons;
    return <IconComponent name={name} color={color} size={size} style={[{},style]} />;
}
 




