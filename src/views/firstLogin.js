import * as React from 'react';
import {Platform, StyleSheet, Text, View,ImageBackground, Image, TextInput, Dimensions, TouchableOpacity} from 'react-native';

import bgimage from '../../images/background.jpg'
import logo from '../../images/bell3.png'
const {width:WIDTH}=Dimensions.get('window')

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './home';
import SignUp from './SignUp';


const Stack = createStackNavigator();

function FirstScreen({navigation}) {
    return (
  
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground source={bgimage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo}></Image>
          <Text style={styles.logoText}>
              Zil.com
          </Text>
        </View>

        
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder='Kullanıcı Adı'>
            </TextInput>
          </View>
          <View>
            <TextInput style={styles.input} placeholder='Şifre' secureTextEntry={true}>
            </TextInput>
          </View>

          <TouchableOpacity style={styles.loginbtn} onPress={()=>navigation.navigate('Main')}>
            <Text style={styles.buttonText}>Giriş Yap</Text>
          </TouchableOpacity>
        
        
       <View style={styles.bottomContainer}></View>
        <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
          <Text style={styles.bottomText}>Kayıt Ol</Text>   
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('forgotPassword')}>
          <Text style={styles.bottomText}>Şifremi Unuttum !</Text>
        </TouchableOpacity>
      
      </ImageBackground>
      </View>

     
    
     
    );
  

  }  


  const styles = StyleSheet.create({
    bottomContainer:{
        alignItems:'flex-end',
        justifyContent:'flex-end',
        marginTop:20
    },
    bottomText:{
      fontSize:15,
      color:'white',
      alignItems:'center',
      marginTop:5

    },
    backgroundContainer: {
      flex: 1,
      justifyContent: 'center',
      width: null,
      height: null,
      alignItems: 'center',
    },
    logoContainer:{
      alignItems:'center',
      marginBottom:50
    },
    logo: {
      width:60,
      height:60
    },
    logoText:{
      color:'white',
      fontSize:20,
      fontStyle:'italic',
      marginTop:10,
      opacity:1
    },
    input:{
      width:WIDTH-50,
      height:45,
      borderRadius: 40,
      fontSize:20,
      paddingLeft:30,
      backgroundColor:'white',
      color:'black',
      marginHorizontal:25,
  
    },
    inputContainer:{
      marginBottom:10,
      alignItems:'center'
    },
    loginbtn:{
      width:WIDTH-200,
      height:45,
      borderRadius: 45,
      backgroundColor:'red',
      marginTop:50,
      justifyContent:'center'
    },
    buttonText:{
      fontSize:16,
      color:'white',
      textAlign:'center'
    }
  
  });


export default FirstScreen;