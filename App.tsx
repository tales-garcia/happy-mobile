import React from 'react';

import { useFonts } from '@expo-google-fonts/nunito';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import Routes from './src/routes';

export interface Orphanage {
  id: number,
  name: string,
  description: string,
  latitude: number,
  longitude: number,
  instructions: string,
  open_hours: string,
  open_on_weekends: string,
  images: {
    id: number,
    url: string
  }[]
}

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  });

  if(!fontsLoaded)
    return null;

  return (
    <Routes />
  );
}