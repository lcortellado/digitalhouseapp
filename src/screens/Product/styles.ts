import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  headingContainer: {
    backgroundColor: '#CFD6FF',
    paddingHorizontal: 20,
  },
  imageContainer:{
    paddingHorizontal: 20
  },
  textContainer:{
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  textDetails:{
    fontFamily: 'Avenir-Black',
    fontSize: 14,
    fontWeight: '800',
    lineHeight:19,
    color: '#9B9898',
    marginBottom: 20,
   
  },
  textDate:{
    fontFamily: 'Avenir-Black',
    fontSize: 16,
    fontWeight: '800',
    lineHeight:22,
    color: '#000000',
    marginBottom: 20,
  },
  textPoint:{
    marginTop: 10,
    fontFamily: 'Avenir-Black',
    fontSize: 24,
    fontWeight: '800',
    lineHeight:33,
    color: '#000000'
  },
  bottom: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
  }
})