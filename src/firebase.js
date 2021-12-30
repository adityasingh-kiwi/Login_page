// import * as firebase from "firebase/app";
// import {getMessaging,getToken} from 'firebase/messaging';



// const firebaseConfig = {
//   apiKey: "AIzaSyB_mPAecQv3tay_4PhQbwJnZ0A37GptXEY",
//   authDomain: "push-notification-da433.firebaseapp.com",
//   projectId: "push-notification-da433",
//   storageBucket: "push-notification-da433.appspot.com",
//   messagingSenderId: "206904261058",
//   appId: "1:206904261058:web:192556a6cc09b19511be5b"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// // const messaging = getMessaging()
// // console.log("messaaging----------->>",messaging);
// // export const getToken = () => {
// //   new Promise((resolve, reject) => {
// //     try {
// //       getMessaging({
// //         vapidKey:
// //           "BBVLUmTvethrj_AP9DWy-VohOETERlFFVRw59zUDxLzNHMiY4iw8Co-5vXdntpnMeK4agYKgkgoWCBG_--obzdM"
// //       })
// //         .then((currentToken) => {
// //           if (currentToken) {
// //             console.log("current token------->", currentToken)
// //             resolve(currentToken)
// //             return currentToken
// //           } else {
// //             alert("Please enable notification permission")
// //             return undefined
// //           }
// //         })
// //         .catch((err) => {
// //           alert("Please enable notification permission")
// //           console.log("errrrrrrrrrrrrrr------->>", err)

// //         })
// //     } catch (error) {
// //       reject(error)
// //     }
// //   })

// // }
// // export const onMessageListener = () => {
// //   new Promise((resolve) => {
// //     getMessaging().onMessage((payload) => {
// //       console.log({ payload })
// //       resolve(payload)
// //     })
// //   })
// // }


// const messaging = getMessaging();
// getToken(messaging, { vapidKey: 'BFkla5lIFT2XztbAUDHWKO2rBRkqMkRZab-IV8GlAHFUCyz_K_FbxPW-kdv4mOgZHWvSS2phugy4T0WQWPuFjbg' }).then((currentToken) => {
//   if (currentToken) {
//        console.log("current--------->>",currentToken);
//     // Send the token to your server and update the UI if necessary
//     // ...
//   } else {
//     // Show permission request UI
//     console.log('No registration token available. Request permission to generate one.');
//     // ...
//   }
// }).catch((err) => {
//   console.log('An error occurred while retrieving token. ', err);
//   // ...
// });
// export default firebase;