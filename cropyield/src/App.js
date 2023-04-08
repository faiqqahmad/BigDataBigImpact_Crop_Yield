import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import './Navbar.css';
import Settings from './Settings';
import SettingsBox from './SettingsBox';
import About from './About'
import './About.css'
import myImage from './lossVSepoch.png'

function App() {
  return (
    <div className="App">
      <div className='top'><Navbar/></div>

      <div className='mid'>

        <div className="settings">
          <Settings/>
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
      
    </div>
  );
}

export default App;
