import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import styles from './ButtonColored.styles';

const ButtonColored = ({ onPress, label }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>
      {label}
    </Text>
  </TouchableOpacity>
)

export { ButtonColored };
