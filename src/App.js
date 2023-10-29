import React from "react";
import './App.css'

import ReadInTextarea from "./component/ReadInTextarea/ReadInTextarea";
import WriteInTextarea from "./component/WriteInTextarea/WriteInTextarea";
import Logo from "./component/Logo/Logo";
import Footer from "./component/Footer/Footer";


const App = () => {

  return (
    <div className="App">

      <header className="flex">

        <div className="flex">
          <Logo/> <p className="app_name flex align-center f2">Shared Clipboard</p>

        </div>
        
        <address className="f3">
          -Akash Kumar Sinha
        </address>

      </header>

      <section>
        
        <WriteInTextarea/>
        <ReadInTextarea/>
        
      </section>

    <Footer/>

    </div>
  );
}

export default App;
