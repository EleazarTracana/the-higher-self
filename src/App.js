import logo from '../src/assets/isologo.png';
import './App.css';

function App() {
  return (
    <div style={{
      backgroundImage: `url(/public/img/background.jpg)`,
      textAlign: "center"
    }}>
      <link href="https://fonts.googleapis.com/css?family=Germania+One" rel="stylesheet"></link>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="custom-text">
        The Ancients are locked away in their mystical creation chamber, meticulously crafting the perfect website to guide us on our Higher Self journey. Stay tuned as they unveil their masterpiece, a work of art that promises to elevate our path to new heights
        </p>
      </header>
    </div>
  );
}

export default App;
