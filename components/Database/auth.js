import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from "./config";

const auth = getAuth(app);

export async function loginAuth(email, password){
  const userDetails = {
    email : null,
    uid : null,
    success: false,
    errorCode:null,
    errorMessage: null
}
    return new Promise((resolve,reject)=>{
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
    
        const user =  userCredential.user;
        userDetails.success = true;
        userDetails.email = user.email;
        userDetails.uid = user.uid;
        resolve(userDetails);

        return true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        userDetails.errorCode = errorCode;
        userDetails.errorMessage = errorMessage;
        userDetails.success = false;
        userDetails.email = null;
        userDetails.uid = null;
        reject(userDetails)
        return false;
      });
     
    })


}
 

export async function signupAuth(email, password){

  return new Promise((resolve,reject)=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // console.log(user)
      resolve(user)
      return true;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      reject({errorCode:errorCode, errorMessage:errorMessage})
      return false;
    });
  })

}

export function getCurrentUser() {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);
      } else {
        resolve(null);
      }
      unsubscribe(); 
    });
  });
}