//importScripts('https://www.gstatic.com/firebasejs/9.22/firebase-app.js');
//importScripts('https://www.gstatic.com/firebasejs/9.22/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-messaging.js');



const firebaseConfig = {
    apiKey: "AIzaSyARHI6TNk_0JSiGwutnPk729I0REXsaUTU",
    authDomain: "tutorial-push-deluca.firebaseapp.com",
    projectId: "tutorial-push-deluca",
    storageBucket: "tutorial-push-deluca.appspot.com",
    messagingSenderId: "831464170962",
    appId: "1:831464170962:web:4226addc593cc80bf2140b"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
     console.log('sw background message event: ', payload);
});



// O evento onMessage pertence ao contexto de Windows e não do service worker
//https://stackoverflow.com/questions/42964547/uncaught-firebaseerror-messaging-this-method-is-available-in-a-window-context
