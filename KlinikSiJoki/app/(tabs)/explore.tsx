import { Platform, StyleSheet } from 'react-native';
import { Collapsible } from '../../src/components/Collapsible';
import { ExternalLink } from '../../src/components/ExternalLink';
import ParallaxScrollView from '../../src/components/ParallaxScrollView';
import { ThemedText } from '../../src/components/ThemedText';
import { ThemedView } from '../../src/components/ThemedView';
import { IconSymbol } from '../../src/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerContent={
        <ThemedView style={styles.header}>
          <IconSymbol 
            symbol="⚛️" 
            size={64} 
            color="#808080"
          />
          <ThemedText style={styles.headerTitle}>Explore</ThemedText>
        </ThemedView>
      }
    >
      <ThemedView style={styles.container}>
        <ThemedText style={styles.description}>
          This app includes example code to help you get started.
        </ThemedText>

        <Collapsible title="File-based routing">
          <ThemedText>
            This app has two screens:{' '}
            <ThemedText style={styles.semiBold}>app/(tabs)/index.tsx</ThemedText> and{' '}
            <ThemedText style={styles.semiBold}>app/(tabs)/explore.tsx</ThemedText>
          </ThemedText>
          <ThemedText>
            The layout file in <ThemedText style={styles.semiBold}>app/(tabs)/_layout.tsx</ThemedText>{' '}
            sets up the tab navigator.
          </ThemedText>
          <ExternalLink href="https://docs.expo.dev/router/introduction">
            <ThemedText style={styles.link}>Learn more</ThemedText>
          </ExternalLink>
        </Collapsible>

        <Collapsible title="Android, iOS, and web support">
          <ThemedText>
            You can open this project on Android, iOS, and the web. To open the web version, press{' '}
            <ThemedText style={styles.semiBold}>w</ThemedText> in the terminal running this project.
          </ThemedText>
        </Collapsible>

        <Collapsible title="Images">
          <ThemedText>
            For static images, you can use the <ThemedText style={styles.semiBold}>@2x</ThemedText> and{' '}
            <ThemedText style={styles.semiBold}>@3x</ThemedText> suffixes to provide files for
            different screen densities
          </ThemedText>
          <ExternalLink href="https://reactnative.dev/docs/images">
            <ThemedText style={styles.link}>Learn more</ThemedText>
          </ExternalLink>
        </Collapsible>

        <Collapsible title="Custom fonts">
          <ThemedText>
            Open <ThemedText style={styles.semiBold}>app/_layout.tsx</ThemedText> to see how to load{' '}
            <ThemedText style={{ fontFamily: 'SpaceMono' }}>
              custom fonts such as this one.
            </ThemedText>
          </ThemedText>
          <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
            <ThemedText style={styles.link}>Learn more</ThemedText>
          </ExternalLink>
        </Collapsible>

        <Collapsible title="Light and dark mode components">
          <ThemedText>
            This template has light and dark mode support. The{' '}
            <ThemedText style={styles.semiBold}>useColorScheme()</ThemedText> hook lets you inspect
            what the user&apos;s current color scheme is, and so you can adjust UI colors accordingly.
          </ThemedText>
          <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
            <ThemedText style={styles.link}>Learn more</ThemedText>
          </ExternalLink>
        </Collapsible>

        <Collapsible title="Animations">
          <ThemedText>
            This template includes an example of an animated component. The{' '}
            <ThemedText style={styles.semiBold}>components/HelloWave.tsx</ThemedText> component uses
            the powerful <ThemedText style={styles.semiBold}>react-native-reanimated</ThemedText>{' '}
            library to create a waving hand animation.
          </ThemedText>
          {Platform.select({
            ios: (
              <ThemedText>
                The <ThemedText style={styles.semiBold}>components/ParallaxScrollView.tsx</ThemedText>{' '}
                component provides a parallax effect for the header image.
              </ThemedText>
            ),
          })}
        </Collapsible>
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
    backgroundColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 24,
  },
  link: {
    color: '#2196F3',
    marginTop: 8,
  },
  semiBold: {
    fontWeight: '600',
  }
});
