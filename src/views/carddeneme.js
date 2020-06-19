import * as React from 'react';
import {Text,View,Image,StyleSheet,TouchableOpacity,TextInput} from 'react-native';
import Card from '../../component/Card';
import { ScrollView } from 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from './detail';

const ProfileStack = createStackNavigator();


const course=[{
  name:"Biyoloji",desc:"Ders içeriği hakkında",picurl:"https://images.pexels.com/photos/920157/pexels-photo-920157.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
},{
  name:"Matematik",desc:"Ders içeriği hakkında",picurl:"https://images.pexels.com/photos/920157/pexels-photo-920157.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
},{
  name:"Türkçe",desc:"Ders içeriği hakkında",picurl:"https://images.pexels.com/photos/920157/pexels-photo-920157.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
},{
  name:"Gitar",desc:"Ders içeriği hakkında",picurl:"https://images.pexels.com/photos/920157/pexels-photo-920157.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
},{
  name:"İngilizce",desc:"Ders içeriği hakkında",picurl:"https://images.pexels.com/photos/920157/pexels-photo-920157.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
}]




export default class ProfileScreen extends React.Component {
  constructor() {
    super();
    //Array of Item to add in Scrollview
    this.items = [
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
    //Blank array to store the location of each item
    this.arr = [];
    this.state = { dynamicIndex: 0 };
  }
  downButtonHandler = () => {
    if (this.arr.length >= this.state.dynamicIndex) {
      // To Scroll to the index 5 element
      this.scrollview_ref.scrollTo({
        x: 0,
        y: this.arr[this.state.dynamicIndex],
        animated: true,
      });
    } else {
      alert('Out of Max Index');
    }
  };
  render() {
    const {navigation} = this.props.navigation;
    return (


      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#1e73be',
            padding: 5,
          }}>
          <TextInput
            value={String(this.state.dynamicIndex)}
            numericvalue
            keyboardType={'default'}
            onChangeText={dynamicIndex => this.setState({ dynamicIndex })}
            placeholder={'Enter the index to scroll'}
            style={{ flex: 1, backgroundColor: 'white', padding: 10 }}
          />
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={this.downButtonHandler}
            style={{ padding: 15, backgroundColor: '#f4801e' }}>
            <Text style={{ color: '#fff' }}>Go to Index</Text>
          </TouchableOpacity>
        </View>




        <ScrollView
          ref={ref => {
            this.scrollview_ref = ref;
          }}>
          {/*Loop of JS which is like foreach loop*/}
          {this.items.map((item, key) => (
            //key is the index of the array
            //item is the single item of the array
            
            <View
              key={key}
              style={styles.item}
              onLayout={event => {
                const layout = event.nativeEvent.layout;
                this.arr[key] = layout.y;
                console.log('height:', layout.height);
                console.log('width:', layout.width);
                console.log('x:', layout.x);
                console.log('y:', layout.y);
              }}>


                <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Details'),{}} >
                  <Image style={styles.cardImage} source={{uri:item.picurl}} ></Image>
                    <Text style={styles.text}>
                    {item.name}
                  </Text>
                </TouchableOpacity>


                
              <View style={styles.separator} />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  separator: {
    height: 1,
    backgroundColor: '#707080',
    width: '100%',
  },

  text: {
    fontSize: 16,
    color: '#606070',
    padding: 10,
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
    padding:10,
    fontSize:16
  }
}

);
