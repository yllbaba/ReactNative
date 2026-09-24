import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { IosStackNavigator } from './StackNavigator';
import BottomTabNavigator from './TabNavigator'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={BottomTabNavigator}/>
            <Drawer.Screen name="Ios" component={IosStackNavigator}/>
        </Drawer.Navigator>
    );
}

export default DrawerNavigator; 