import singlememe from '../api/singlememe';
import{ToastAndroid} from "react-native";

export async function getmeme(load,iamgeUrl,fisttext,secondtext,color,callback) {
    load(true);

    if(iamgeUrl==""&&fisttext==""&&secondtext==""){
        load(false);
        ToastAndroid.show("please add both image and text", ToastAndroid.SHORT); 
    }
    else if(iamgeUrl==""){
       load(false);
       ToastAndroid.show("please add image", ToastAndroid.SHORT); 
    }
    else if(fisttext==""&&secondtext==""){
        load(false);
        ToastAndroid.show("please add text", ToastAndroid.SHORT); 
    }
    else{
    const jsondata = {"URL":`${iamgeUrl}`,
    "Text":`${fisttext} \n ${secondtext}`,
    "COLOR":`${color}` 
    }
   
  console.log(7267);

     try{
        console.log(7738)
    const response = await singlememe.post('/dankcli-meme', jsondata);
 
     const memeurl = response.data;
      
     callback(memeurl);
     load(false);
     }catch(err){  load(false);
        ToastAndroid.show("Please Check Internet", ToastAndroid.SHORT); 
     }
    }
};

export async function getmemetypetwo(load,iamgeUrl,fisttext,secondtext,color,callback) {
    load(true);
    if(iamgeUrl==""&&fisttext==""&&secondtext==""){
        load(false);
        ToastAndroid.show("please add both image and text", ToastAndroid.SHORT); 
    }
    else if(iamgeUrl==""){
       load(false);
       ToastAndroid.show("please add image", ToastAndroid.SHORT); 
    }
    else if(fisttext==""&&secondtext==""){
        load(false);
        ToastAndroid.show("please add text", ToastAndroid.SHORT); 
    }
    else{
    const jsondata = {"URL":`${iamgeUrl}`,
    "TOP":`${fisttext}` ,
    "BOTTOM": `${secondtext}`,
    "COLOR":`${color}`
    }
 
  console.log(7267)
     try{
        console.log(7738)
    const response = await singlememe.post('/meme-gen', jsondata);

     const memeurl = response.data;
     callback(memeurl);
     load(false);
     }catch(err){  load(false);
console.log(err.message);
     }
    }
};



export async function horizontal(load,iamgeUrl,iamgeUrltwo,callback) {
    load(true);
    if (iamgeUrl==""&&iamgeUrltwo==""){
        load(false);
        ToastAndroid.show("please choose both image", ToastAndroid.SHORT); 
    }
    else if(iamgeUrl==""||iamgeUrltwo==""){
        load(false);
        ToastAndroid.show("please choose both image", ToastAndroid.SHORT); 
    }
    else{
    const jsondata = {"URL":[`${iamgeUrl}`,`${iamgeUrltwo}`]
    }
   
  console.log(7267);

     try{
        console.log(7738)
    const response = await singlememe.post('/vconcat', jsondata);
 
     const memeurl = response.data;
      
     callback(memeurl);
     load(false);
     }catch(err){load(false)
        ToastAndroid.show("Please Check Internet", ToastAndroid.SHORT); 
     } 
    }
};

export async function vertical(load,iamgeUrl,iamgeUrltwo,callback) {
    load(true);
    if (iamgeUrl==""&&iamgeUrltwo==""){
        load(false);
        ToastAndroid.show("please choose both image", ToastAndroid.SHORT); 
    }
    else if(iamgeUrl==""||iamgeUrltwo==""){
        load(false);
        ToastAndroid.show("please choose both image", ToastAndroid.SHORT); 
    }
    else{
    const jsondata = {"URL":[`${iamgeUrl}`,`${iamgeUrltwo}`]
    }
   
  console.log(7267);

     try{
        console.log(7738)
    const response = await singlememe.post('/hconcat', jsondata);
 
     const memeurl = response.data;
      
     callback(memeurl);
     load(false);
     }catch(err){load(false)
        ToastAndroid.show("Please Check Internet", ToastAndroid.SHORT); 
     } 
    }
};
