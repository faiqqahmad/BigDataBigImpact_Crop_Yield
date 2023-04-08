import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import './Navbar.css';
import SettingsBox from './SettingsBox';
import About from './About'
import './About.css'
import myImage from './lossVSepoch.png'
import Settings from './Settings';

function App() {
  return (
    <div className="App">
      <div className='top'><Navbar/></div>

      <div className='mid'>

        <div className="settings">
          <p1>Some settings</p1>
          <p1>Some settings</p1>
          <p1>Some settings</p1>
          <p1>Some settings</p1>
          <p1>Some settings</p1>
          <p1>Some settings</p1>
          <p1>Some settings</p1>
          <p1>Some settings</p1>
        </div>

        <div className="model">
          <img src={myImage}></img>
        </div>
        
      </div>

      <div className='bot'><About/></div>
      <Navbar/>
      <Settings/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
