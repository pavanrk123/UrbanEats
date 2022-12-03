/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  Text,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuItems from './Screens/MenuItems';
import PassOrders from './Screens/OrderType';
import OrderAndSuccess from './Screens/OrderType';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import Completed from './Screens/Completed';
import PushNotification from "react-native-push-notification";
import OrderCancellation from './Screens/OrderCancellation';

  const createChannel=()=>{
    PushNotification.createChannel(
      {
        channelId:"t-channel",
        channelName:"t channel"
      }
    )
  }






const SplashScreen = ({navigation}) => {

  setTimeout(()=>{
      navigation.replace('menu')
   },3000)

   return(
    <View style={{
      alignItems:'center',
      justifyContent:'center',
      flex:1
    }}>
 
   <Text
    style={{
      fontFamily:'bold',
      fontSize:32
    }}>
 Ｅａｔ Ｃｅｎｔｒａｌ 
     </Text>
    <Text
    style={{
      fontFamily:'bold',
      fontSize:15
    }}>
     Ｌｏｃａｌｉｓｅｄ ｆｏｏｄ  ｄｅｌｉｖｅｒｙ
    </Text>

    <View style={{
      marginTop:20
    }}>
      <Text>
        made with love in India 
      </Text>
    </View>
    </View>
  );
  }  

  const firebaseConfig = {
    apiKey: "AIzaSyBJIDpp173ehtGMrHmL2ilQlrt3FN469q4",
    authDomain: "food-central-44211.firebaseapp.com",
    databaseURL: "https://food-central-44211-default-rtdb.firebaseio.com",
    projectId: "food-central-44211",
    storageBucket: "food-central-44211.appspot.com",
    messagingSenderId: "1015093478430",
    appId: "1:1015093478430:web:b5ccd80a24a35f25951a0f"
  };
if(!firebase.apps.length){  
  firebase.initializeApp(firebaseConfig);
}




const App = () => {

  const Stack = createStackNavigator();
  return(
 <NavigationContainer>
<Stack.Navigator>
  <Stack.Screen
    name  = 'splash'
    component={SplashScreen}
    options={{header:()=> null }}
  />
   <Stack.Screen
    name  = 'menu'
    component={MenuItems}
    options = {{ header : () => null }}
  />
    <Stack.Screen
              name  = 'orderType'
              component={OrderAndSuccess}
              options={{header:()=>null}}
           />
           
</Stack.Navigator>
</NavigationContainer>  

//  <>
//    <Completed />
//  </>

);

}  

export default App;
