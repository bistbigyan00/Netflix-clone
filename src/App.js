import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Nav/>

      <Banner/>

      <Row 
        title="NETFLIX ORIGINALS" 
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow/>

      <Row title="Trending Now" fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="Top rated" fetchURL={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
      {/* <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/> */}
    </div>
  );
}

export default App;
