import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import{ToastAndroid} from "react-native";



////get image from the database
export async function getimages(memesRetreived,setload) {
try{
  var imageList = [];

  var snapshot = await firestore()
  .collection('imageURl')
    .get()

  snapshot.forEach(doc => {
    const dataItem = doc.data();
    dataItem.id = doc.id;
    imageList.push(dataItem);
  });
  setload(false);
  memesRetreived(imageList);}catch(err){ToastAndroid.show("Please Check Internet", ToastAndroid.SHORT); }
}


export async function setstarmeme(memes) {
  try{
    var date = new Date().getDate(); //To get the Current Date
var month = new Date().getMonth() + 1; //To get the Current Month
var year = new Date().getFullYear(); //To get the Current Year
var hours = new Date().getHours();
var uuid = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 20);
var uuid1 = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

console.log("name: " + `${uuid}-${uuid1}`);
const fileName = `${date}-${month}-${year}-${hours}-${uuid}-${uuid1}`;
   await 
      firestore()
      .collection('Publicbyuser')
      .doc(`${fileName}`)
      .set({
        image: `${memes}`
    })
      .then(() => {
        ToastAndroid.show("Your meme is set ", ToastAndroid.SHORT); 
      });;}catch(err){ToastAndroid.show("Please Check Internet", ToastAndroid.SHORT); }
  }



////get all image from the database
export async function getallimages(memesRetreived,setload) {
  try{
    var imageList = [];
  
    var snapshot = await firestore()
    .collection('allimageUrl')
      .get()
  
    snapshot.forEach(doc => {
      const dataItem = doc.data();
      dataItem.id = doc.id;
      imageList.push(dataItem);
    });
    setload(false);
    memesRetreived(imageList);}catch(err){ToastAndroid.show("Please Check Internet", ToastAndroid.SHORT); }
  }

  export async function getallstars(memesRetreived,setload) {
    try{
      var imageList = [];
    
      var snapshot = await firestore()
      .collection('Secretstar')
        .get()
    
      snapshot.forEach(doc => {
        const dataItem = doc.data();
        dataItem.id = doc.id;
        imageList.push(dataItem);
      });
      setload(false);
      memesRetreived(imageList);}catch(err){ToastAndroid.show("Please Check Internet", ToastAndroid.SHORT); }
    }


///upload image from the pic image to storage
export function uploadImage(selectedImage,Imageurl,setlaod) {
console.log(selectedImage)
  if (selectedImage) {
    const fileExtension = selectedImage;
    console.log("EXT: " + fileExtension);

    var uuid = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 20);
    var uuid1 = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

    console.log("name: " + `${uuid}-${uuid1}`);
    const fileName = `${uuid}-${uuid1}`;
    console.log(fileName);
    setlaod(true);
    var storageRef = storage().ref(`memesupload/${fileName}`);

    storageRef.putFile(selectedImage)
      .on(
     storage.TaskEvent.STATE_CHANGED,
        snapshot => {
          console.log("snapshot: " + snapshot.state);
          console.log("progress: " + (snapshot.bytesTransferred / snapshot.totalBytes) * 100);

          if (snapshot.state === storage.TaskState.SUCCESS) {
            console.log("Success");
          }
        },
        error => {
          setlaod(false)
          ToastAndroid.show("Please Check Internet", ToastAndroid.SHORT); 
        },
        () => {
          storageRef.getDownloadURL()
            .then((downloadUrl) => {
              console.log("File available at: " + downloadUrl);

              const memeuploadurl = {"image":`${downloadUrl}`}
               
               addnewmeme(memeuploadurl);
              
                setlaod(false);


              Imageurl(downloadUrl);
            })  }
            )}
            else{ToastAndroid.show("Please Choose Image", ToastAndroid.SHORT); }
          };



export function addnewmeme(meme) {
           
          console.log("hello")

          
            firestore()
              .collection('UsersMeme')
              .add(meme)
              .then((snapshot) => {
                meme.URL = snapshot.id;
                snapshot.set(meme);
              })
              .catch((error) => console.log(error));
          }



          export async function gettrending(memesRetreived,setload) {
            try{
              var imageList = [];
            
              var snapshot = await firestore()
              .collection('Trending')
                .get()
            
              snapshot.forEach(doc => {
                const dataItem = doc.data();
                dataItem.id = doc.id;
                imageList.push(dataItem);
              });
              setload(false);
              memesRetreived(imageList);}catch(err){ToastAndroid.show("Please Check Internet", ToastAndroid.SHORT); }
            }