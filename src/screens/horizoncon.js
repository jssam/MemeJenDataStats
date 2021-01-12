import React, { useState, useEffect} from "react";
import{Text,StyleSheet,View,ToastAndroid,Image,Alert, ActivityIndicator} from "react-native";
import ImagePicker from 'react-native-image-crop-picker';
import {TextInput, ScrollView,TouchableOpacity } from "react-native-gesture-handler";
import { uploadImage} from "../firebase/Firebaseapi";
import { horizontal } from "../firebase/Meme";

import Headera from "../components/header";
import Navbar from "../components/Navbar";

const horizocon =  ({navigation})=>{
  const newurl = navigation.getParam('url');
  const newurltwo = navigation.getParam('urltwo');
  const firnewurl = navigation.getParam('fiurl');
  const firnewurltwo = navigation.getParam('fiurltwo');
  const [selectedImage, setSelectedImage] = useState("https://firebasestorage.googleapis.com/v0/b/picameme-3c3a9.appspot.com/o/appassets%2FWhatsApp%20Image%202020-07-12%20at%2010.58.05%20PM.jpeg?alt=media&token=77c0873f-7f6a-48e2-b7a0-076f21a982f5");
  const [selectedImagetwo, setSelectedImagetwo] = useState("https://firebasestorage.googleapis.com/v0/b/picameme-3c3a9.appspot.com/o/appassets%2FWhatsApp%20Image%202020-07-12%20at%2010.58.05%20PM.jpeg?alt=media&token=77c0873f-7f6a-48e2-b7a0-076f21a982f5");
  const [ImageUrl, setImageUrl] = useState("");
  const [ImageUrltwo, setImageUrltwo] = useState("");
  const [load,setload]=useState(false);
 
  const transfer=(newurl,firnewurl)=>{
    console.log("123")
    if (newurl==null){
      setSelectedImage("https://firebasestorage.googleapis.com/v0/b/picameme-3c3a9.appspot.com/o/appassets%2FWhatsApp%20Image%202020-07-12%20at%2010.58.05%20PM.jpeg?alt=media&token=77c0873f-7f6a-48e2-b7a0-076f21a982f5")
    }else if(newurl=="https://firebasestorage.googleapis.com/v0/b/picameme-3c3a9.appspot.com/o/appassets%2FWhatsApp%20Image%202020-07-12%20at%2011.05.00%20PM.jpeg?alt=media&token=8db83fd4-cc31-4d6d-be5e-d419401af177"){
      setSelectedImage("https://firebasestorage.googleapis.com/v0/b/picameme-3c3a9.appspot.com/o/appassets%2FWhatsApp%20Image%202020-07-12%20at%2010.58.05%20PM.jpeg?alt=media&token=77c0873f-7f6a-48e2-b7a0-076f21a982f5")
    }
    else{
      setSelectedImage(newurl)
      setImageUrl(firnewurl)
    }
    
  }
  const transfertwo=(newurltwo,firnewurltwo)=>{
    console.log("676")
    if (newurltwo==null){
      setSelectedImagetwo("https://firebasestorage.googleapis.com/v0/b/picameme-3c3a9.appspot.com/o/appassets%2FWhatsApp%20Image%202020-07-12%20at%2010.58.05%20PM.jpeg?alt=media&token=77c0873f-7f6a-48e2-b7a0-076f21a982f5")
    }else if(newurltwo=="https://firebasestorage.googleapis.com/v0/b/picameme-3c3a9.appspot.com/o/appassets%2FWhatsApp%20Image%202020-07-12%20at%2011.05.00%20PM.jpeg?alt=media&token=8db83fd4-cc31-4d6d-be5e-d419401af177"){
      setSelectedImagetwo("https://firebasestorage.googleapis.com/v0/b/picameme-3c3a9.appspot.com/o/appassets%2FWhatsApp%20Image%202020-07-12%20at%2010.58.05%20PM.jpeg?alt=media&token=77c0873f-7f6a-48e2-b7a0-076f21a982f5")
    }
    else{
      setSelectedImagetwo(newurltwo)
      setImageUrltwo(firnewurltwo)
    }
    
  }



  useEffect(()=>{
    transfer(newurl,firnewurl),
    transfertwo(newurltwo,firnewurltwo)
      },[]);


 
  const createTwoButtonAlert = (uploadImage,setload) =>
      Alert.alert(
        "Select",
        "Image from",
        [
          {
            text: "Gallery",
            onPress: () => pickImageHandler(uploadImage,setload),
            style: "cancel"
          },
          { text: "Camera", onPress: () => pickClickHandler(uploadImage,setload) }
        ],
        { cancelable: true }
      );
  
const createTwoButtonAlerttwo = (uploadImage,setload) =>
      Alert.alert(
        "Select",
        "Image from",
        [
          {
            text: "Gallery",
            onPress: () => pickImageHandlertwo(uploadImage,setload),
            style: "cancel"
          },
          { text: "Camera", onPress: () => pickClickHandlertwo(uploadImage,setload) }
        ],
        { cancelable: true }
      );
  

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
          try{uploadImage(selectimage1,setImageUrl,setload);}catch(err){     ToastAndroid.show("No Internert Connection", ToastAndroid.SHORT);}}
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
            try{uploadImage(selectimage1,setImageUrl,setload);}catch(err){     ToastAndroid.show("No Internert Connection", ToastAndroid.SHORT);}}
          }
        }
      ).catch((err) => { console.log("you can select new image") })
    }
  pickImageHandlertwo = (uploadImage,setload) => {
    ImagePicker.openPicker({ compressImageQuality: 0.5, compressImageMaxWidth: 1000, compressImageMaxHeight: 1000, cropping: true,freeStyleCropEnabled:true })
    .then(response => {
      if (response.error) {
        console.log('Please choose image from gallery')
      } else {
        if (response.path == null) {
          ToastAndroid.show("Please select the image", ToastAndroid.SHORT);
        } else {
          console.log("Image: " + response.path)
          setSelectedImagetwo(response.path);
          const selectimage2 = (response.path)
          try{uploadImage(selectimage2,setImageUrltwo,setload);}catch(err){     ToastAndroid.show("Please Check Internet", ToastAndroid.SHORT);}}
        }
      }
    ).catch((err) => { console.log("you can select new image") })
  }
  pickClickHandlertwo = (uploadImage,setload) => {
    ImagePicker.openCamera({ compressImageQuality: 0.5, compressImageMaxWidth: 1000, compressImageMaxHeight: 1000, cropping: true,freeStyleCropEnabled:true })
    .then(response => {
      if (response.error) {
        console.log('Please choose image from gallery')
      } else {
        if (response.path == null) {
          ToastAndroid.show("Please select the image", ToastAndroid.SHORT);
        } else {
          console.log("Image: " + response.path)
          setSelectedImagetwo(response.path);
          const selectimage2 = (response.path)
          try{uploadImage(selectimage2,setImageUrltwo,setload);}catch(err){     ToastAndroid.show("Please Check Internet", ToastAndroid.SHORT);}}
        }
      }
    ).catch((err) => { console.log("you can select new image") })
  }
  
  

  return (<View style= {{flex:1 , backgroundColor:"black"}}>
    <Headera/>
    {load ? <View style={{flex:1,alignContent:"center"}}><Image  style={{ height:"70%", resizeMode:'contain',
    width: "100%"}}
        source={require("../../images/pica.gif") } /> 
        <ActivityIndicator  size="large" color="#CD853F"/>
        </View>: 
    <View style= {{flex:1 , backgroundColor:"black",flexDirection:"row"}}>
  <View  style={styles.container}>
  <View style={{height:80,width:"100%",marginBottom:30,marginTop:10,flexDirection:"row"}}>
  <View style={{ marginLeft: "3%" }}>
              <TouchableOpacity onPress={()=>navigation.replace("Uploadboth")}>
                <Image style={{ height: 60, width: 60 }}
                  source={require("../../images/upIcon1.png")} />
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 10 }}>Text at</Text>
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 10 }}>Image</Text>
              </TouchableOpacity></View>
            <View style={{ marginLeft: "3%" }}>
              <TouchableOpacity onPress={()=>navigation.replace("uploadtop")}>
                <Image style={{ height: 60, width: 60 }}
                  source={require("../../images/UpIcon4.png")} />
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 10 }}>Text Over</Text>
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 10 }}>Image</Text>

              </TouchableOpacity></View>
            <View style={{ marginLeft: "3%" }}>
              <TouchableOpacity onPress={()=>navigation.replace("Vertical",{url :`${selectedImage}`,urltwo :`${selectedImagetwo}`,fiurl :`${ImageUrl}`,fiurltwo :`${ImageUrltwo}`})}>
                <Image style={{ height: 60, width: 60 }}
                  source={require("../../images/UpIcon3.png")} />
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 10 }}>Concatenate</Text>
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 10 }}>Horizontal</Text>
              </TouchableOpacity></View>
            <View style={{ marginLeft: "3%" }}>
              <TouchableOpacity >
                <Image style={{ height: 60, width: 60 }}
                  source={require("../../images/upIcon2.png")} />
                <Text style={{ color: "#CD853F", textAlign: "center", fontWeight: "bold", fontSize: 10 }}>Concatenate</Text>
                <Text style={{ color: "#CD853F", textAlign: "center", fontWeight: "bold", fontSize: 10 }}>Horizontal</Text>
              </TouchableOpacity></View>
          </View>
