import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component{

  render(){
    return(
  <div className="NavBar">
    <ul>
      <li><Link className='jump-new' to='/new'>Record New Jump</Link></li>
  
      <li><Link className='jump-history' to='/all'>View Jump History</Link></li>
  
      <li><Link className='map' to='/map'>Map</Link></li>

      <li><Link className='home' to='/'>Home</Link></li>
    </ul>
  </div>
    )
  }
}

export default NavBar