import logo from './logo.svg';
import './App.css';
import serial from './serial.js';
import {Component} from 'react';

let port = null;

class App extends Component {

  state={val:"", connect: false}

  componentDidMount () {
    serial.getPorts().then(ports => {
      if (ports.length === 0) {
        console.log('No device found.');
      } else {
        console.log('Connecting...');
        port = ports[0];
        this.connect();
      }
    });
  }

  handleChange = e =>{
    this.setState({val:e.target.value});
  }

  keyPressed = e => {
    if (e.key === "Enter") {
      let view = new Uint8Array(1);
      view[0] = parseInt(this.state.val);
      port.send(view);
    }
  }

  connect = () => {
    port.connect().then(() => {
        this.setState({connect: true});
        port.onReceive = data => {
          let textDecoder = new TextDecoder();
          console.log(textDecoder.decode(data));
        }
        port.onReceiveError = error => {
          console.error(error);
        };
      }, error => {
        console.log(error);
      });
  }

  connectdevice = () => {
    console.log("connecting");
    if (port) {
      port.disconnect();
      port = null;
      this.setState({connect: false});
    } else {
      serial.requestPort().then(selectedPort => {
        port = selectedPort;
        console.log(port);
        this.connect();
      }).catch(error => {
        console.log(error);
      });
    }
  }
  
  render (){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick = {this.connectdevice}>{this.state.connect ? 'Connected':'Connect'}</button>
          <input onChange={this.handleChange} onKeyPress={this.keyPressed} value={this.state.val} />
        </header>
      </div>
    );
  }
}

export default App;
