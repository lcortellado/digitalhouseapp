import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1 ,
    alignItems: 'center',
    paddingHorizontal: 20
  },
  text:{
    color: '#9B9898',
    fontFamily: 'Avenir-Black',
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 19,
    alignSelf: 'flex-start',
    marginVertical: 15
  },
  flatList:{
    height: 390,
    width: '100%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF'
  },
  bottom: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  buttonContainer:{
    position: 'absolute',
    width: '100%',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttomWon:{
  width: '45%'

  },
  buttomRedeemed:{
    width: "45%"
  }
});