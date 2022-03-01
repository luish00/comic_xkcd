import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  useWindowDimensions,
  View
} from 'react-native';

import { ButtonColored } from '../common/ButtonColored';

import styles from './HomeContent.style';

const HomeContent = () => {
  const { width } = useWindowDimensions();

  function onClick() {

  }

  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>Title</Text>

        <View style={styles.buttons}>
          <ButtonColored label='<' onPress={onClick} />

          <ButtonColored label='random' onPress={onClick} />

          <ButtonColored label='>' onPress={onClick} />
        </View>

        <Image style={{ width: width - 40, alignSelf: 'center', marginTop: 16, backgroundColor: 'red', height: 300 }} source={null} />
      </View>
    </ScrollView>
  );
}

export { HomeContent };
