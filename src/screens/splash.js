import React, { Component, useState, useEffect } from 'react';
import {StyleSheet,View,Image,Text, ActivityIndicator} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { getimages } from '../firebase/Firebaseapi';
import { FlatList, TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

import Headera from '../components/header';
import Navbar from '../components/Navbar';

const splash =  ({navigation})=>{
 const [transfer,settransfer]= useState([]);
 const [load,setload]=useState(true);

 useEffect(()=>{
  getimages(settransfer,setload);
  },[]);

  

console.log("71827");


   return(  <View style= {{flex:1 , backgroundColor:"black"}}>
     <Headera />
       {load ? <View style={{flex:1,alignContent:"center"}}><Image  style={{ height:"100%",
    width: "100%"}}
        source={require("../../images/splash.jpg") } /> 
        <ActivityIndicator  size="large" color="#CD853F"/>
  </View>: 
   <View style={{flex:1,width:"100%",flexDirection:"row",}}>
      
      <Navbar nav={navigation} pop={"#E25822"} tem={"white"} edi={"white"} tren={"white"} star={"white"}/>
       <View style={styles.container}>
       <View style={{height:40,width:"100%",marginBottom:15,marginTop:15}}>
       <Text style={{color:"white",textAlign:"center",fontWeight:"bold",fontSize:30 }}>POPULAR</Text>
     </View>
<FlatList
data={transfer}
keyExtractor={(results) =>{return `${results.id}`}}
renderItem={({item})=>{
  
    return<View style={{width:"100%" ,flex:1}}>
     <TouchableOpacity onPress={()=>navigation.navigate("Home1" , {url :`${item.image}`})}>
     <View style = {styles.container1}>
            <Image source={{ uri : `${item.image}`}} style={styles.image}/>

        </View>
    </TouchableOpacity></View>
}}/>
</View>

       </View>}
       </View>
     );};

const styles = StyleSheet.create({


  container: {
      height:"100%",
    backgroundColor: "#2D2D2D",
    flex:1,
    width:"100%",
    flexDirection:"column"
  }, container1:{marginLeft:5,
marginRight:5,
    width:"100%",
    borderWidth:3,
    marginBottom:5,
    borderColor:"black",
    borderRadius:5,
    flex:1,
},
image:{
    width:"100%",
    height:170,    
    borderRadius:5
},
 
});

export default splash;
