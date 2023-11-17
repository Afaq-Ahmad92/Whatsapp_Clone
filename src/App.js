import React from 'react'
import UserChecking from './Components/UserChecking'

import Context from './Context/Context'
import "./Styling/App.css"
const App = () => {
  return (
    <>
      <div className="Main">
        <div className="top"></div>
        <div className="Down"></div>
        <Context>
          <UserChecking/>
        </Context>
        </div>
    </>
  )
}

export default App