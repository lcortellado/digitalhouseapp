import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
    width: "100%",
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 3,
    paddingVertical: 5,
    marginBottom: 8
  },
  descriptionView:{
    paddingHorizontal: 10,
   flexDirection: 'column'
  },
  description: {
    fontFamily:'Avenir-Black',
    fontSize: 14,
    textAlign: 'left',
    marginLeft: 8,
    color: '#000000',
  },
  date:{
    fontFamily:'Avenir-Roman',
    fontSize: 14,
    textAlign: 'left',
    marginLeft: 8,
    color: '#000000',
},
  iconViewLeft :{
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconViewRight :{
    flex:1,
    width: 32,
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  image: {
    width: 55,
    height: 55,
    resizeMode: 'contain'
  },
  number:{
    fontFamily:'Avenir-Black',
    fontSize: 16,
    textAlign: 'left',
    lineHeight: 22,
    color: '#000000',
  },
  icon:{
     marginLeft: 8,
    width: 10, 
    height: 10 
  },
});