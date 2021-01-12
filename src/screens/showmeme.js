import React, { useState, useEffect } from "react";
import{Text,StyleSheet,FlatList,View,ToastAndroid,Image, ActivityIndicator,PermissionsAndroid, } from "react-native";
import Share from "react-native-share";
import RNFetchBlob from 'rn-fetch-blob';
import Activity from "./activity";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

import Navbar from "../components/Navbar";
import Headera from "../components/header";


const showmeme =  ({navigation})=>{

  const [load,setload]=useState(false);

checkPermission = async (imageur) => {
    
    //Function to check the platform
    //If iOS the start downloading
    //If Android then ask for runtime permission
 {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
         
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //Once user grant the permission start downloading
          console.log('Storage Permission Granted.');
          downloadImage(imageur);
        } else {
          //If permission denied then show alert 'Storage Permission Not Granted'
          ToastAndroid.show("Storage Permission Not Granted", ToastAndroid.SHORT);
        }
      } catch (err) {
        //To handle permission related issue
        console.warn(err);
      }
    }
  };




  const downloadImage = (imageur) => {
    setload(true);
    console.log(imageur)
    var date = new Date();
    var image_URL = imageur;
    var ext = ".png";
    const { config, fs } = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: PictureDir + "/image_" + Math.floor(date.getTime()
          + date.getSeconds() / 2) + ext,
        description: 'Image'
      }
    }
    
    config(options).fetch('GET', image_URL).then((resp) => {
      setload(false);
      ToastAndroid.show("Your Image Is Downloaded", ToastAndroid.SHORT);
    });
  }
shareFile=(file_url)=> {
    let imagePath = null;
    setload(true);

    RNFetchBlob.config({
        fileCache: true
    })
    .fetch("GET", file_url)
    // the image is now dowloaded to device's storage
    .then(resp => {
        // the image path you can use it directly with Image component
        imagePath = resp.path();
        return resp.readFile("base64");
    })
    .then(async base64Data => {
        var base64Data = `data:image/png;base64,` + base64Data;
        // here's base64 encoded image
       try{ await Share.open({ url: base64Data });
        // remove the file from storage
        setload(false);
        return RNFetchBlob.fs.unlink(imagePath);}catch(err){   setload(false); console.log(err)}
    });
}

const memeUrl = navigation.getParam("memeurl");

    console.log("memeurl "+memeUrl);
    return(<View style= {{flex:1 , backgroundColor:"black"}}>
      <Headera/>
    {load ?  <View style={{ flex: 1, alignContent: "center" }}><Image style={{
      height: "70%", resizeMode: 'contain',
      width: "100%"
    }}
      source={require("../../images/tenor.gif")} />
      <ActivityIndicator size="large" color="#CD853F" />
    </View> : 
      <View style={{ flex: 1, backgroundColor: "#2D2D2D", flexDirection: "row" }}>
            <View style={styles.imageContainer}>
       
        <Image source={{uri:memeUrl}} style={styles.previewImage} />
     
      </View>
      <View style={{position:"absolute" ,bottom:0,marginLeft:'76%',marginBottom:70,borderRadius:10,width:80,height:80,marginRight:"8%"}}>
      <TouchableOpacity onPress={()=>this.checkPermission(`${memeUrl}`)} >
      <Image style={{ height: 60, width: 60 }}
              source={require("../../images/download_new.png")} />
      </TouchableOpacity>
  
    </View>
    <View style={{position:"absolute" ,bottom:1,marginLeft:'76%', borderRadius:10,width:60,height:80,marginRight:"8%"}}>
      <TouchableOpacity onPress={()=>this.shareFile(`${memeUrl}`)} >
      <Image style={{ height: 60, width: 60 }}
              source={require("../../images/share_new.png")} />
      </TouchableOpacity>
  
    </View>
    </View>}
    </View>

    );
};


const styles = StyleSheet.create({
    imageContainer: {
      overflow: 'hidden',
        borderColor: 'black',
        backgroundColor: '#eee',
        width: '100%',
        height: "100%",
        alignItems: 'center',
        flexDirection:"column"
      },  previewImage: {
        flex:1,
        resizeMode:'contain',
        width: "100%",
        height: "100%",
        backgroundColor:"black"
      },
});
export default showmeme;