import React from 'react';
import { Text, TextProps, useColorScheme } from 'react-native';

interface ThemedTextProps extends TextProps {
  lightColor?: string;
  darkColor?: string;
}

export const ThemedText: React.FC<ThemedTextProps> = ({
  style,
  lightColor,
  darkColor,
  ...props
}) => {
  const colorScheme = useColorScheme();
  const color = colorScheme === 'dark' ? darkColor || '#fff' : lightColor || '#000';

  return (
    <Text
      style={[
        { color },
        style,
      ]}
      {...props}
    />
  );
};
