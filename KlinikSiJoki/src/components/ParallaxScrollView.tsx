import React from 'react';
import { Animated, ScrollView, StyleSheet, View, ViewStyle } from 'react-native';

interface ParallaxScrollViewProps {
  headerContent?: React.ReactNode;
  children: React.ReactNode;
  style?: ViewStyle;
  headerHeight?: number;
}

const ParallaxScrollView: React.FC<ParallaxScrollViewProps> = ({
  headerContent,
  children,
  style,
  headerHeight = 200,
}) => {
  const scrollY = new Animated.Value(0);

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -headerHeight],
    extrapolate: 'clamp',
  });

  const headerScale = scrollY.interpolate({
    inputRange: [-headerHeight, 0],
    outputRange: [2, 1],
    extrapolate: 'clamp',
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, headerHeight / 2, headerHeight],
    outputRange: [1, 0.5, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={[styles.container, style]}>
      <Animated.View
        style={[
          styles.header,
          {
            height: headerHeight,
            transform: [
              { translateY: headerTranslateY },
              { scale: headerScale },
            ],
            opacity: headerOpacity,
          },
        ]}
      >
        {headerContent}
      </Animated.View>
      <ScrollView
        style={styles.scrollView}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        <View style={{ marginTop: headerHeight }}>
          {children}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    zIndex: 10,
  },
});

export default ParallaxScrollView;
