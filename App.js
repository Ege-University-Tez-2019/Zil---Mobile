import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './src/views/home';
import SettingsScreen from './src/views/settings';
import ProfileScreen from './src/views/profile';
import FirstScreen from './src/views/firstLogin';
import SignUp from './src/views/SignUp';
import ForgotPassword from './src/views/forgotPassword';
import CartScreen from './src/CartScreen';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabNavigator = () => {
  return ( <Tab.Navigator>
  {/* <Tab.Screen name="First" component={FirstScreen} /> */}
  {/*<Tab.Screen name="Home" component={HomeScreen} />*/}
  <Tab.Screen name="Dersler" component={ProfileScreen} />
  <Tab.Screen name="Sepet" component={CartScreen} />
  <Tab.Screen name="Profil Sayfası" component={SettingsScreen} />
 
  

  
</Tab.Navigator>)}
const AuthStack = ()=>{
  return(
      <Stack.Navigator headerMode="none">
        <Stack.Screen name='First' component={FirstScreen} options={{ title: 'Sign in' } }></Stack.Screen> 
        <Stack.Screen name ='SignUp' component={SignUp}></Stack.Screen>
        <Stack.Screen name ='forgotPassword' component={ForgotPassword}></Stack.Screen>
      </Stack.Navigator>

  );
}

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
     
      <Tab.Navigator tabBar={props => null}>
        <Tab.Screen name='Auth' component={AuthStack} options={{ title: 'John Doe' }}/>
        <Tab.Screen name='Main' component={MainTabNavigator}/>
      </Tab.Navigator>
      </NavigationContainer>
      
  );

};

export default App;
