import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Project from './component/Project'
import Contact from './component/Contact'
import Footer from './component/Footer'
import axios from 'axios';
import React,{useState,useEffect} from 'react';


function App() {
  const sendRequest = async() => {
    const response = await axios.get('http://localhost:8080');
    console.log(response);
    console.log(response.data);
  };

  useEffect(()=>{
    sendRequest();    
  });

  return (
    <div className="App" id="top">
      <Header></Header>
      <Home></Home>
      <About></About>
      <Project contentid="drunkenmonkey"></Project>
      <Project contentid="Ahndo"></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
