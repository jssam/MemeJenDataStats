import React, { useState} from "react";
import{StyleSheet,View, Image, Button,Text} from "react-native";
import {TextInput, TouchableOpacity } from "react-native-gesture-handler";


const Navbar=({nav,pop,tem,edi,tren,star})=>{
    return(<View style={{ width:62,height:"100%" ,backgroundColor:"#CD853F"}}>
    <View style={{ width:58,height:"100%" ,backgroundColor:"#2D2D2D", borderTopRightRadius:20,borderBottomRightRadius:20}}>
    <View style={{position:"absolute" ,top:15}}>
   <TouchableOpacity onPress={()=>nav.replace("Home")}>
   <Image style={{height:55,width:55}}
     source={require("../../images/leftIcon1.png") } /> 
       <Text style={{color:pop,textAlign:"center",fontWeight:"bold",fontSize:10 }}>Popular</Text>
       <Text style={{color:pop,textAlign:"center",fontWeight:"bold",fontSize:10 }}>Templates</Text>

   </TouchableOpacity></View>
   <View style={{position:"absolute" ,top:115}}>
   <TouchableOpacity onPress={()=>nav.replace("All")}>
   <Image style={{height:55,width:55}}
     source={require("../../images/leftIcon2.png") } /> 
           <Text style={{color:tem,textAlign:"center",fontWeight:"bold",fontSize:10 }}>All</Text>
           <Text style={{color:tem,textAlign:"center",fontWeight:"bold",fontSize:10 }}>Templates</Text>
   </TouchableOpacity></View>
   <View style={{position:"absolute" ,top:215}}>
   <TouchableOpacity onPress={()=>nav.navigate("Uploadboth")}>
   <Image style={{height:55,width:55}}
     source={require("../../images/leftIcon4.png") } /> 
           <Text style={{color:edi,textAlign:"center",fontWeight:"bold",fontSize:10 }}>Make</Text>
           <Text style={{color:edi,textAlign:"center",fontWeight:"bold",fontSize:10 }}>Yours</Text>
   </TouchableOpacity></View>
   <View style={{position:"absolute" ,top:315}}>
   <TouchableOpacity onPress={()=>nav.replace("Allprocessed")}>
   <Image style={{height:55,width:55}}
     source={require("../../images/fireIcon2.png") } /> 
           <Text style={{color:tren,textAlign:"center",fontWeight:"bold",fontSize:10 }}>Trending</Text>
           <Text style={{color:tren,textAlign:"center",fontWeight:"bold",fontSize:10 }}>Memes</Text>
   </TouchableOpacity></View>
   <View style={{position:"absolute" ,top:415}}>
   <TouchableOpacity onPress={()=>nav.replace("Superstar")}>
   <Image style={{height:55,width:55}}
     source={require("../../images/secretstar.png") } /> 
           <Text style={{color:star,textAlign:"center",fontWeight:"bold",fontSize:10 }}>Secret</Text>
           <Text style={{color:star,textAlign:"center",fontWeight:"bold",fontSize:10 }}>Stars</Text>
   </TouchableOpacity></View>
   
    </View>
    </View>
    );};

    export default Navbar;