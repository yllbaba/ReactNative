import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Ios from '../screens/Ios';
import Android from '../screens/Android';
import Single from '../screens/Single';
import BottomTabNavigator from './TabNavigator'



const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: '#384053',
    },
    headerTintColor: "white",
}


const MainStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={BottomTabNavigator} />
            <Stack.Screen name="iOS" component={Ios} />
            <Stack.Screen name="Android" component={Android} />
            <Stack.Screen name="Single" component={Single} />
        </Stack.Navigator>
    );
}
export default MainStackNavigator;