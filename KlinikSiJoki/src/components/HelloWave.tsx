import React from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { ThemedText } from './ThemedText';

interface HelloWaveProps {
  text?: string;
}

export const HelloWave: React.FC<HelloWaveProps> = ({ text = "👋 Hello!" }) => {
  const waveAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(waveAnim, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(waveAnim, {
          toValue: 0,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, []);

  const rotate = waveAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '20deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.waveContainer, { transform: [{ rotate }] }]}>
        <ThemedText style={styles.text}>{text}</ThemedText>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  },
  waveContainer: {
    transformOrigin: 'center',
  },
  text: {
    fontSize: 24,
  },
});
