import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

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
  }, []);


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
