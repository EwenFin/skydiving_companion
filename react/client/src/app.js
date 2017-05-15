import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import New from './components/New'
import All from './components/All'
import GMap from './components/Map'
import NavBar from './components/NavBar'
// import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import { HashRouter, Route, IndexRoute } from 'react-router-dom'



class App extends React.Component{

  render(){
    return (
      <HashRouter>
        <div className='container'>
          <Route path ="/" component={NavBar} />
          <Route exact path="/" component={Home} />
          <Route path ="/new" component={New} />
          <Route path ="/all" component={All} />
          <Route path ="/map" component={GMap} />
          

        </div>
      </HashRouter>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))


