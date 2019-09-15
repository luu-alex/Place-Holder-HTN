import React, { Component } from 'react';
import Navigation from './components/Navigation';
import CarouselPage from './components/Carousel';
import Main from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Navigation />
      <div className="container">
      <Main />
      <CarouselPage />
      </div>
      </div>
    );
  }
}

export default App;

