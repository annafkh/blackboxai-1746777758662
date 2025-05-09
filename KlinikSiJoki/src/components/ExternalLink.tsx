import React from 'react';
import { TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  style?: any;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children, style }) => {
  const handlePress = () => {
    Linking.openURL(href).catch((err) => {
      console.error('Error opening external link:', err);
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <ThemedText style={[styles.link, style]}>
        {children}
      </ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    textDecorationLine: 'underline',
    color: '#2196F3',
  },
});
