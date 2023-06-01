import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Platform } from 'react-native';
import * as Calendar from 'expo-calendar';

// import 

const App = () => {

  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

// state de titre, date de début et date de fin

  useEffect(() => {
    (async () => {
        const { status } = await Calendar.requestCalendarPermissionsAsync();
        if (status === 'granted') {
            const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
            console.log('Here are all your calendars:');
            console.log({ calendars });
        }
    })();
  }, []);

// useEffect pour demander la permission d'accéder au calendrier

  //fontion pour créer l'événement
  const createEvenement = async () => {
    try {
        const defaultCalendar = await Calendar.getDefaultCalendarAsync();
        await Calendar.createEventAsync(defaultCalendar.id, {
            title,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            timeZone: 'GMT',
        });
        Alert.alert('Succès', 'L\'événement a été ajouté au calendrier');
    } catch (error) {
        Alert.alert('Erreur', 'L\'événement n\'a pas pu être ajouté');
    }
};


  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Nom de l'évenement </Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Nom de l'évènement"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        onChangeText={setTitle}
      />
      <Text style={styles.text}>Date de début</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Date de début"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        onChangeText={setStartDate}
      />
      <Text style={styles.text}>Date de fin</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Date de fin"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        onChangeText={setEndDate}
      />
      <Button title="Créer l'événement" onPress={createEvenement} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
    
  },
  titre: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,

  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'pink',
    borderWidth: 3,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },
});

export default App;
