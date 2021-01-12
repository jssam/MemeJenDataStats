import React, { useState, useEffect} from "react";
import{Text,StyleSheet,View,ToastAndroid,Image, ActivityIndicator} from "react-native";
import ImagePicker from 'react-native-image-crop-picker';
import {TextInput, ScrollView,TouchableOpacity } from "react-native-gesture-handler";
import { uploadImage} from "../firebase/Firebaseapi";
import { getmeme } from "../firebase/Meme";
import { ColorPicker } from 'react-native-color-picker';

import Navbar from "../components/Navbar";
import Headera from "../components/header";

const uploadimage =  ({navigation})=>{
  const newurl = navigation.getParam('url');
  const firnewurl = navigation.getParam('fiurl');

  const [selectedImage, setSelectedImage] = useState("https://firebasestorage.googleapis.com/v0/b/picameme-3c3a9.appspot.com/o/appassets%2FWhatsApp%20Image%202020-07-12%20at%2010.58.05%20PM.jpeg?alt=media&token=77c0873f-7f6a-48e2-b7a0-076f21a982f5");
  const [ImageUrl, setImageUrl] = useState("");
  const [firsttext, setfirsttext] = useState("");
  const [secondttext, setsecondtext] = useState("");
  const [load,setload]=useState(false);
  const [color, setcolor] = useState("#000000");
 
  console.log(firsttext);
 console.log("newurl "+ newurl);
  const transfer=(newurl,firnewurl)=>{
    if (newurl==null){
      setSelectedImage("https://firebasestorage.googleapis.com/v0/b/picameme-3c3a9.appspot.com/o/appassets%2FWhatsApp%20Image%202020-07-12%20at%2010.58.05%20PM.jpeg?alt=media&token=77c0873f-7f6a-48e2-b7a0-076f21a982f5")
    }else if(newurl=="https://firebasestorage.googleapis.com/v0/b/picameme-3c3a9.appspot.com/o/appassets%2FWhatsApp%20Image%202020-07-12%20at%2010.58.05%20PM.jpeg?alt=media&token=77c0873f-7f6a-48e2-b7a0-076f21a982f5"){
      setSelectedImage("https://firebasestorage.googleapis.com/v0/b/picameme-3c3a9.appspot.com/o/appassets%2FWhatsApp%20Image%202020-07-12%20at%2010.58.05%20PM.jpeg?alt=media&token=77c0873f-7f6a-48e2-b7a0-076f21a982f5")
    }
    else{
      setSelectedImage(newurl)
      setImageUrl(firnewurl)
    }
    
  }

  useEffect(()=>{
    transfer(newurl,firnewurl)
    },[]);
 
  pickImageHandler = (uploadImage,setload) => {
    ImagePicker.openPicker({ compressImageQuality: 0.5, compressImageMaxWidth: 1000, compressImageMaxHeight: 1000, cropping: true,freeStyleCropEnabled:true })
    .then(response => {
      if (response.error) {
        console.log('Please choose image from gallery')
      } else {
        if (response.path == null) {
          ToastAndroid.show("Please select the image", ToastAndroid.SHORT);
        } else {
          console.log("Image: " + response.path)
          setSelectedImage(response.path);
          const selectimage1 = (response.path)
          try{uploadImage(selectimage1,setImageUrl,setload);}catch(err){ToastAndroid.show("Please Check Internet", ToastAndroid.SHORT);}}
        }
      }
    ).catch((err) => { console.log("you can select new image") })
  }
  pickClickHandler = (uploadImage,setload) => {
    ImagePicker.openCamera({ compressImageQuality: 0.5, compressImageMaxWidth: 1000, compressImageMaxHeight: 1000, cropping: true,freeStyleCropEnabled:true })
    .then(response => {
      if (response.error) {
        console.log('Please choose image from gallery')
      } else {
        if (response.path == null) {
          ToastAndroid.show("Please select the image", ToastAndroid.SHORT);
        } else {
          console.log("Image: " + response.path)
          setSelectedImage(response.path);
          const selectimage1 = (response.path)
          try{uploadImage(selectimage1,setImageUrl,setload);}catch(err){ToastAndroid.show("Please Check Internet", ToastAndroid.SHORT);}}
        }
      }
    ).catch((err) => { console.log("you can select new image") })
  }
  

  return (<View style= {{flex:1 , backgroundColor:"black"}}><Headera/>
    {load ? <View style={{flex:1,alignContent:"center"}}><Image  style={{ height:"70%", resizeMode:'contain',
    width: "100%"}}
        source={require("../../images/pica.gif") } /> 
        <ActivityIndicator  size="large" color="#CD853F"/>
  </View>: 
    <View style= {{flex:1 , backgroundColor:"black",flexDirection:"row"}}>
      <View  style={styles.container}>
      <View style={{height:80,width:"100%",marginBottom:30,marginTop:15,flexDirection:"row"}}>
      <View style={{ marginLeft: "3%" }}>
              <TouchableOpacity onPress={()=>navigation.replace("Uploadboth" , {url :`${selectedImage}`,fiurl :`${ImageUrl}`})}>
                <Image style={{ height: 60, width: 60 }}
                  source={require("../../images/upIcon1.png")} />
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 10 }}>Text at</Text>
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 10 }}>Image</Text>
              </TouchableOpacity></View>
            <View style={{ marginLeft: "3%" }}>
              <TouchableOpacity>
                <Image style={{ height: 60, width: 60 }}
                  source={require("../../images/UpIcon4.png")} />
                <Text style={{ color: "#CD853F", textAlign: "center", fontWeight: "bold", fontSize: 10 }}>Text Over</Text>
                <Text style={{ color: "#CD853F", textAlign: "center", fontWeight: "bold", fontSize: 10 }}>Image</Text>

              </TouchableOpacity></View>
            <View style={{ marginLeft: "3%" }}>
              <TouchableOpacity onPress={()=>navigation.replace("Vertical")}>
                <Image style={{ height: 60, width: 60 }}
                  source={require("../../images/UpIcon3.png")} />
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 10 }}>Concatenate</Text>
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 10 }}>Vertical</Text>
              </TouchableOpacity></View>
            <View style={{ marginLeft: "3%" }}>
              <TouchableOpacity onPress={()=>navigation.replace("Horizontal")}>
                <Image style={{ height: 60, width: 60 }}
                  source={require("../../images/upIcon2.png")} />
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 10 }}>Concatenate</Text>
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 10 }}>Horizontal</Text>
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
/></View>
<View style={styles.imageContainer}>
<TouchableOpacity onPress={()=>this.pickImageHandler(uploadImage,setload)}>
<View style={styles.imageContainer2}>

  <Image source={{uri:`${selectedImage}`}} style={styles.previewImage} />

