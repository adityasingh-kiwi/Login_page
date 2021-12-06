import { getMessaging } from "@firebase/messaging";
import firebase from "../src/firebase";

importScripts("https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.5.0/firebase-messaging.js");




firebase.initializeApp({
    messagingSenderId: "206904261058",

})

const messaging = firebase.getMessaging();


messaging.setBackgroundMessageHandler(function (payload){
  const notificationTitle=payload.notification.title
  const notificationOption ={
      body:payload.notification.body,
  }
  self.registration.showNotification(showNotificationTitle,notificationOption)

})
self.addEventListener("notificationclick", function (event){
    console.log(event)
})
