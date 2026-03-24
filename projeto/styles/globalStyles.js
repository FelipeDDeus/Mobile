import { StyleSheet } from 'react-native';
import theme from './theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 16,
    marginTop: 10
  }
});