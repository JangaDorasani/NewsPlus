import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
  state={
    progress:0
   }
   apiKey="5cd5f6f3125240f2864b9f18f70f9f2e"
   setProgress=(progress)=>{
    this.setState({progress:progress})
   }
  render() {
    return (
      <div>
      <Router>
        <NavBar />
        <LoadingBar
          color="#00ff00"
          progress={this.state.progress}/>
        <div className="container my-4">
          <Routes>
          <Route path="/" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="general" category="general" country="in" />} />
            <Route path="/general" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="general" category="general" country="in" />} />
            <Route path="/business" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="business" category="business" country="in" />} />
            <Route path="/entertainment" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" category="entertainment" country="in" />} />
            <Route path="/health" element={ <News setProgress={this.setProgress}  apiKey={this.apiKey} key="health" category="health" country="in" />} />
            <Route path="/science" element={ <News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" category="science" country="in" />} />
            <Route path="/sports" element={ <News setProgress={this.setProgress}  apiKey={this.apiKey} key="sports" category="sports" country="in" />} />
            <Route path="/technology" element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" category="technology" country="in" />} />
          </Routes>
        </div>
      </Router>
    </div>
    )
  }
}
