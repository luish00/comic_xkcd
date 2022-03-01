import { StyleSheet } from 'react-native'
import { COLORS } from '../../utils';

export default StyleSheet.create({
  title: {
    backgroundColor: COLORS.ColorPrimary,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: '100%',
    minHeight: 56,
  },
  titleText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  imageContainer: {
    paddingHorizontal: 20,
  },
  image: {
    alignSelf: 'center',
    flex: 1,
    marginTop: 16,
    minHeight: 500,
    resizeMode: 'contain'
  },
  flex1: {
    flex: 1
  },
  headerImagen: {
    height: 26,
    width: 26,
  },
  description: {
    color: '#000',
    padding: 20, 
  },
  pageCount: {
    paddingHorizontal: 20,
    textAlign: 'center', 
  },
  mt16: {
    marginTop: 16,
  }
});