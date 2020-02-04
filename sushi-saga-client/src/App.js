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
      loaded: false,
      amountRemaining: 105.01
    }
  }

  sushiData = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(sushi => {
        const newSush = sushi.map(sushi => {
          return {...sushi, isEaten: false}
        })
        this.sliceSushiSet(newSush)
      })
  }

  sliceSushiSet = (json) => {
    let jboy = json.slice(this.state.count1, this.state.count2)
    this.setState( prevState => ({
      sushiData: jboy,
      count1: prevState.count2,
      count2: prevState.count2 + 4,
      loaded: true
      })
    )
  }

  toggleMoreSushi = () => {
    this.sushiData()
  }

  handleEaten = (id) => {
    // console.log(id)
    this.setState(prevState => {
      let num = 0
      const updatedSushi = prevState.sushiData.map(sushi => {
        if (sushi.id === id){
          num = sushi.price
          return { ...sushi, isEaten: true}
        } else {
          return sushi
        }
      })
      return {
        sushiData: updatedSushi,
        amountRemaining: prevState.amountRemaining - num
      }
    })
    
  }




  componentDidMount(){
    this.sushiData()    
  }
  
  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushiData= { this.state.sushiData } 
          loaded= { this.state.loaded }
          toggleMoreSushi= { this.toggleMoreSushi }
          sushiDisplay= { this.state.sushiDisplay }
          handleEaten = { this.handleEaten }
        />
        <Table 
          amountRemaining= {this.state.amountRemaining } 
          loaded= {this.state.loaded} 

        />
      </div>
    );
  }
}

export default App;