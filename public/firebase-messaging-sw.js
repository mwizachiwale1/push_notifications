importScripts("https://www.gstatic.com/firebasejs/11.2.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.2.0/firebase-messaging-compat.js");

const firebaseConfig = {
    apiKey: "AIzaSyDeMrls2qPIc2TXO9QxwFc8uNPj0coKxKI",
      authDomain: "push-notifications-2846f.firebaseapp.com",
      projectId: "push-notifications-2846f",
      storageBucket: "push-notifications-2846f.firebasestorage.app",
      messagingSenderId: "460558315287",
      appId: "1:460558315287:web:36ef0af3fc229bc9d25152"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
    console.log("Received background message:", payload);

    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: "/firebase-logo.png"
    });
});
