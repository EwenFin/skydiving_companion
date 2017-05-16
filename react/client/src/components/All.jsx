import React from 'react'
import AjaxRequest from '../services/AjaxRequest.js'
import Display from './Display'


class All extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      jumps: [],
      jumpDetails: null
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

  handleClick(index){

    const jumpDetails = this.state.jumps[index]
    console.log(jumpDetails)
    this.setState({
      jumpDetails: jumpDetails
    })

   
  
  }

  render(){

    const allJumps = this.state.jumps.map((jump, index) => {
      return <button value= {index} key={index} onClick= {() => this.handleClick(index)}><li>Date: {jump.date}  Altitude: {jump.altitude}ft DropZone: {jump.location} </li></button>
      
      })
      return(
  <div className="all">

    <h1>LogBook</h1>
    <div><Display jumpDetails={this.state.jumpDetails}/></div>
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

