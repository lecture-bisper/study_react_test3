import logo from './logo.svg';
import './App.css';
import {getData, getData1} from "./es6/Promise";

function Food({fav}) {
  return (
    <h1>I Like {fav}</h1>

  )
}

const foodILike = [];

function App() {
  getData1()
    .then((req) => {
      console.log(req);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div className="App">
      <h1>Hello</h1>
      <Food fav={"족발"} />
    </div>
  );
}

export default App;
