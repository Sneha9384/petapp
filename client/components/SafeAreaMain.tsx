import { Theme } from "@/constants/Theme";
import React, { ReactNode } from "react";
import { SafeAreaView as IosView, Platform } from "react-native";
import { SafeAreaView as AndroidView } from "react-native-safe-area-context";


interface SafeAreaMainProp{
    children:ReactNode
}
const SafeAreaMain = ({children}:SafeAreaMainProp) =>{
    const theme = Theme()
    const SafeAreaView = Platform.OS === "ios" ? IosView : IosView; // if required use AndroidView for android
    return(
        <SafeAreaView style={[{backgroundColor:theme.backgroundColor,flex:1}]}>{children}</SafeAreaView>
    )
}

export default SafeAreaMain