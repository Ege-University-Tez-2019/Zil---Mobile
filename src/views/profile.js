import * as React from 'react';
import {Text,View,Image,StyleSheet,TouchableOpacity} from 'react-native';
import Card from '../../component/Card';
import { ScrollView } from 'react-native-gesture-handler';


import { createStackNavigator } from '@react-navigation/stack';

import DetailScreen from './detail';

const ProfileStack = createStackNavigator();

const course = [
  {
    name:"Biyoloji",desc:"Ders içeriği hakkında",picurl:"https://images.pexels.com/photos/920157/pexels-photo-920157.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
  },{
    name:"Matematik",desc:"Ders içeriği hakkında",picurl:"https://images.pexels.com/photos/374918/pexels-photo-374918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },{
    name:"Türkçe",desc:"Ders içeriği hakkında",picurl:"https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },{
    name:"Gitar",desc:"Ders içeriği hakkında",picurl:"https://images.pexels.com/photos/15919/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },{
    name:"İngilizce",desc:"Ders içeriği hakkında",picurl:"https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
];

function ProfileScreen({navigation}) {

    return (


    <ScrollView>
      {course.map((item, key) =>(
      <View key={key} style={styles.container}>
       <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Details')}>
          <Image style={styles.cardImage} source={{uri:item.picurl}}>
          </Image>
      <Text style={styles.cardText}>{item.name}</Text>
        </TouchableOpacity>  
      </View>) 
      )}
    </ScrollView>  
    );
  }

 function ProfileStackScreen(){
  return (
    <ProfileStack.Navigator headerMode='none'>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="Details" component={DetailScreen} />
    </ProfileStack.Navigator>
    );
 } 



const styles = StyleSheet.create({
  container:{
    marginTop:20,
    backgroundColor:'#F5FCFF'
  },
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
    textAlign:'center',
    padding:10,
    fontSize:16
  }
}
);

export default ProfileStackScreen;