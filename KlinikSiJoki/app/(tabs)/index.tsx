import { StyleSheet } from 'react-native';
import { ThemedText } from '../../src/components/ThemedText';
import { ThemedView } from '../../src/components/ThemedView';
import { IconSymbol } from '../../src/components/ui/IconSymbol';
import ParallaxScrollView from '../../src/components/ParallaxScrollView';
import { HelloWave } from '../../src/components/HelloWave';

export default function TabOneScreen() {
  return (
    <ParallaxScrollView
      headerContent={
        <ThemedView style={styles.header}>
          <IconSymbol symbol="⚛️" size={64} />
          <ThemedText style={styles.title}>Welcome to React Native</ThemedText>
        </ThemedView>
      }
    >
      <ThemedView style={styles.container}>
        <HelloWave text="👋 Hello from React Native!" />
        <ThemedText style={styles.description}>
          This is a React Native app built with Expo. You can edit any file in the
          `src` directory to get started.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
  },
  description: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 24,
  },
});
