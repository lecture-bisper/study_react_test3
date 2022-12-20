import logo from './logo.svg';
import './App.css';

function Food({fav}) {
  return (
    <h1>I Like {fav}</h1>
  )
}

const foodILike = [];

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Food fav={"족발"} />
    </div>
  );
}

export default App;
