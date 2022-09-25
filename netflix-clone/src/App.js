import './App.css';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <div className="App">

     <h1>Netflix Clone</h1>

     <Row title="Trending"          fetchUrl={requests.fetchTrending}     />
     <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}     />

    </div>
  );
}

export default App;
