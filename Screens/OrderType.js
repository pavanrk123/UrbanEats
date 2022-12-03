import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  ImageBackground,
  Alert,
  TextInput,
  TouchableOpacity
} from 'react-native';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firestore, { firebase } from '@react-native-firebase/firestore'
import Completed from './Completed';
import PushNotification from 'react-native-push-notification';
import OrderCancellation from './OrderCancellation';
import LottieView from 'lottie-react-native';



const showNoti = ()=>{
    PushNotification.localNotification({
        channelId:"t-channel",
        title:"OM namah shivaay",
        message:"jai mahakal",
        // bigText:'Om Namah shivay'
    })
}






const OrderType = ({navigation}) =>{

 const [order1,setOrder1] = useState('')
 const [order2,setOrder2] = useState('')
 const [order3,setOrder3] = useState('')
 const [order4,setOrder4] = useState('')
 const [order5,setOrder5] = useState('')

const setData = async() => {
    if(order1.length===0 && order2.length===0 && order3.length===0 && order4.length===0 && order5.length===0){
        Alert.alert("Oops!!",'orders are empty')
    }
    else{
  try{
   await AsyncStorage.setItem('order1',order1);
   await AsyncStorage.setItem('order2',order2);
   await AsyncStorage.setItem('order3',order3);
   await AsyncStorage.setItem('order4',order4);
   await AsyncStorage.setItem('order5',order5);
   navigation.navigate('passorder')
}
  catch(e){
  console.log(e)
  }
    }
 }
    return(
        <ImageBackground
        style={{flex:1 ,justifyContent:'center',alignItems:'center'}}
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQizxqGHEq2XJuPlAgAOpLsGFR4CtIQUCE3XQ&usqp=CAU'}}>
           
      
            <TextInput
            onChangeText={(val)=>{setOrder1(val)}}
           style={{borderColor:'black',width:350,borderWidth:3,borderRadius:10,margin:30,
          
           }} 
               placeholder='item 1 , with quantity'
           />
            <TextInput
             onChangeText={(val)=>{setOrder2(val)}}
           style={{borderColor:'black',width:350,borderWidth:3,borderRadius:10,margin:30}} 
               placeholder='item 2 , with quantity'
           />
            <TextInput
             onChangeText={(val)=>{setOrder3(val)}}
           style={{borderColor:'black',width:350,borderWidth:3,borderRadius:10,margin:30}} 
               placeholder='item 3 , with quantity'
           />
            <TextInput
            onChangeText={(val)=>{setOrder4(val)}}
           style={{borderColor:'black',width:350,borderWidth:3,borderRadius:10,margin:30}} 
               placeholder='item 4 , with quantity'
           />
            <TextInput
             onChangeText={(val)=>{setOrder5(val)}}
           style={{borderColor:'black',width:350,borderWidth:3,borderRadius:10,margin:30}} 
               placeholder='item 5 , with quantity'
           />
   <TouchableOpacity
     onPress={(setData)}
   >
       <View style={{
           backgroundColor:'black',
           height:60,
           width:300,
           borderRadius:20,
           alignItems:'center',
           justifyContent:'center'
       }}>
           <Text style={{color:'white'}}>
            !! 🥳 🥳 🥳 place order !!
           </Text>
       </View>
   </TouchableOpacity>
        </ImageBackground>
            );
}






