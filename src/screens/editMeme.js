import React, { useState} from "react";
import{StyleSheet,View, Image, ToastAndroid, Text, ActivityIndicator} from "react-native";
import {TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { getmeme } from "../firebase/Meme";
import Navbar from "../components/Navbar";
import Headera from "../components/header";
import { ColorPicker } from 'react-native-color-picker';

const editMeme=({navigation})=>{
    const id = navigation.getParam('url');
    const [firsttext, setfirsttext] = useState("");
    const [secondttext, setsecondtext] = useState("");
    const [load,setload]=useState(false);
    const [color, setcolor] = useState("#000000");
    console.log(load)
return(
<View style= {{flex:1 , backgroundColor:"black"}}>
<Headera/>
{load ?<View style={{flex:1,alignContent:"center"}}><Image  style={{ height:"70%", resizeMode:'contain',
    width: "100%"}}
        source={require("../../images/pica.gif") } /> 
        <ActivityIndicator  size="large" color="#CD853F"/>
  </View>: 
     <View style= {{flex:1 , backgroundColor:"#2D2D2D",flexDirection:"row"}}>
       <View  style={styles.container}>
  

       <View style={{height:80,width:"100%",marginBottom:30,marginTop:10,flexDirection:"row"}}>
<View style={{marginLeft:"3%"}}>
      <TouchableOpacity >
      <Image style={{height:60,width:60}}
        source={require("../../images/UpIcon4.png") } /> 
         <Text style={{color:"#CD853F",textAlign:"center",fontWeight:"bold",fontSize:10 }}>Text Over</Text>
         <Text style={{color:"#CD853F",textAlign:"center",fontWeight:"bold",fontSize:10 }}>Image</Text>
      </TouchableOpacity></View>
      <View style={{marginLeft:"3%"}}>
      <TouchableOpacity onPress={()=>{navigation.replace("both",{url: `${id}`})}}>
      <Image style={{height:60,width:60}}
        source={require("../../images/upIcon1.png") } /> 
         <Text style={{color:"white",textAlign:"center",fontWeight:"bold",fontSize:10 }}>Text at</Text>
         <Text style={{color:"white",textAlign:"center",fontWeight:"bold",fontSize:10 }}>Image</Text>
      </TouchableOpacity></View>
     </View>

        <View style={styles.textinputcontainer}>
      <TextInput style={styles.textinput}
autoCapitalize = "none"
autoCorrect={false}
placeholder ="Add First Line"
value={firsttext}
onChangeText={setfirsttext}
/>
<TextInput style={styles.textinput}
autoCapitalize = "none"
autoCorrect={false}
placeholder ="Add Second Line"
value={secondttext}
onChangeText={setsecondtext}
/>
</View>
      <View style={styles.imageContainer}>
        <Image source={{uri:id}} style={styles.previewImage} />
      </View>
      <View    style={{ position: "absolute", bottom:20, right: 5 }}>
    <ColorPicker
      onColorSelected={color => {setcolor(`${color}`);console.log(color);}}
      style={{ height: 100, width: 100 }}
    /></View>
      <View style={{position: "absolute", bottom:120, right: 18 }}>
      <TouchableOpacity  onPress={()=>getmeme(setload,id,firsttext,secondttext,color,(memeUrl)=>{navigation.navigate("Meme",{memeurl: memeUrl})})}>
      <Image style={{height:60,width:60}}
        source={require("../../images/tick.png") } /> 
      </TouchableOpacity>
  </View>
    </View>
     

      </View>

}
    
     </View>  
    


);};
const styles=StyleSheet.create({
  textinput: {
    width:"100%",
    fontSize:18,
    borderRadius:2,
    padding:5,
    backgroundColor:'#CD853F',
   color:"white"
  },  previewImage: {
    flex:1,
    width: "100%",
    height: "100%", resizeMode:'contain'
  },  textinputcontainer:{
    borderLeftColor: 'black',
    borderRightColor: 'black',
    marginHorizontal:10,
    width: '93%',
    height: 77,
  }, imageContainer: {
    borderColor: 'white',
    backgroundColor: 'black',
    width: '93%',
    height: "68%",
    marginLeft:10

  },container: {
    height:"100%",
  backgroundColor: "#2D2D2D",
  flex:1,
  width:"100%",
  flexDirection:"column"
  },

  navbar:{
    backgroundColor: 'red'},
})

export default editMeme;