import React, {Component} from 'react'

class CoordinatesButton extends Component{
  render(){
    return(
      <button onClick={(event) => {
          const x = event.clientX
          const y = event.clientY
          let array = [x,y]
          this.props.onReceiveCoordinates(array)
      }}> CoordinatesButton </button>
    )
  }
}

export default CoordinatesButton
