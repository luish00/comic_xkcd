import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const stytles = StyleSheet.create({
  flex: {
    flex: 1,
  }
});

const FavoriteScreen = () => {
  return (
    <View style={stytles.flex}>
      <Text>Favorite</Text>
    </View>
  );
}

export { FavoriteScreen };
