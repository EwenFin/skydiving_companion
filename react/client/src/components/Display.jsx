import React from 'react'

class Display extends React.Component{

  constructor(props){
    super(props)
  }

  getJumpDetails(){
    if(this.props.jumpDetails === null){
      return
    }else{
      return <div>
        <p>Jump Number: {this.props.jumpDetails.number}</p>
        <p>Location: {this.props.jumpDetails.location}</p>
        <p>Date: {new Date(this.props.jumpDetails.date).toString()}</p>
        <p>Altitude: {this.props.jumpDetails.altitude}</p>
        <p>Equipment: {this.props.jumpDetails.gear}</p>
        <p>Description: {this.props.jumpDetails.description}</p>
        </div>
    }
  }

  render() {
    return(
  <div className="jumpDetails">
  {this.getJumpDetails()}
  </div>

  )
  }
}
  export default Display