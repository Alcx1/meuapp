import React from 'react';
import { 
  View,
  Text, 
  StyleSheet,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';


export default function Welcome() {
    const navigation = useNavigation();


  return (
   <View style={styles.container}>
   
   <View style={styles.containerLogo}>
    <Animatable.Image
      animation="flipInY"
      source={require('../../assets/Logo.png')}
      style={{ width: 300 ,
      overflow: "hidden",
      borderRadius: 160 / 4}}
      resizeMode={"contain"}
      
    />
   </View>
   <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
      
      <Text style={styles.title}>Monitore seu veiculo em qualquer lugar!</Text>
      
      <Text style={styles.text}>Faça o login para começar.</Text>
      
      <TouchableOpacity 
      style={styles.button}
      onPress={ () => navigation.navigate('SingIn')}
      >
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
   </Animatable.View>
   
   </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:2,
    backgroundColor: '#2E2A2A'
  },
  containerLogo:{
    flex:2,
    backgroundColor: '#2E2A2A',
    justifyContent:'center',
    alignItems:'center',
    borderTopLeftRadius:25,
    
  },
  containerForm:{
    flex:1,
    backgroundColor:'#FF9A00',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingStart:'5%',
    paddingEnd:'5%'
  },
  title:{
    fontSize:28,
    fontWeight:'bold',
    marginTop:30,
    marginBottom:12,
    borderBottomWidth:4,
    borderBottomColor:'#2E2A2A',
    borderRadius:2
  },
  text:{
    alignItems:'center',
    alignContent:'center',
    fontSize:14,
    marginTop: 20,
    color:'#4F4F4F',
    fontWeight:'bold',
    borderRadius:10,
  },
  button:{
    position:'absolute',
    backgroundColor:'#2E2A2A',
    borderRadius:50,
    paddingVertical:8,
    width: '50%',
    alignSelf:'center',
    bottom:'15%',
    alignItems:'center', 
    justifyContent:'center'
  },
  buttonText:{
    fontSize:18,
    color:'#fff'
  }
})