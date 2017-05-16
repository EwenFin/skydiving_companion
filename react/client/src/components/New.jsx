import React from 'react'
import AjaxRequest from '../services/AjaxRequest'

class New extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentUserId: null,
      jumpNumber: null
    }
  }

  fetchUser(){
    const url = 'http://localhost:5000/'
    const req = new AjaxRequest()
    req.get(url +'users.json', (err, user, status) => {
      if(err) {throw err}
        if(status === 200){
          console.log(user)
          this.setState({
            currentUserId: user.id
          }) 
        }else if(status === 401){
          this.setUser(null)
        }
      })
  }

  fetchJumpNumber(){
    const url = 'http://localhost:5000/'
    const req = new AjaxRequest()
    req.get(url +'api/jumps', (err, jumps, status) => {
      if(err) {throw err}
        if(status === 200){
          console.log(jumps.length)
          this.setState({
            jumpNumber: jumps.length + 1
          })

        }
      })

  }

  componentDidMount(){
    this.fetchUser()
    this.fetchJumpNumber()
  }

  handleSubmit(){
    const location = document.querySelector('#location').value
    const altitude = document.querySelector('#altitude').value
    const date = document.querySelector('#date').value
    const gear = document.querySelector('#gear').value
    const description = document.querySelector('#description').value
    const user_id = this.state.currentUserId
    const jumpNumber = this.state.jumpNumber
    console.log(user_id, jumpNumber)
    if(location && altitude && date && gear && description && user_id && jumpNumber){
      const jumpDetails = {
        number: jumpNumber,
        location: location,
        altitude: altitude,
        date: date,
        gear: gear,
        description: description,
        user_id: user_id
      }
      const req = new AjaxRequest()
      req.post("http://localhost:5000/api/jumps", JSON.stringify(jumpDetails), (err, res) => {
        
      })
      console.log(jumpDetails)
    }else{ alert("all fields required")}



  }


  render(){
    return (
      <div className="new">
      <h1>Record New Jump</h1>
      <div>
      <input placeholder="location"type="text" id="location"></input>
      <input placeholder= "altitude (feet)" type="number" id="altitude"></input>
      <input placeholder= "date" type="date" id="date"></input>
      <input placeholder= "equipment" type="text" id="gear"></input>
      <input placeholder= "description" type="text" id="description"></input> 
      <button id="submit" onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
      </div>
      )
  }
}

export default New