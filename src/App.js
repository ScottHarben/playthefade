import React from 'react';
import logo from './logo.svg';
import './App.css';
const axios = require('axios').default;

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { apiResponse: ''};
  }

  async callAPI() {
    //const response = await axios.get('http://localhost:9000/api');
    const response = await axios.get('https://scottsubuntuserver.com/api');
    const player = response.data[0]
    this.setState({ apiResponse: player.FirstName + " " + player.LastName})
  }


  componentDidMount(){
    this.callAPI();
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-intro">{this.state.apiResponse}</p>
        </header>
      </div>
    );
  }
}

export default App;
