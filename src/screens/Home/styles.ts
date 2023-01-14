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
    height: 350,
    width: '90%',
    padding: 10,
    borderRadius: 10
  },
  bottom: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
  }
});