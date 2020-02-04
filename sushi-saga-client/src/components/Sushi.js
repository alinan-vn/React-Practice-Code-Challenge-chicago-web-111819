import React, { Fragment } from 'react'

const Sushi = (props) => {

  let doNothing = () => {}

  return (
    <div className="sushi">
      { console.log('inside sushi', props.singleSushi)}
      <div className="plate" 
        onClick={/* Give me a callback! */ null}>
          { false ? null : <img src={ props.singleSushi.img_url } width="100%" /> }
      </div>
      <h4 className="sushi-details">
        {props.singleSushi.name} - ${props.singleSushi.price}
      </h4>
    </div>
  )
}

export default Sushi