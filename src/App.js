import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.component';
import Post from './components/Post/Post.component';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Post />
      </div>
    );
  }
}
export default App;
