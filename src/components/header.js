import React from "react";
import{View,Text, Image} from "react-native";



const Headera=({navigation})=>{
    return(  
        <View style={{backgroundColor:"black",alignContent:"center",textAlign:"center",alignContent:"center"}}>

        <Text style={{textAlign:"center",fontSize:22,marginTop:10,marginBottom:10,fontWeight:"bold",color:"#CD853F"}}>
        Meme Jen</Text>
        </View>
    // <View style={{height:50,width:"100%",color:"black",borderBottomRightRadius:100}}>
    // <Image  style={{ height:50, resizeMode:'contain',
    // width: "100%"}}
    //     source={require("../../images/logo1.jpg") } /> 
    // </View>
    );};

    export default Headera;