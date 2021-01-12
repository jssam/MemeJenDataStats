import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View,ToastAndroid, Image, ActivityIndicator } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';
import { TextInput, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { uploadImage } from "../firebase/Firebaseapi";
import { getmemetypetwo } from "../firebase/Meme";
import { ColorPicker } from 'react-native-color-picker';
import Navbar from "../components/Navbar";
import Headera from "../components/header";

const uploadimagetypesecond = ({ navigation }) => {
  const newurl = navigation.getParam('url');
  const firnewurl = navigation.getParam('fiurl');

  const [selectedImage, setSelectedImage] = useState("https://firebasestorage.googleapis.com/v0/b/picameme-3c3a9.appspot.com/o/appassets%2FWhatsApp%20Image%202020-07-12%20at%2010.58.05%20PM.jpeg?alt=media&token=77c0873f-7f6a-48e2-b7a0-076f21a982f5");
  const [ImageUrl, setImageUrl] = useState("");
  const [firsttext, setfirsttext] = useState("");
  const [secondttext, setsecondtext] = useState("");
  const [color, setcolor] = useState("#FFFFFF");
  const [load, setload] = useState(false);
  
  console.log("firnewurl "+ firnewurl);
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
  
  pickImageHandler = (uploadImage, setload) => {
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
            try { uploadImage(selectimage1, setImageUrl, setload); } catch (err) {ToastAndroid.show("Please Check Internet", ToastAndroid.SHORT); }
          }
        }
      }
    ).catch((err) => { console.log("you can select new image") })
  }
  pickClickHandler = (uploadImage, setload) => {
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
            try { uploadImage(selectimage1, setImageUrl, setload); } catch (err) { ToastAndroid.show("Please Check Internet", ToastAndroid.SHORT);}
          }
        }
      }
    ).catch((err) => { console.log("you can select new image") })
  }
console.log(color);
  return (<View style={{ flex: 1, backgroundColor: "black" }}>
    <Headera />
    {load ? <View style={{ flex: 1, alignContent: "center" }}>
      <Image style={{ height: "70%", resizeMode: 'contain', width: "100%" }} source={require("../../images/pica.gif")} />
      <ActivityIndicator size="large" color="#CD853F" />
    </View> :
      <View style={{ flex: 1, backgroundColor: 'black', flexDirection: "row" }}>
        <View style={styles.container}>
          <View style={{ height: 80, width: "100%", marginBottom: 30, marginTop: 15, flexDirection: "row" }}>
            <View style={{ marginLeft: "3%" }}>
              <TouchableOpacity>
                <Image style={{ height: 60, width: 60 }}
                  source={require("../../images/upIcon1.png")} />
                <Text style={{ color: "#CD853F", textAlign: "center", fontWeight: "bold", fontSize: 10 }}>Text at</Text>
                <Text style={{ color: "#CD853F", textAlign: "center", fontWeight: "bold", fontSize: 10 }}>Image</Text>
              </TouchableOpacity></View>
            <View style={{ marginLeft: "3%" }}>
              <TouchableOpacity onPress={()=>navigation.replace("uploadtop", {url :`${selectedImage}`,fiurl :`${ImageUrl}`})}>
                <Image style={{ height: 60, width: 60 }}
                  source={require("../../images/UpIcon4.png")} />
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 10 }}>Text Over</Text>
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 10 }}>Image</Text>

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
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Add Text at Top"
              value={firsttext}
              onChangeText={setfirsttext}
            />

          </View><View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => this.pickImageHandler(uploadImage, setload)}>
              <View style={styles.imageContainer2}>
                <Image source={{ uri: `${selectedImage}` }} style={styles.previewImage} />
                <View style={styles.textinputcontainer1}><Text style={styles.textinput1}>{firsttext}</Text></View>
                <View style={styles.textinputcontainer1}>
                  <Text style={styles.textinput2}>{secondttext}</Text>
                </View>
              </View>
            </TouchableOpacity></View>
           
          <View style={styles.textinputcontainer5}>
            <TextInput style={styles.textinput}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Add Text at Bottom"
              value={secondttext}
              onChangeText={setsecondtext}
            /></View>
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
        </TouchableOpacity></View>
        <View style={{ position: "absolute", bottom:120, right: 18 }}>
          <TouchableOpacity onPress={() => getmemetypetwo(setload, ImageUrl, firsttext, secondttext,color, (memeUrl) => { navigation.navigate("Memestar", { memeurl: memeUrl }) })} >
            <Image style={{ height: 60, width: 60 }}
              source={require("../../images/tick.png")} />
          </TouchableOpacity>
         

        </View>
      </View>}
  </View>


  )
}

uploadimagetypesecond.navigationOptions = () => {
  return {
    headerStyle: styles.navbar
  };
}

const styles = StyleSheet.create({

  container: {
    height: "100%",
    backgroundColor: "#2D2D2D",
    flex: 1,
    width: "100%",
    flexDirection: "column"
  },
  imageContainer: {

    borderColor: 'black',
    backgroundColor: 'black',
    width: '93%',
    height: "60%",
    marginHorizontal: 10,
  },
  textinputcontainer1: {
    borderLeftColor: 'black',
    borderRightColor: 'black',
    marginHorizontal: 10,
    width: '93%',
    height: 100,
    position: 'absolute'
  },
  button: {
    marginBottom: 20,

  },
  previewImage: {
    width: '100%',
    height: "100%", resizeMode:'contain'
  }, textinputcontainer: {
    borderLeftColor: 'black',
    borderRightColor: 'black',
    marginHorizontal: 10,
    width: '93%',
    height: 45,
    
  },textinputcontainer5: {
    borderLeftColor: 'black',
    borderRightColor: 'black',
    marginHorizontal: 10,
    width: '93%',
    height: 45,
    position:"absolute",
    marginTop:"100%",
    bottom:"6%"
    
  }, textinputcontainer3: {
    borderLeftColor: 'black',
    borderRightColor: 'black',
    marginHorizontal: 10,
    width: '93%',
    height: 45,
    marginBottom: 2
  }, textinput: {
    width: "100%",
    height: "100%",
    fontSize: 18,
    borderRadius: 2,
    padding: 5,
    backgroundColor: '#CD853F',
    color: "white"
  },
  text: {
    textAlign: 'center',
    fontFamily: 'notoserif',
    fontSize: 20,
    fontStyle: 'italic',
    color: "white",
    height: 30


  },
  textinput1: {
    marginTop: 40,
    width: "100%",
    height: "100%",
    fontSize: 25,
    fontWeight: 'bold',
    color: "white",
    textAlign: "center"
  },
  textinput2: {
    marginTop: "99%",
    width: "100%",
    height: "100%", fontWeight: 'bold',
    fontSize: 25,
    color: "white", textAlign: "center"
  }, imageContainer2: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
  },
  navbar: {
    backgroundColor: 'red'
  },
})

export default uploadimagetypesecond;