import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Title from './components/title';
import Banner from './components/banner';

function App() {
  return (
    <div className="App">
      <Header />
      <Title/>
      <Banner />
    </div>
  );
}

export default App;
