import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Utilisateur = () => {
  const [utilisateur, setUtilisateur] = useState(null);

  useEffect(() => {
    fetchUtilisateur();
  }, []);

  const fetchUtilisateur = async () => {
    const response = await fetch('http:10.74.1.73:3000/user');
    setUtilisateur(response.data);
  };


  return (
    <View style={styles.container}>
      {utilisateur && (
        <View>
          <Text style={styles.text}>Utilisateur</Text>
          <Text style={styles.text}>
            Nom: {utilisateur.id} 
          </Text>
          <Text style={styles.text}>Email: {utilisateur.email}</Text>
        </View>
      )}
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#D48AF7',
  },
});

export default Utilisateur;
