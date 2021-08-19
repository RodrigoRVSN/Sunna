import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

export default function ErrorMessage({ error }) {
  return (
    <>
      <Text style={styles.message}>{error}</Text>
    </>
  );
}