//passOrders
const PassOrders=({navigation}) => {


    const[Food1,setFood1] = useState('')
    const[Food2,setFood2] = useState('')
    const[Food3,setFood3] = useState('')
    const[Food4,setFood4] = useState('')
    const[Food5,setFood5] = useState('')

useEffect(()=>{
 getData();
},[])
    const getData = () =>{
        try{
            AsyncStorage.getItem('order1').then(val=>{
              setFood1(val)
            })
            AsyncStorage.getItem('order2').then(val=>{
                setFood2(val)
              })
              AsyncStorage.getItem('order3').then(val=>{
                setFood3(val)
              })
              AsyncStorage.getItem('order4').then(val=>{
                setFood4(val)
              })
              AsyncStorage.getItem('order5').then(val=>{
                setFood5(val)
              })
        }
        catch(e){
            console.log(e)
        }
    }
    const [loading,setLoading] = useState(false)
    const[number,setNumber] = useState('')
    const[name,setName] = useState('')
    const[address,setAddress] = useState('')

    const orderCollection = firestore().collection('orders')

    const setOrder = () =>{
        if(name.length ===0 || number.length ===0 || address.length ===0){
            Alert.alert("Oops!!",'some field is empty')
        }
        else{
            setLoading(true)
            orderCollection.add({
                name:name,
                number:number,
                address:address,
                order1:Food1,
                order2:Food2,
                order3:Food3,
                order4:Food4,
                order5:Food5,
                createdAt:firebase.firestore.FieldValue.serverTimestamp(),
            }).then(()=>{
                setTimeout(()=>{
                    setLoading(false)
                    navigation.navigate('completed')
                },3000)
          })
        }
    }

  return(
      <>
      <View style={{
          flex:1,
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
         
      }}>
      <View
      style={{
          marginBottom:50
      }}>
      <Text
    style={{
      fontFamily:'bold',
      fontSize:32
    }}>
 Ｅａｔ Ｃｅｎｔｒａｌ    
  </Text>
    </View>
      <Text
      style={{
          fontWeight:'bold'
      }}>
         🤟  Your Orders are :
      </Text>
          <Text
          style={{
              fontWeight:'bold',
              fontSize:20,
              color:'black'
          }}>
             😎 {Food1},
          </Text>
          <Text
          style={{
            fontSize:20,
            color:'black',
              fontWeight:'bold'
          }}>
              😍 {Food2},
          </Text>
          <Text
          style={{
            fontSize:20,
              fontWeight:'bold',
              color:'black'
          }}>
             🤤 {Food3},
          </Text>
          <Text
          style={{
            fontSize:20,
              fontWeight:'bold',
              color:'black'
          }}>
             😋 {Food4},
          </Text>
          <Text
          style={{
             fontSize:20,
              fontWeight:'bold',
              color:'black'
          }}>
             😅 {Food5}
          </Text>
          <View>
          <TextInput
          onChangeText={(val)=>{setName(val)}}
           style={{borderColor:'black',width:300,borderWidth:3,borderRadius:30,margin:10,fontWeight:'bold'}} 
               placeholder='enter your name 😇'
           /> 
          </View>
          <TextInput
          onChangeText={(val)=>{setNumber(val)}}
           style={{borderColor:'black',width:300,borderWidth:3,borderRadius:30,margin:10,fontWeight:'bold'}} 
               placeholder='enter your contact number 😇'
           /> 
            <TextInput
           onChangeText={(val)=>{setAddress(val)}}
           style={{borderColor:'black',width:300,borderWidth:3,borderRadius:30,margin:10,fontWeight:'bold'}} 
               placeholder='enter block address with class number 😇'
           /> 
         <TouchableOpacity
         onPress={(setOrder)}
            >
       <View style={{
           backgroundColor:'black',
           height:60,
           width:350,
           borderRadius:20,
           alignItems:'center',
           justifyContent:'center',
           marginTop:30
       }}>
           <Text style={{color:'white'}}>
              less Goo  !!🥳🥳
           </Text>
       </View>
   </TouchableOpacity>
      </View>

      {loading ? (
        <View
          style={{
            backgroundColor: "black",
            position: "absolute",
            opacity: 0.9,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <LottieView
            style={{ height: 200 }}
          source={require("../assets/38856-emoji-sorprendido.json")}
            autoPlay
            speed={1}
          />
        </View>
      ):(
          <></>
      )}


      </>
   )
  

  
    }





 const OrderAndSuccess=({navigaton})=>{
    const Stack = createStackNavigator();
    return(
        <NavigationContainer
        independent={true}
        >
       <Stack.Navigator
        screenOptions={{
                header:()=>null
            }}
       >
           <Stack.Screen
               name='orderType'
               component={OrderType}
            screenOptions={{
                header:()=>null
            }}
           />
           <Stack.Screen
               name='passorder'
               component={PassOrders}
               screenOptions={{
                header:()=>null
            }}
           />
           <Stack.Screen
          name  = 'completed'
    component={Completed}
    options={{header:()=>null}}
  />
   <Stack.Screen
               name='ordercancellation'
               component={OrderCancellation}
               screenOptions={{
                header:()=>null
            }}
           />
       </Stack.Navigator>
        </NavigationContainer>
    );
}


export default OrderAndSuccess;
