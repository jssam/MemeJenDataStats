import React from "react";
import{Text,StyleSheet,FlatList,View, Image} from "react-native";


const Resultbox=({pass,text})=>{

    return(
        <View style = {styles.container}>
            <Image source={{ uri : `${pass}`}} style={styles.image}/>

        </View>
    );

};

    const styles = StyleSheet.create({
        container:{marginLeft:15,
  
            borderWidth:1,
            backgroundColor:"#C0C0C0",
            borderRadius:5,
            flex:1,
            borderColor:"black",
            marginBottom:15
        },
        image:{
            width:"100%",
            height:100,    
            borderRadius:5
        },container1:{
            marginLeft:15,
            fontSize:15,
            fontWeight:"bold"
        },
        
        });
 export default Resultbox;