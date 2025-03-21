import { Colors } from "./Colors";
import { useThemeColor } from "@/hooks/useThemeColor";

export const Theme = () =>{
    const backgroundColor = useThemeColor(
        {light:Colors.light.primaryColor, dark:Colors.dark.primaryColor},
        'primaryColor'
    )
    const boxBackgroundColor = useThemeColor(
        {light:Colors.light.secondaryColor, dark:Colors.dark.secondaryColor},
        'secondaryColor'
    )
    const primaryColor = useThemeColor(
        {light:Colors.light.primaryColor, dark:Colors.dark.primaryColor},
        'primaryColor'
    )
    const secondaryColor = useThemeColor(
        {light:Colors.light.secondaryColor, dark:Colors.dark.secondaryColor},
        'secondaryColor'
    )
    const tertiaryColor = useThemeColor(
        {light:Colors.light.tertiaryColor, dark:Colors.dark.tertiaryColor},
        'tertiaryColor'
    )
    const quaternaryColor = useThemeColor(
        {light:Colors.light.quaternaryColor, dark:Colors.dark.quaternaryColor},
        'quaternaryColor'
    )
    const logoColor = useThemeColor(
        {light:Colors.light.tertiaryColor,dark:Colors.dark.tertiaryColor},
        'tertiaryColor'
    )
    const titleColor = useThemeColor(
        {light:Colors.light.titleColor, dark:Colors.dark.titleColor},
        'titleColor'
    )
    const paraColor = useThemeColor(
        {light:Colors.light.textColor, dark:Colors.dark.textColor},
        'textColor'
    )
    const textInvertColor = useThemeColor(
        {light:Colors.light.quaternaryColor, dark:Colors.dark.quaternaryColor},
        'quaternaryColor'
    )

    const shadowStyles = {
        light: {
          shadowColor: '#959DA5', 
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.15,
          shadowRadius: 12,
          elevation: 8, 
        },
        dark: {
          shadowColor: '#070808', 
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 12,
          elevation: 8, 
        },
      };
      


    return {backgroundColor,boxBackgroundColor,primaryColor, secondaryColor, tertiaryColor, quaternaryColor, logoColor, titleColor, paraColor,textInvertColor,shadowStyles}
}