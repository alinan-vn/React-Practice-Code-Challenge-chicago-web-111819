import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {

  const renderSushi = () => {
    // console.log(props.sushiData)
    return props.sushiData.map(sush => {
      // console.log(sush)
      return <Sushi singleSushi= { sush } handleEaten= {props.handleEaten } />
    })
  }

  return (
    <Fragment>
      <div className="belt">
        {/* {props.loaded ? console.log(props) : null} */}
        
        {props.loaded ? renderSushi() : null}
        <MoreButton toggleMoreSushi={ props.toggleMoreSushi }/>
      </div>
    </Fragment>
  )
}

export default SushiContainer