</View>
</TouchableOpacity>
</View>
<View    style={{ position: "absolute", bottom:20, right: 5 }}>
    <ColorPicker
      onColorSelected={color => {setcolor(`${color}`);console.log(color);}}
      style={{ height: 100, width: 100 }}
    /></View>

<View  style={{ position: "absolute", bottom:190, right: 18 }}>
      <TouchableOpacity onPress={()=>this.pickClickHandler(uploadImage,setload)}>
      <Image style={{height:60,width:60}}
        source={require("../../images/camera.png") } /> 


      </TouchableOpacity>
  </View>
   <View  style={{ position: "absolute", bottom:120, right: 18 }}>
      <TouchableOpacity onPress={()=>getmeme(setload,ImageUrl,firsttext,secondttext,color,(memeUrl)=>{navigation.navigate("Memestar",{memeurl: memeUrl})})}>
      <Image style={{height:60,width:60}}
        source={require("../../images/tick.png") } /> 


      </TouchableOpacity>
  </View>
    </View>
</View>}
        </View>
 
 
  )
}

uploadimage.navigationOptions=()=>{
  return{
headerStyle:styles.navbar
  };
}

const styles = StyleSheet.create({
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
  }, textinputcontainer:{
    borderLeftColor: 'black',
    borderRightColor: 'black',
    marginHorizontal:10,
    width: '93%',
    height: 77,
  }, imageContainer: {
    borderColor: 'white',
    backgroundColor: 'black',
    width: '93%',
    height: "65%",
    marginLeft:10

  },imageContainer2: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
  },container: {
    height:"100%",
  backgroundColor: "#2D2D2D",
  flex:1,
  width:"100%",
  flexDirection:"column"
  },
})

export default uploadimage;