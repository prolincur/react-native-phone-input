import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  superContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth:1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth:1,
  },
  basicContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  buttonView: {
    padding: 8,
    borderTopWidth: 0.5,
    borderTopColor: 'lightgrey',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  bottomPicker: {
  },
  flag: {
    height: 20,
    width: 30,
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: '#cecece',
    backgroundColor: '#cecece',
  },
  text: {
    height: 20,
    padding: 0,
    justifyContent: 'center',
  },
});
