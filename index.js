import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native-appearance';

const useFontColor = (lightModeColor, darkModeColor) => {
  const styles = useMemo(
    () => StyleSheet.create({
      white: {
        color: darkModeColor || 'white',
      },
      black: {
        color: lightModeColor || 'black',
      },
    }),
    [lightModeColor, darkModeColor],
  );
  const colorScheme = useColorScheme();
  return colorScheme === 'light' ? styles.black : styles.white;
};

export default useFontColor;
