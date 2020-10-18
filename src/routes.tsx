import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Map from './pages/Map';
import Orphanage from './pages/Orphanage';
import Form from './pages/CreateOrpanage/Form';
import SelectPosition from './pages/CreateOrpanage/SelectPosition';
import Header from './components/Header';

const { Navigator, Screen } = createStackNavigator();

export default function Routes () {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: '#f2f3f5'
                }
            }}>
                <Screen name="Map" component={Map} />

                <Screen
                options={{
                    headerShown: true,
                    header: () => <Header showX={false} title="Detalhes do orfanato" />
                }}
                name="Orphanage"
                component={Orphanage} />

                <Screen
                options={{
                    headerShown: true,
                    header: () => <Header title="Selecione uma localização no mapa" />
                }}
                name="SelectPosition"
                component={SelectPosition} />

                <Screen
                options={{
                    headerShown: true,
                    header: () => <Header title="Preencha com as informações de seu orfanato" />
                }}
                name="Form"
                component={Form} />

            </Navigator>
        </NavigationContainer>
    )
}