import * as React from 'react';
import {Text,View,Image,TouchableOpacity,StyleSheet} from 'react-native';

function SettingsScreen() {
    return (
      <View style={styles.container}>
      <View style={styles.header}></View>
      <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>İlker KUŞ</Text>
          <Text style={styles.info}>Öğrenci / Ege Üniversitesi</Text>
          <Text style={styles.description}>C#,React,React Native Dersleri Verilir</Text>
          
                  
          <TouchableOpacity style={styles.buttonContainer}>
            <Text>Düzenle </Text> 
          </TouchableOpacity>
        </View>
    </View>
  </View>

    );
  }
  const styles = StyleSheet.create({
    header:{
      backgroundColor: "#FF0000",
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:16,
      color: "#F65A5A",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:100,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#FF0000",
    }
  }
  );

export default SettingsScreen;