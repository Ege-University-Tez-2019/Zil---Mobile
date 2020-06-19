import * as React from 'react';
import {Text,Image,StyleSheet,TouchableOpacity} from 'react-native';


function Card() {
    return (
        <TouchableOpacity style={styles.card}>
          <Image style={styles.cardImage} source={{uri:'https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}}>
          </Image>
          <Text style={styles.cardText}>Ders Adı</Text>
        </TouchableOpacity>   
    );
  }



const styles = StyleSheet.create({

  card : {
    backgroundColor: '#fff',
    marginBottom:10,
    width:'96%',
    shadowColor:'#000',
    shadowOpacity:0.2,
    shadowRadius:1,
    shadowOffset:{
      width:3,
      height:3
    }

  },
  cardImage:{
    width:'100%',
    height:200,
    resizeMode:'cover'
  },
  cardText: {
    padding:10,
    fontSize:16
  }
}

);

export default Card;