import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Result from './Result';
import requests from './service/requests';


function App (){
  const [selectedOption,setSelected]=useState(requests.Animation);
    return (
      <div className="App">

        {/* header */}
            <Header/>

            {/* NAV */}
            <Nav setSelected={setSelected}/>

        {/*Result */}
        <Result selectedOption={selectedOption}/>
      </div>
    );
  }

export default App;
