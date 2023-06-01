import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import QrCode from './QrCode';
import Utilisateur from './Utilisateur';
import PriseDeRendezVous from './PriseDeRendezVous';






const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="QrCode" component={QrCode} />
        <Stack.Screen name="Utilisateur" component={Utilisateur} />
        <Stack.Screen name="PriseDeRendezVous" component={PriseDeRendezVous} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
