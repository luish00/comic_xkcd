import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Image,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import { ImageAuto } from '../common';
import { useDoubleClick } from '../../hooks';
import { COLORS } from '../../utils';

import trashImg from '../../../assets/trash.png';

import styles from './Favorities.styles';
import { ScrollView } from 'react-native-gesture-handler';

const FavoriteItem = ({ item, onPress = () => { } }) => {
  const { width } = useWindowDimensions();
  const [isZoom, setZoom] = useState(false);

  const [onDoubleClick] = useDoubleClick(() => {
    setZoom((prev) => !prev);
  });

  const handlePress = useCallback(() => {
    onPress(item);
  }, []);

  const imgSize = useMemo(() => {
    let size = { width: width - 42 };

    if (isZoom) {
      size = {
        width: width * 2,
        height: 500,
      }
    }

    return size;
  }, [isZoom]);

  return (
    <View >
      <View style={styles.row}>
        <Text style={styles.pageTitle}>{item.title}</Text>

        <TouchableOpacity onPress={handlePress}>
          <Image tintColor={COLORS.ColorAccent} source={trashImg} style={styles.trashImg} />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal>
        <View style={styles.ph16}>
          <TouchableOpacity onPress={onDoubleClick}>
            <ImageAuto
              uri={item.img}
              style={[imgSize, styles.img]}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View >
  );
};

export { FavoriteItem }
