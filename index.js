import { StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native-appearance';

const useFontColor = (lightModeColor, darkModeColor) => {
  const styles = StyleSheet.create({
    white: {
      color: darkModeColor || 'white',
    },
    black: {
      color: lightModeColor || 'black',
    },
  });
  const colorScheme = useColorScheme();
  return colorScheme === 'light' ? styles.black : styles.white;
};
export default useFontColor;
