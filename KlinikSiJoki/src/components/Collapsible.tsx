import React, { useState } from 'react';
import { View, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
}

export const Collapsible: React.FC<CollapsibleProps> = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [animation] = useState(new Animated.Value(0));

  const toggleCollapse = () => {
    const toValue = isCollapsed ? 1 : 0;
    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsCollapsed(!isCollapsed);
  };

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1000], // Adjust this value based on your content
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleCollapse} style={styles.header}>
        <ThemedText style={styles.title}>{title}</ThemedText>
        <ThemedText>{isCollapsed ? '▼' : '▲'}</ThemedText>
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.content,
          {
            height: isCollapsed ? 0 : heightInterpolate,
            opacity: animation,
          },
        ]}
      >
        {children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginVertical: 8,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
    overflow: 'hidden',
  },
});
