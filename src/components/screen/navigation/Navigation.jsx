import {createNativeStackNavigator} from "@react-navigation/native-stack";
import DetailScreen from "../DetailScreen";
import HomeScreen from "../HomeScreen";

const Stack = createNativeStackNavigator();

export const Navigation=()=>{

    return(
        <Stack.Navigator
        
        screenOptions={{
            headerShown: false,
        }}
        
        >
            <Stack.Screen name= "HomeScreen" component={HomeScreen}/>
            <Stack.Screen name= "DetailScreen" component={DetailScreen}/>
        </Stack.Navigator>
    )
}