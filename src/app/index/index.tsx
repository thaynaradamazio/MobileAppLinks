import { Text, View } from "react-native";

import { styles } from "./styles";

export default function Index() 
{
    return(
        <View style = {styles.container}>
        <Text style = {styles.title}>Hello</Text>
        <Text style = {styles.title}>World</Text>
        <Text>My app</Text>
        </View>
    )
}

