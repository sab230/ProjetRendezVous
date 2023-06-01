import { StyleSheet, Text, View } from 'react-native';
import MapView ,{Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import React, { useState, useEffect } from 'react';

export default function Maps() {
 

return (

  <View style={{flex:1,width:300,height:300}}>
  <MapView 
  style={{flex:1}}
  initialRegion={{
    latitude: 17,
    longitude: 17,
    latitudeDelta: 0.0922, //zoom
    longitudeDelta: 0.0421,
  }}
  >
    <Marker 
    coordinate={{
      latitude: 17,
      longitude: 17,
    }}
    title="Votre position"
    />
    
    
  <Maps/>
  </MapView>
  </View>
);  
}