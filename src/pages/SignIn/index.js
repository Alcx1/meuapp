import { async } from '@firebase/util';
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet , TextInput, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { firebaseConfig } from '../../../firebaseConnection';
import firebase from 'firebase/app'; 

export default function welcome() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function loginFirebase(){
    firebase.auth().createUserWithEmailAndPassword(email,senha).catch(function(error) {
      var errorCode = error.code
      var errorMessage = error.message
      alert(errorCode, errorMessage);
    });
  }

  return (
   <View style={styles.container}>
    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
      <Text style={styles.message}>
        Bem-vindo(a)!
      </Text>
    </Animatable.View>


    <Animatable.View animation={"fadeInUp"} style={styles.containerForm}>
      <Text style={styles.title}>Email</Text>
      <TextInput
          placeholder="Digite seu email..."
          style={styles.input}
          onChangeText={email => setEmail(email)}
          value={email}
      />
      <Text style={styles.title}>Senha</Text>
      <TextInput
          placeholder="Sua senha..."
          style={styles.input}
          onChangeText={senha => setSenha(senha)}
          value={senha}
      />
      <TouchableOpacity style={styles.button} onPress={()=>{loginFirebase}}>


        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonRegister}>
        <Text style={styles.registerText}>Não possui uma conta? Cadastra-se aqui.</Text>
      </TouchableOpacity>

    </Animatable.View>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#2E2A2A'
  },
  containerHeader:{
    marginTop:'14%',
    marginBottom:'8%',
    paddingStart:'5%',
  },
  message:{
    fontSize:28,
    fontWeight:'bold',
    color:'#fff'
  },
  containerForm:{
    backgroundColor:'#FF9A00',
    flex:1,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    paddingStart:'5%', 
    paddingEnd:'5%'
  },
  title:{
    fontSize:20,
    marginTop: 28,
  },
  input:{
    borderBottomWidth:1,
    height:40,
    marginBottom:12,
    fontSize:15
  },
  button:{
    backgroundColor:'#2E2A2A',
    width:'100%',
    borderRadius:50,
    paddingVertical:5,
    marginTop:14,
    justifyContent:'center',
    alignItems:'center'
    },
  buttonText:{
    color:'#fff',
    fontSize:15,
    fontWeight:'bold'
  },
  buttonRegister:{
    marginTop:14,
    alignSelf:'center',
  }, 
  registerText:{
    color:'#2E2A2A',
  }
})