import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Favorities } from '../componets/favorities/Favorities';

const stytles = StyleSheet.create({
  flex: {
    flex: 1,
  }
});

const FavoriteScreen = () => (<Favorities />)

export { FavoriteScreen };
