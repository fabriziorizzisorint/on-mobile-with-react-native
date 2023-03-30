import React, {useState} from 'react';
import {ScrollView, Text, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {ratesPage1} from '../data/currencies';
import CustomButton from '../components/CustomButton';

export default function CurrenciesScreen() {
  const [amount, setAmount] = useState();
  const [convertFrom, setConvertFrom] = useState('EUR');
  const [convertTo, setConvertTo] = useState('THB');
  const [result, setResult] = useState(0);

  const convert = () => {
    console.log(convertFrom, convertTo);
    const valueFrom = ratesPage1.find(
      rate => rate.currency === convertFrom,
    )!.value;
    const valueTo = ratesPage1.find(rate => rate.currency === convertTo)!.value;
    setResult((valueTo * amount!) / valueFrom);
  };

  return (
    <ScrollView style={{padding: 20}}>
      <Text>Convert From:</Text>
      <Picker
        selectedValue={convertFrom}
        onValueChange={value => setConvertFrom(value)}>
        {ratesPage1.map(rate => (
          <Picker.Item
            key={rate.currency}
            label={rate.label}
            value={rate.currency}
          />
        ))}
      </Picker>
      <Text>Convert To:</Text>
      <Picker
        selectedValue={convertTo}
        onValueChange={value => setConvertTo(value)}>
        {ratesPage1.map(rate => (
          <Picker.Item
            key={rate.currency}
            label={rate.label}
            value={rate.currency}
          />
        ))}
      </Picker>
      <Text>Amount:</Text>
      <TextInput
        value={amount}
        keyboardType="numeric"
        onChangeText={(value: any) => setAmount(value)}
      />
      <CustomButton label="Convert" onPress={convert} />
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: 20,
        }}>{`${amount} ${convertFrom} corrispondono a ${result} ${convertTo}`}</Text>
    </ScrollView>
  );
}
