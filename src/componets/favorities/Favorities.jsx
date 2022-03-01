import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  FlatList,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

import { getFavorities, removeFavority } from '../../utils/storage';
import { FavoriteItem } from './FavoriteItem';

import styles from './Favorities.styles';

const FavoriteEnpty = () => (
  <View style={styles.noFavorities}>
    <Text>No favorities</Text>
  </View>
);

const keyExtractor = (item) => (item?.page || 0);

const Favorities = () => {
  const [favorities, setFavorities] = useState([]);

  const loadFavorities = useCallback(async () => {
    const lastFavorities = await getFavorities();
    setFavorities(lastFavorities);
  }, []);

  useEffect(() => {
    loadFavorities();
  }, []);

  const onRemoveItem = useCallback((item) => {
    const { page } = item;

    setFavorities((prev) => prev.filter((fav) => fav.page !== page));
    removeFavority(page);
  }, [])

  const renderItem = useCallback(({ item }) => (
    <FavoriteItem item={item} onPress={onRemoveItem} />
  ))

  return (
    <View>
      <Text style={styles.title}>Favorities</Text>

      <FlatList
        keyExtractor={keyExtractor}
        data={favorities}
        renderItem={renderItem}
        ListEmptyComponent={FavoriteEnpty}
        onRefresh={loadFavorities}
        refreshing={false}
      />
    </View>
  );
};

export { Favorities };