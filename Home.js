import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
import QrCode from './QrCode';
import { NavigationContainer } from '@react-navigation/native';


const Separator = () => <View style={styles.separator} />;

const Home = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <View>
      <Button
        title="QR CODE"
        color="#6E2726"
        onPress={() => navigation.navigate('QrCode')}
        // navigate to 'QrCode' screen
      />
    </View>
    <Separator />
    <View>
      <Button styles= {styles.Button}
        title="UTILISATEUR"
        color="#3D2640"
        onPress={() => navigation.navigate('Utilisateur')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="PRISE DE RENDEZ-VOUS"
        color="#9C4544"
        onPress={() => navigation.navigate('PriseDeRendezVous')}
      />
    </View>
    <Separator />
   
    <View>
      <View style={styles.fixToText}></View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  Button: {
    color: 'black',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'black',
    },
});

export default Home;
