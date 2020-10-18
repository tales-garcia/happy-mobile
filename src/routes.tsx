import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Map from './pages/Map';
import Orphanage from './pages/Orphanage';
import Form from './pages/CreateOrpanage/Form';
import SelectPosition from './pages/CreateOrpanage/SelectPosition';

const { Navigator, Screen } = createStackNavigator();

export default function Routes () {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown: false
            }}>
                <Screen name="Map" component={Map} />
                <Screen name="Orphanage" component={Orphanage} />
                <Screen name="SelectPosition" component={SelectPosition} />
                <Screen name="Form" component={Form} />
            </Navigator>
        </NavigationContainer>
    )
}