import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Ios from '../screens/Ios';
import Android from '../screens/Android';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: 'lightgray',
                style: {
                    backgroundColor: '#384053',
                },
                labelStyle: {
                    fontSize: 12,
                }
            }}
        >
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="home" size={26} color={color} />
                    ),
                }}
            />
              <Tab.Screen 
                name="Ios"
                component={Ios}
                options={{
                    tabBarLabel: 'iOS',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="cellphone-iphone" size={26} color={color} />
                    )
                }}
            />

            <Tab.Screen 
                name="Android"
                component={Android}
                options={{
                    tabBarLabel: 'Android',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="android" size={26} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;
