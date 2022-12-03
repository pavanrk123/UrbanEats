
import React from 'react';
import {
  Text,
  View,
  StyleSheet ,
  TouchableOpacity 
} from 'react-native';
import LottieView from 'lottie-react-native';
import { ScrollView } from 'react-native-gesture-handler';


const Completed = ({navigation}) =>{

  const cancel = () => {
    navigation.navigate('ordercancellation')
  }
  return(
    <ScrollView>
  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
  <View style={{marginTop:60,marginLeft:30}}>
  <Text style={{fontSize:30}}>
  Ｅａｔ Ｃｅｎｔｒａｌ   </Text>
  <View>
  <Text style={{fontWeight:'600',fontSize:20,color:'black',marginLeft:40}}>
       order placed successfully
         </Text>
  <Text style={{fontWeight:'600',fontSize:20,color:'black',marginLeft:60}}>
       wait for 30-40 mins,
         </Text>
  </View>
  <View> 
  <Text style={{fontWeight:'600',fontSize:20,color:'black',marginLeft:60}}>
       we're on the way,🐼🍔!!
         </Text>
  </View>
  
  </View>
   
         <View
       >
         <LottieView
      style={Styles.cook}
      source={require('../assets/25523-wok-pan-food-fry-on-fire.json')}
      autoPlay
    />
         </View>
    
     <LottieView
      style={Styles.cookT}
      source={require('../assets/92443-deliver-delivery-food.json')}
      autoPlay
    />
        <TouchableOpacity
         onPress={(cancel)}
            >
       <View style={{
           backgroundColor:'black',
           height:60,
           width:350,
           borderRadius:20,
           alignItems:'center',
           justifyContent:'center',
           marginTop:30,
           marginBottom:30
       }}>
           <Text style={{color:'white'}}>
              cancel order
           </Text>
       </View>
   </TouchableOpacity>
  </View>
  </ScrollView>
  );
}
const Styles=StyleSheet.create({
  cook:{
   height:300,
   width:200
  },
  cookT:{
  height:400
  }
})

export default Completed;