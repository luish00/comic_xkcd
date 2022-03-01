import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  title: {
    backgroundColor: '#4527a0',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingVertical: 15,
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
    justifyContent: 'space-around'
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
  }
});