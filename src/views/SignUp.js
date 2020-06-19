
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
    
    onClickListener = (viewId) =>{
        Alert.alert('Kayıt İşlemi Gerçekleştirildi!'+viewId)
    }




  signUp = async () => {
    let { username, password, email, phone_number } = this.state
     
      Alert.alert('Kayıt işlemi başarıyla gerçekleştirildi :)')
      console.log('user successfully signed up!: ')
      console.log({username})
      console.log({password})
      console.log({email})
      console.log({phone_number})

  }
 
  render() {
    return (
        
      <View style={styles.container}>

          <View>
              <Text style={styles.title}>
                  KAYIT FORMU
              </Text>
          </View>


        <TextInput
          style={styles.input}
          placeholder='Kullanıcı Adı'
          autoCapitalize="none"
          placeholderTextColor='black'
          onChangeText={(username) => this.setState({username})}
        />
        <TextInput
          style={styles.input}
          placeholder='Şifre'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='black'
          onChangeText={(password) => this.setState({password})}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='black'
          keyboardType='email-address'
          onChangeText={(email) => this.setState({email})}
        />
        <TextInput
          style={styles.input}
          placeholder='Telefon Numarası'
          autoCapitalize="none"
          placeholderTextColor='black'
          keyboardType='phone-pad'
          onChangeText={(phone_number) => this.setState({phone_number})}
        />
      <View style={{marginTop:15}}>
            <Button
          color='#9C27B0'
          title='Kayıt Ol'
          onPress={this.signUp}
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
        marginBottom:15
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

 
})