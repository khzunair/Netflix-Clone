import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Row from "./components/Row";
import requests from "./request";

function App() {
  return (
    <div className="App">
      {/* <h1 className="BColor">The Movie Site</h1> */}
      <Navbar />
      <Banner />
      <Row title="Netflix Originals"fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title="Trending" fetchUrl={requests.fetchTrending}  />
      <Row title="Top Rated"fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies"fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies"fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies"fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romantic Movies"fetchUrl={requests.fetchRomanceMovies}/>
      {/* <Row title="Documentories"fetchUrl={requests.fetchDocumentaries}/> */}

    </div>
  );
}

export default App;
