import React from 'react';
import {
  Text,
  View,
  StyleSheet,  
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import LottieView from 'lottie-react-native';

const OrderCancellation= ({navigation}) =>{
    return(
   
        <ImageBackground
        style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }}
        source={require('../assets/error.jpeg')}
        >
       <Text
       style={{
           fontWeight:'bold',
           fontSize:20
       }}>
         we're still working on this feature !!
           
    </Text>
    <Text
       style={{
           fontWeight:'bold',
           fontSize:20
       }}>
         for now orders cannot be cancelled*
           
    </Text>
        </ImageBackground>
    

    );
}

export default OrderCancellation; 