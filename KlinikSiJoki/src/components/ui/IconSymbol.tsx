import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemedText } from '../ThemedText';

interface IconSymbolProps {
  symbol: string;
  size?: number;
  color?: string;
}

export const IconSymbol: React.FC<IconSymbolProps> = ({
  symbol,
  size = 24,
  color,
}) => {
  return (
    <View style={styles.container}>
      <ThemedText
        style={[
          styles.symbol,
          {
            fontSize: size,
            color: color,
          },
        ]}
      >
        {symbol}
      </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  symbol: {
    textAlign: 'center',
  },
});
