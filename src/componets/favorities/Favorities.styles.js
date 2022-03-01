import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils';

export default StyleSheet.create({
  title: {
    backgroundColor: COLORS.ColorPrimary,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: '100%',
  },
  pageTitle: {
    color: COLORS.ColorPrimary,
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
  img: {
    alignSelf: 'center',
    flex: 1,
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    paddingTop: 16,
  },
  trashImg: {
    height: 26,
    width: 26,
  },
  ph16: {
    paddingHorizontal: 21,
  },
  noFavorities: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    minHeight: 100,
    width: '100%',
  },
});
