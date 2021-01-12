import React from "react";
import{Text,StyleSheet,FlatList,View, Image} from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import Resultbox from "../components/Resultbox";


const memeselectorhome=({navigation})=>{
    const id = navigation.getParam('url');
    const upper="https://firebasestorage.googleapis.com/v0/b/picameme-3c3a9.appspot.com/o/appassets%2FWhatsApp%20Image%202020-07-06%20at%204.38.56%20PM%20(1).jpeg?alt=media&token=3cdc3d1d-8b37-486a-b540-fc93bdc53003"
    const both= "https://firebasestorage.googleapis.com/v0/b/picameme-3c3a9.appspot.com/o/appassets%2FWhatsApp%20Image%202020-07-06%20at%204.38.56%20PM.jpeg?alt=media&token=ae6b3bcb-1936-45d8-98d0-47289bc7678b"
    return(<ScrollView style={{backgroundColor:"black"}}>
    <View style={{flex:1,backgroundColor:"black"}}>
               <TouchableOpacity onPress={()=>navigation.navigate("Home2" , {url : id})}>
        <View style={{height:240}}>
     
        <Resultbox pass = {both} text={"Text on Header And Bottom"}/>
    </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Home3" , {url : id})}>
        <View style={{height:240}}>
     
        <Resultbox pass = {upper} text={"Add Text Only At Header"}/>
    </View>
            </TouchableOpacity>
          </View></ScrollView>
    );

};

    const styles = StyleSheet.create({

       
        
        });
 export default memeselectorhome;