import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

export default class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, color:"#FF4500", icon:"https://images.pexels.com/photos/920157/pexels-photo-920157.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", name: "YGS-LYS Biyoloji",price:'30',qty:1}, 
        {id:2, color:"#87CEEB", icon:"https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", name: "Intermediate English",price:'25',qty:1},  
        {id:3, color:"#4682B4", icon:"https://images.pexels.com/photos/374918/pexels-photo-374918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", name: "Türev İntegral Dersi",price:'50',qty:1}, 
        {id:4, color:"#6A5ACD", icon:"https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", name: "Lise Türkçe Dersi",price:'20',qty:1},  
        {id:5, color:"#FF69B4", icon:"https://images.pexels.com/photos/15919/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", name: "Klasik-Elektro Gitar",price:'15',qty:1}, 
      ],
     initialNumber:1
    };
  }

  cardClickEventListener = (item) => {
    Alert.alert(item.name);
  }

  onPress =(değer) =>{
  
    this.setState({initialNumber:this.state.initialNumber+değer})
    
  }

  render() {
    const {state:{initialNumber}}=this
    
   
    return (
      <View style={styles.container}>

        <FlatList 
          style={styles.notificationList}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <View style={[styles.card, {borderColor:item.color}]}>
                <View style={styles.cardContent}>
                  <Image style={[styles.image, styles.imageContent]} source={{uri: item.icon}}/>
                  <Text style={styles.name}>{item.name}</Text>
                </View>

                
                <View style={[styles.cardContent, styles.tagsContent]}>
                  <Text>{item.id+'.'}</Text>
                  <Text style={[styles.name]}>{item.price}$</Text>
           <TouchableOpacity style={styles.btnSize} onPress={(e)=>this.onPress(1)}><Text>+</Text></TouchableOpacity>
                  <Text>{initialNumber}</Text>
            <TouchableOpacity style={styles.btnSize} onPress={(e)=>this.onPress(-1)}><Text>-</Text></TouchableOpacity>
                </View>

              
              </View>
            )
          }}/>

                 <View style={{marginTop:15}}>
                   <Button
                    color='#9C27B0'
                    title='Ödeme Yap'
                    onPress={()=>this.props.navigation.navigate('Dersler')}/>
                 </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  icon:{
    width:30,
    height:30,
  },
  iconBtnSearch:{
    alignSelf:'center'
  },
  input:{
    height:10,
    width:10,
    backgroundColor:'blue'
    
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  notificationList:{
    marginTop:20,
    padding:10,
  },
  card: {
    height:null,
    paddingTop:10,
    paddingBottom:10,
    marginTop:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    borderTopWidth:40,
    marginBottom:20,
  },
  cardContent:{
    flexDirection:'row',
    marginLeft:10, 
    justifyContent:'space-between'
  },
  imageContent:{
    marginTop:-40,
  },
  tagsContent:{
    marginTop:10,
    flexWrap:'wrap'
  },
  image:{
    width:60,
    height:60,
    borderRadius:30,
  },
  name:{
    fontSize:20,
    fontWeight: 'bold',
    marginLeft:10,
    alignSelf: 'center'
  },
  btnColor: {
    padding:10,
    borderRadius:40,
    marginHorizontal:3,
    backgroundColor: "#eee",
    marginTop:5,
  },
  btnSize: {
    height:30,
    width:30,
    borderRadius:40,
    borderColor:'#778899',
    borderWidth:1,
    marginHorizontal:3,
    backgroundColor:'white',

        

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});   