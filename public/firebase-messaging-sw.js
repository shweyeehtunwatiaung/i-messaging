import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";
import { onBackgroundMessage } from "firebase/messaging/sw";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBGd9T53TLe0pgaatHzJJnpnBBgrh6V-ro",
  authDomain: "i-messaging-5b0af.firebaseapp.com",
  projectId: "i-messaging-5b0af",
  storageBucket: "i-messaging-5b0af.appspot.com",
  messagingSenderId: "211232336987",
  appId: "1:211232336987:web:4fa28b54ea6fa8ca57e37e",
  measurementId: "G-KXHMM24GX5",
});

const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("./sw.js");
      if (registration.installing) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    } catch (err) {
      console.log("Register failed");
    }
  }
};
registerServiceWorker();

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.

const messaging = getMessaging(firebaseApp);

onBackgroundMessage(messaging, (payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/vercel.svg",
  };

  self?.registration.showNotification(notificationTitle, notificationOptions);
});
// messaging.useServiceWorker(null);
