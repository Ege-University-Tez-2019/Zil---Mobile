
import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,Text, Alert
} from 'react-native'


export default class SignUp extends React.Component {
   
    state = {
    username: '', password: '', email: '', phone_number: ''
  }
    
    onClickListener = () =>{
        Alert.alert('E-posta adresinize şifrenizi sıfırlama bağlantısı gönderilmiştir.')
    }



 
  render() {
    return (
        
      <View style={styles.container}>

          <View>
              <Text style={styles.title}>
                  Şifremi Unuttum
              </Text>
          </View>

        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='black'
          keyboardType='email-address'
        />
        <View style={styles.infoContainer}>
        <Text style={styles.infoContainerText}>Lütfen şifre sıfırlama bağlantısı için sisteme kayıtlı olduğunuz e-mail adresinizi giriniz.</Text>
        </View>
        

      <View style={{marginTop:15}}>
            <Button
          color='#9C27B0'
          title='Gönder'
          onPress={this.onClickListener}
        />
      </View>
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        color:'white',
        marginBottom:20
    },
  input: {
    width: 350,
    height: 55,
    backgroundColor: 'white',
    margin: 10,
    padding: 8,
    color: 'black',
    borderRadius: 40,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#900C3F',
  },
  infoContainer:{
      alignItems:'center',
      marginTop:10  
  },
  infoContainerText:{
      alignItems:'center',
      width:300,
      color:'white',
      margin:15
  }

 
})