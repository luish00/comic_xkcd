import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  title: {
    backgroundColor: '#4527a0',
    color: '#fff',
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingVertical: 15,
    textAlign: 'center',
    width: '100%',
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
  }
});