import './App.css';
import Row  from "./Row.js";
import requests from "./requests"; 
import Banner from "./Banner";
import Nav from "./Nav";
 

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginal} isLargeRow/>
      <Row title="Popular Movies" fetchUrl={requests.fetchPopularMovies}/>
      <Row title="TopRated Movies" fetchUrl={requests.fetchTopRated}/>
    </div>
  );
}

export default App;
