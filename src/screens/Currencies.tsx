import React, {useState} from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import {newRatesPage1, ratesPage1, ratesPage2} from '../data/currencies';

export default function CurrenciesScreen() {
  const [data, setData] = useState(ratesPage1);
  const [loading, setLoading] = useState(false);

  const onEndReached = () => {
    setLoading(true);
    setTimeout(() => {
      setData(data => [...data, ...ratesPage2]);
      setLoading(false);
    }, 2000);
  };

  const onRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setData(newRatesPage1);
      setLoading(false);
    }, 2000);
  };

  return (
    <FlatList
      data={data}
      onRefresh={onRefresh}
      refreshing={loading}
      renderItem={({item, index}) => (
        <Currency label={item.label} value={item.value} odd={index % 2 === 0} />
      )}
      onEndReached={onEndReached}
    />
  );
}

function Currency({label, value, odd}: any) {
  return (
    <View
      style={[styles.itemContainer, {backgroundColor: odd ? '#ddd' : '#aaa'}]}>
      <Text>{label}</Text>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
    height: 100,
    borderWidth: 1,
    margin: 20,
    borderColor: '#888',
    borderRadius: 10,
    alignItems: 'center',
  },
});
