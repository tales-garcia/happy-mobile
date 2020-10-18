import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import mapMarkerImg from '../../images/mapMarker.png';

export default function SelectMapPosition() {
  const navigation = useNavigation();

  const [selectedPosition, setSelectedPosition] = useState<{latitude: number, longitude: number}>({
    latitude: 0,
    longitude: 0
  });

  function handleNextStep() {
    navigation.navigate('Form', { selectedPosition });
  }

  return (
    <View style={styles.container}>
      <MapView 
        initialRegion={{
          latitude: -15.7880996,
          longitude: -47.8941658,
          latitudeDelta: 0.035,
          longitudeDelta: 0.035
        }}
        provider={PROVIDER_GOOGLE}
        onPress={ev => {
          setSelectedPosition(ev.nativeEvent.coordinate);
        }}
        style={styles.mapStyle}
      >
        {(selectedPosition.latitude !== 0) &&
          (<Marker 
          icon={mapMarkerImg}
          coordinate={{ latitude: selectedPosition.latitude, longitude: selectedPosition.longitude }}
        />)}
      </MapView>

      <RectButton style={styles.nextButton} onPress={handleNextStep}>
        <Text style={styles.nextButtonText}>Próximo</Text>
      </RectButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },

  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,

    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 40,
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  }
})