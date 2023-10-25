import React from "react";
import './App.css'

import ReadInTextarea from "./component/ReadInTextarea/ReadInTextarea";
import WriteInTextarea from "./component/WriteInTextarea/WriteInTextarea";


function App() {
  return (
    <div className="App">

    <header>
      {/* <Logo/> */}
    </header>

    <section>
      <WriteInTextarea/>
      <ReadInTextarea/>
      
    </section>
    </div>
  );
}

export default App;
