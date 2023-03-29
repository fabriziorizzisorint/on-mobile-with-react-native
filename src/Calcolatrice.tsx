import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import CustomButton from './components/CustomButton';

function Calcolatrice() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [sum, setSum] = useState(0);

  const somma = () => {
    setSum(numero1 + numero2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titolo}>Calcolatrice</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        onChangeText={text => setNumero1(Number(text))}
      />
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        onChangeText={text => setNumero2(Number(text))}
      />
      <CustomButton label="Somma" bgColor="#ddd" onPress={somma} />
      {sum > 0 && <Text style={styles.sum}>La somma è: {sum}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  titolo: {
    fontSize: 32,
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    width: 200,
    marginBottom: 10,
  },
  sum: {
    marginTop: 20,
  },
});

export default Calcolatrice;
