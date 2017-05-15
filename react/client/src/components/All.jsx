import React from 'react'
import AjaxRequest from '../services/AjaxRequest.js'


class All extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      jumps: []
    }
  }

  componentDidMount(){
    var url = 'http://localhost:5000/api/jumps'
    var req = new AjaxRequest()
    req.get(url, (err, jumps, status) =>{
      if(err){ throw err}
        if(status === 200){
          this.setState({jumps: jumps})
        }
    })
  }

  render(){

    const allJumps = this.state.jumps.map((jump, index) => {
      console.log(jump)
      return <button value= {index} key={index}><li>Date: {jump.date}  Altitude: {jump.altitude}ft DropZone: {jump.location} </li></button>
      
      })
      return(
  <div className="all">

    <h1>Jump History</h1>
    <div>
    <ol>
    {allJumps}
    </ol>
    </div>
  </div>
  )
    }
  }
  
  

export default All

