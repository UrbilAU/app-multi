import React from 'react';
import './App.css';
import SpecialButton from './SpecialButton'
import ExtendedMap from './ExtendedMap'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      language: 'en'
    }
  }

  handleClick = () => {
    this.setState(prevState => {
      if (prevState.language === 'en') return {language: 'es'}
      else return {language: 'en'}
    })
  }

  render() {
    return (
      <div id="App">
        <SpecialButton handleClick={this.handleClick}/>
        <ExtendedMap selectedLanguage={this.state.language}></ExtendedMap>
      </div>
    )
  }
}

//Google maps API key: AIzaSyBChWL4jKbSaq5yHFCkIGrf7cS4rOAONNU


export default App;
