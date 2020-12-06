import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  timer: {
    fontSize: 70,
    paddingLeft: 6,
    paddingRight: 3,
    position: 'absolute',
    top: 100,
    color: '#14213d',
    fontWeight: "bold"
  },
  label: {
    fontSize: 40,
    top:0,
    marginBottom: 25,
    alignSelf: 'center',
    textTransform: 'uppercase',
    color:'#14213d',
  },
  smallLabel: {
    fontSize: 25,
    marginTop: 50,
    marginBottom: 25,
    alignSelf: 'center',
    textTransform: 'uppercase',
    color: '#14213d'

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
    marginBottom: 10,
    
  },
  menuContainerText:
  {
    color: '#14213d',
    fontSize: 18,
    marginRight: 10
  },
  menu:
  {
    width:"100px",
    height: "30px",
    marginLeft: "auto"
  },
  mainMenuContainer:
  {
    top:"120px"
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
    top:80,
    bottom: 8
  }
});