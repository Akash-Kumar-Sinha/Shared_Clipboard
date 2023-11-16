import React from "react";
import './App.css'

import { database } from './firebaseConfig.js';
import { collection} from 'firebase/firestore';

import ReadInTextarea from "./component/ReadInTextarea/ReadInTextarea";
import WriteInTextarea from "./component/WriteInTextarea/WriteInTextarea";
import Logo from "./component/Logo/Logo";
import Footer from "./component/Footer/Footer";
import Navigation from "./component/Navigation/Navigation";


const App = () => {

  const collectionRef = collection(database, 'clipboard_data');

  return (
    <div className="App">
    <Navigation/>

      <header className="flex">

        <div className="flex">
          <Logo/> <p className="app_name flex align-center f2">Shared Clipboard</p>

        </div>
        
        <address className="f3">
          <a className="font link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/akash-kumar-sinha-768400251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            -Akash Kumar Sinha
          </a>
        </address>

      </header>

      <section>
        
        <WriteInTextarea collectionRef={collectionRef}/>
        <ReadInTextarea collectionRef={collectionRef}/>
        
      </section>

    <Footer/>

    </div>
  );
}

export default App;
