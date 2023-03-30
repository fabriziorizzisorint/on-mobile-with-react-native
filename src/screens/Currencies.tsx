import React, {useState} from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import {ratesPage1, ratesPage2} from '../data/currencies';

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

  return (
    <FlatList
      data={data}
      refreshing={loading}
      renderItem={data =>
        Currency({label: data.item.label, value: data.item.value})
      }
      onEndReached={onEndReached}
    />
  );
}

function Currency({label, value}: any) {
  return (
    <View style={styles.itemContainer}>
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
    height: 150,
  },
});
