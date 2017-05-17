import React from 'react'
import LoginBox from '../auth/LoginBox'

const Home = () => (
  <div className="home" id="home">
    <LoginBox url="http://localhost:5000/" />
  </div>
)

export default Home