import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 104,
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: theme.colors.heading,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: theme.colors.secondary30,
    backgroundColor: theme.colors.primary,
  },
  letterProfile: {
    color: theme.colors.secondary85,
    fontSize: 25,
    textTransform: 'uppercase',
  },
  imageProfile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