<View style={styles.imageContainer}>
<TouchableOpacity onPress={()=>createTwoButtonAlert(uploadImage,setload)}>
<View style={styles.imageContainer2}>

  <Image source={{uri:`${selectedImage}`}} style={styles.previewImage} />

</View>
</TouchableOpacity>
</View>
<View style={styles.imageContainer}>
<TouchableOpacity onPress={()=>createTwoButtonAlerttwo(uploadImage,setload)}>
<View style={styles.imageContainer2}>

  <Image source={{uri:`${selectedImagetwo}`}} style={styles.previewImage} />

</View>
</TouchableOpacity>
</View>
   <View style={{ position: "absolute", bottom:20, right: 5 }}>
      <TouchableOpacity onPress={()=>horizontal(setload,ImageUrl,ImageUrltwo,(memeUrl)=>{navigation.navigate("Meme",{memeurl: memeUrl})})}>
      <Image style={{height:60,width:60}}
        source={require("../../images/tick.png") } /> 
      </TouchableOpacity>
      </View>
    </View>
</View>}
        </View>
 
 
  )
}



const styles = StyleSheet.create({
previewImage: {
    flex:1,
    width: "100%",
    height: "100%", resizeMode:'contain'
  }, imageContainer: {
    borderColor: 'black',
    backgroundColor: 'black',
    width: '100%',
    height: "39%",

    marginTop:1

  },imageContainer2: {
    width: "100%",
    height: "100%",
  },container: {
    height:"100%",
  backgroundColor: "#2D2D2D",
  flex:1,
  width:"100%",
  flexDirection:"column"
  },

})

export default horizocon;