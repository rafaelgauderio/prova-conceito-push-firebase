import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/messaging';

// buscar as versões corretas de import do firebase
//https://stackoverflow.com/questions/69139443/property-auth-does-not-exist-on-type-typeof-import-firebase-auth

function App() {

  useEffect(() => {

    // registrando o service Worker

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("./firebase-messaging-sw.js")
        .then(function (registration) {
          console.log("Registrado com sucesso, scope é :", registration.scope);
        })
        .catch(function (erro) {
          console.log("Falha do registro do service worker, erro:", erro);
        });
    }

    // https://github.com/react-boilerplate/react-boilerplate/issues/2952
    const firebaseConfig = {
      apiKey: "AIzaSyARHI6TNk_0JSiGwutnPk729I0REXsaUTU",
      authDomain: "tutorial-push-deluca.firebaseapp.com",
      projectId: "tutorial-push-deluca",
      storageBucket: "tutorial-push-deluca.appspot.com",
      messagingSenderId: "831464170962",
      appId: "1:831464170962:web:4226addc593cc80bf2140b"
    };       

    firebase.initializeApp(firebaseConfig);

    firebase.messaging().onMessage(function(payload) {
      console.log("onMessage event ", payload);
    });

    navigator.serviceWorker.addEventListener("message", (message) => {
      console.log("message event", message);
    });
    
  }, []);

  const getMessaging = () => firebase.messaging();

  // Send the registration token your application server, so that it can:
  // - send messages back to this app
  // - subscribe/unsubscribe the token from topics
  const sendTokenToServer = (currentToken: string) => {
    if (!isTokenSentToServer()) {
      console.log('Sending token to server...');
      // TODO(developer): Send the current token to your server.
      setTokenSentToServer(true);
    } else {
      console.log('Token already sent to server so won\'t send it again unless it changes');
    }
  }

  const isTokenSentToServer = () => {
    return window.localStorage.getItem('sentToServer') === '1';
  }

  const setTokenSentToServer = (sent: boolean) => {
    window.localStorage.setItem('sentToServer', sent ? '1' : '0');
  }

  const requestPermission = () => {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        // TODO(developer): Retrieve a registration token for use with FCM.
      } else {
        console.log('Unable to get permission to notify.');
      }
    });
  }

  const getToken = () => {
    // Na primeira fez faz a requisição para o firebase, nas próximas pega do cache.
    getMessaging().getToken({ vapidKey: '' }).then((currentToken) => {
      if (currentToken) {
        console.log("TOKEN: ", currentToken);
        sendTokenToServer(currentToken);
      }
      else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenSentToServer(false);
      }
    }).catch((error) => {
      console.log('An error occurred while retrieving token. ', error);
      setTokenSentToServer(false);
    });
  }

  const deleteToken = () => {
    getMessaging().deleteToken().then(() => {
      console.log('Token deleted.');
      setTokenSentToServer(false);
    }).catch((error: any) => {
      console.log('Unable to delete token. ', error);
    });
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
