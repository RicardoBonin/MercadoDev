import React from 'react'
import Home from './Home'
import Footer from './Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' exact component={Home} />
        <Footer />
      </div>
    </Router>
    
  )
}

export default App
