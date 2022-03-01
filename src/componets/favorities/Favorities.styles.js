import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils';

export default StyleSheet.create({
  title: {
    backgroundColor: COLORS.ColorPrimary,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 16,
    width: '100%',
  },
  pageTitle: {
    color: COLORS.ColorPrimary,
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
  img: {
    flex: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  row: {
    paddingTop: 16,
    flexDirection: 'row',
  },
  trashImg: {
    height: 26,
    width: 26,
  },
  ph16: {
    paddingHorizontal: 21
  },
  noFavorities: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    minHeight: 100,
    width: '100%',
  }
});