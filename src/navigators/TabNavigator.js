import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens';
import ContactScreen from '../screens/contacts/ContactScreen';
import User from '../screens/user/UserScreen'

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Contact" component={ContactScreen} />
            <Tab.Screen name="User" component={User} />
        </Tab.Navigator>
    );
}

export default TabNavigator