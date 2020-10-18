import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { Dimensions, StyleSheet } from 'react-native';

import mapMarker from '../images/mapMarker.png';
import { useNavigation } from '@react-navigation/native';

export default function Map() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
                latitude: -15.7880996,
                longitude: -47.8941658,
                latitudeDelta: 0.035,
                longitudeDelta: 0.035
            }} >
                <Marker
                calloutAnchor={{ x: 2.7, y: 0.8 }}
                icon={mapMarker}
                coordinate={{
                latitude: -15.7880996,
                longitude: -47.8941658
                }} >
                <Callout tooltip onPress={() => navigation.navigate('Orphanage')} >
                    <View style={styles.calloutContainer} >
                    <Text style={styles.calloutText} >Lar dos cabeçudos</Text>
                    </View>
                </Callout>
                </Marker>
            </MapView>


            <View style={styles.footer}>
                <Text style={styles.footerText}>2 orfanatos encontrados</Text>

                <TouchableOpacity style={styles.createOrphanageButton} onPress={() => {}}>
                <Feather name="plus" size={20}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
  
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  
    calloutContainer: {
      width: 160,
      height: 46,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 16,
      justifyContent: 'center',
    },
    calloutText: {
      color: '#0089a5',
      fontSize: 14,
  
      fontFamily: 'Nunito_700Bold'
    },
  
    footer: {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 32,
  
      backgroundColor: '#fff',
      borderRadius: 20,
      height: 56,
      paddingLeft: 24,
  
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  
      elevation: 6
    },
  
    footerText: {
      color: '#8fa7b3',
      fontFamily: 'Nunito_700Bold'
    },
  
    createOrphanageButton: {
      width: 56,
      height: 56,
      backgroundColor: '#15c3d6',
      borderRadius: 20,
  
      justifyContent: 'center',
      alignItems: 'center'
    },
  
  
  });
  