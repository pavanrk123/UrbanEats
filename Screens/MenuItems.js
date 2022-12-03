import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const MenuItems = ({navigation}) => {
  const items = 
    [
      {name:'chicken Noodles',price:'150',key:'1',uri:'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bm9vZGxlc3xlbnwwfHwwfHw%3D&w=1000&q=80'},
      {name:'Egg Rice',price:'50',key:'89',uri:'https://media.vogue.in/wp-content/uploads/2020/11/Egg-fried-rice-1920x1080.jpg'},
      {name:'chicken Biryani',price:'130',key:'478',uri:'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg'},
      {name:'pullav',price:'40',key:'386',uri:'https://www.whiskaffair.com/wp-content/uploads/2019/05/Veg-Pulao-1-3.jpg'},
      {name:'chicken roll',price:'70',key:'378',uri:''}
    ]

   const letsGo = ()=>{
      navigation.navigate('orderType')
  }

  return(
    <View style={{
      backgroundColor:'white'
          }}>
      <ScrollView>
       {
         items.map((obj)=>{
          return(
            <View
         style={{
       justifyContent:"space-between",
       alignItems:'center',
       backgroundColor:'white',
       height:150,
       borderRadius:30,
       width:370,
       marginLeft:10,
       marginBottom:10,
       marginTop:10,
       flexDirection:'row',
       elevation:40,
       shadowColor:'red',
        shadowOffset:{
           width:0,
           height:10
         },
         shadowOpacity:1,
         shadowRadius:20

       }}
       key={obj.key}
     >
      <View
      style={styles.images}>
      <Image
           source={{uri:obj.uri}}
      style={styles.image}
       />
      </View>
     <View style={styles.sideview}>
     <View>
       <Text style={{
           fontSize:20,
           fontWeight:'bold'
       }}>
         {obj.name}
      </Text>
      </View>
     <View>
     <Text
     style={{
         fontSize:15,
         fontWeight:'bold'
     }}>
       {obj.price} 
        </Text>
     </View>
     </View>

       </View> 
          )
         })
       }
       <View>
     <TouchableOpacity
        onPress={letsGo}
            >
       <View style={{
           backgroundColor:'black',
           height:60,
           width:350,
           borderRadius:20,
           alignItems:'center',
           justifyContent:'center',
           marginTop:30,
           marginLeft:20,
           marginBottom:10,
           elevation:40,
       shadowColor:'pink',
        shadowOffset:{
           width:10,
           height:20
         },
         shadowOpacity:10,
         shadowRadius:40

       }}>
           <Text style={{color:'white'}}>
              lets type in orders🥰🥰🥰
           </Text>
       </View>
   </TouchableOpacity>
     </View>
     </ScrollView>
     </View>

  );
 }
const styles = StyleSheet.create({
    image:{
        height:150,
        width:150,
        borderBottomLeftRadius:30,
        borderTopLeftRadius:30,
        
    },
    images:{
        marginRight:50
    },
    sideview:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginRight:50
    }
})

export default MenuItems;
