import "./App.css";
import Row from "./components/Row";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <h1>The Movie Site</h1>

      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Netflix Originals"fetchUrl={requests.fetchNetflixOriginals}/>
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
