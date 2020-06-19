import * as React from 'react';
import {Text,View,Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import DetailScreen from './detail';

const HomeStack = createStackNavigator();


function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      </View>
    );
  }


  function HomeStackScreen() {
    return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailScreen} />
    </HomeStack.Navigator>
    );
  }

export default HomeStackScreen;