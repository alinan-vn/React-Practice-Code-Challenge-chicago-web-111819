import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3000/sushis"


class App extends Component {
  constructor(){
    super()
    this.state = {
      sushiData: null,
      count1: 0,
      count2: 4,
      loaded: false
    }
  }

  sushiData = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(json => this.sliceSushiSet(json))
  }

  setSushiData = (json) => {
    this.setState({
      sushiData: json,
      loaded: true
    })
  }

  sliceSushiSet = (json) => {
    // 0-4
    let jboy = json.slice(this.state.count1, this.state.count2)
    let first = this.state.count2
    this.setState({
      sushiData: jboy,
      count1: first,
      count2: jboy + 4,
      loaded: true
    })
  }


  componentDidMount(){
    this.sushiData()    
  }
  
  render() {
    return (
      <div className="app">
        <SushiContainer sushiData= { this.state.sushiData } loaded= {this.state.loaded} />
        <Table />
      </div>
    );
  }
}

export default App;