import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import NewJump from './components/New'
import AllJumps from './components/All'
import GMap from './components/Map'
import NavBar from './components/NavBar'
import Main from './components/Main'
// import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import { HashRouter, Route, IndexRoute } from 'react-router-dom'



class App extends React.Component{

  render(){
    return (
      <HashRouter>
        <div className='container'>
          <Route path ="/" component={Main} />
          <Route path ="/" component={NavBar} />
          <Route exact path="/" component={Home} />
          <Route path ="/new" component={NewJump} />
          <Route path ="/all" component={AllJumps} />
        </div>
      </HashRouter>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))


