import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils';

export default StyleSheet.create({
  title: {
    alignItems: 'center',
    backgroundColor: COLORS.ColorPrimary,
    flexDirection: 'row',
    height: 56,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: '100%',
  },
  titleText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 8,
  },
  imageContainer: {
    paddingHorizontal: 20,
  },
  image: {
    alignSelf: 'center',
    flex: 1,
    resizeMode: 'contain',
  },
  flex1: {
    flex: 1,
  },
  headerImagen: {
    height: 26,
    width: 26,
  },
  descriptionContainer: {
    flex: 1,
    paddingBottom: 200,
  },
  description: {
    color: '#000',
    padding: 20,
    textAlign: 'center',
  },
  pageCount: {
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  loading: {
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  relative: {
    position: 'relative',
  },
});
