import React, { Component } from 'react';
import logo from '../Images/logo.svg';
import '../Styles/App.css';
import { Switch, Route } from 'react-router-dom'
import BlogHome from '../Components/BlogHome';
import BlogPost from '../Components/BlogPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className='nav-bar'>
            <a className='nav-link' href='/'>Blog</a>
            <a className='nav-link' href='/'>Podcast</a>
            <a className='nav-link' href='/'>About</a>
          </div>
        </header>
        <div className='main-content'>
          <Switch>
            <Route exact path='/' component={BlogHome} {...this.props} />
            <Route path="/p/:page" component={BlogHome} {...this.props} />
            <Route path="/post/:slug" component={BlogPost} {...this.props} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
