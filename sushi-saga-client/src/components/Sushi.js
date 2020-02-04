import React, { Fragment } from 'react'

const Sushi = (props) => {

  

  return (
    <div className="sushi">
      {/* { console.log('inside sushi', props.singleSushi)} */}
      <div className="plate" 
        onClick={ () => props.handleEaten(props.singleSushi.id) }>
          { props.singleSushi.isEaten ? null : <img src={ props.singleSushi.img_url } width="100%" /> }
      </div>
      <h4 className="sushi-details">
        {props.singleSushi.name} - ${props.singleSushi.price}
      </h4>
    </div>
  )
}

export default Sushi