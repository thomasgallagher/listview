import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function ListView() {
  const data = [
    { key: 'Devin' },
    { key: 'Dan' },
    { key: 'Dominic' },
    { key: 'Jackson' },
    { key: 'James' },
    { key: 'Joel' },
    { key: 'John' },
    { key: 'Jillian' },
    { key: 'Jimmy' },
    { key: 'Julie' },
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 11
  },
  item: {
    color: '#ffffff',
    height: 44,
    fontSize: 18,
    padding: 10
  },
});
