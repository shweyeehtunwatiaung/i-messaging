import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBGd9T53TLe0pgaatHzJJnpnBBgrh6V-ro",
  authDomain: "i-messaging-5b0af.firebaseapp.com",
  projectId: "i-messaging-5b0af",
  storageBucket: "i-messaging-5b0af.appspot.com",
  messagingSenderId: "211232336987",
  appId: "1:211232336987:web:4fa28b54ea6fa8ca57e37e",
  measurementId: "G-KXHMM24GX5",
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async () => {
  const permission = await Notification.requestPermission();

  if (permission == "granted") {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .then((registration: any) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }

    const token = await getToken(messaging, {
      vapidKey:
        "BIDLhRwnLnZj_YJMirxg54vglM_ejUCfk-euLBCvqnShOmBkb2Guc0PVNZ8-o97iSjAeWuvFo3rto8iDtjS6p50",
    });

    console.log("token", token);
  }
};

export const requestForToken = () => {
  return getToken(messaging, {
    vapidKey:
      "BMxfXEN-Y-LuCjY0wMZoY1Sypv6hc4B3orsT0seh7C_8d9i-kij68LG6u6IRcQkjKhHwrz_ZvU3exIPF-bz46Qw",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("currentToken =>", currentToken);
      } else {
        console.log("Can't get token!!");
      }
    })
    .catch((err) => {
      console.log("err", err);
    });
};

export const requestPermission = () => {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      return getToken(messaging, {
        vapidKey:
          "BMxfXEN-Y-LuCjY0wMZoY1Sypv6hc4B3orsT0seh7C_8d9i-kij68LG6u6IRcQkjKhHwrz_ZvU3exIPF-bz46Qw",
      })
        .then((currentToken) => {
          if (currentToken) {
            console.log("currentToken =>", currentToken);
          } else {
            console.log("Can't get token!!");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("Do not have permission.");
    }
  });
};

export const onMessageListener = () => {
  return new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("OnMessage Payload", payload);
      resolve(payload);
    });
  });
};
