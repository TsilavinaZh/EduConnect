import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from '@ant-design/react-native/lib/icon';
import { Result, WhiteSpace } from '@ant-design/react-native';

const Page500 = () => {
  return (
    <View style={styles.container}>
      <Result
        img={<Icon name="exclamation-circle" color="#f50" size={60} />}
        title="500"
        message="Une erreur interne du serveur est survenue. Nous travaillons à la résoudre."
      />
      <Button title="Retour à l'accueil" onPress={() => console.log('Retour à l\'accueil')} />
      <WhiteSpace size="lg" />
      <Text style={styles.info}>Si le problème persiste, veuillez contacter l'assistance technique.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
});

export default Page500;
