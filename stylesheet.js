import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3d2f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    fontSize: 70,
    paddingLeft: 6,
    paddingRight: 3,
    position: 'absolute',
    top: 100,
    color: '#fff',
  },
  label: {
    fontSize: 40,
    top:50,
    marginBottom: 25,
    alignSelf: 'center',
    textTransform: 'uppercase',
    color:'#fff',
  },
  smallLabel: {
    fontSize: 25,
    marginTop: 50,
    marginBottom: 25,
    alignSelf: 'center',
    textTransform: 'uppercase',
    color: 'white'

  },
  labelContainer: {
    height: 90,
    marginTop: 0,
    top:150,
    justifyContent: 'flex-start',
  },
  button: {
    marginBottom: 20,
    top:90,
    marginLeft:15,
    marginRight: 15,
    width:100,

  },
  buttonsBlock:{
    flexDirection:'row',
  },
  menu: {
    marginLeft: 10,
    marginRight: 10,
    width: 90,
    height: 35,
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoBox: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 60
  },
  infoText: {
    fontSize: 15
  },
  image: {
    width: 270,
    height:250,
    top:140,
    bottom: 8
  }
});