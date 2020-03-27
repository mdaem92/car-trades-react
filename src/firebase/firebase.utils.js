import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
    databaseURL:process.env.REACT_APP_FIREBASE_DATABASE_URL,
    // projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
    projectId:'react-car-trade',

    storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ,
    appId:process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId:process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}


firebase.initializeApp(config)


export const createUserProfile = async(userAuth,additionalData)=>{
    if(!userAuth)return
    const userRef = firestore.doc(`/users/${userAuth.uid}`)
    const snapshot = await userRef.get()
    if(!snapshot.exists){
        console.log("new user auth: ",userAuth)
        const {displayName,email,photoURL}=userAuth
        const createdAt = new Date()
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                photoURL,
                ...additionalData
            })
        }catch (e) {
            console.log('error creating user', e)
        }
    }
    return userRef
}


export async function uploadTaskPromise(storagePath,file) {
    return new Promise(function(resolve, reject) {
        const metadata = {
            contentType: 'image/jpeg'
        }
        const storage = firebase.storage()
      const storageRef = storage.ref(storagePath)
      const uploadTask = storageRef.put(file,metadata)
      uploadTask.on('state_changed',
        function(snapshot) {
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
        },
        function error(err) {
          console.log('error', err)
          reject()
        },
        function complete() {
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            resolve(downloadURL)
          })
        }
      )
    })
  }
export const getUserAuth = ()=>{
    return new Promise((resolve,reject)=>{
        const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
            unsubscribe()
            resolve(userAuth)
        },reject)
    })
}
export const firestore = firebase.firestore()
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
googleAuthProvider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = ()=>auth.signInWithPopup(googleAuthProvider)
export default firebase

