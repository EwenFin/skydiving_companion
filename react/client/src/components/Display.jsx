import React from 'react'
import AjaxRequest from '../services/AjaxRequest'

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
        <button onClick={this.deleteJump.bind(this)}>Delete Jump</button>
        <button onClick={this.editJump.bind(this)}>Edit Jump</button>
        </div>
    }
  }

  deleteJump(){
    const jumpId = this.props.jumpDetails.id
    const req = new AjaxRequest()
    req.delete('http://localhost:5000/api/jumps/' + jumpId, (err, status) => {
      if(err){throw err}
        else{alert("jump deleted")}
    })
  }

  editJump(){
    console.log('edit clicked')
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