import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {

  const renderSushi = () => {
    console.log(props.sushiData)
    return props.sushiData.map(sush => {
      console.log(sush)
      return <Sushi singleSushi= { sush } />
    })
  }

  return (
    <Fragment>
      <div className="belt">
        {props.loaded ? renderSushi() : console.log('has not loaded')}
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer