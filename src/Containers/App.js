import React, { Component } from 'react';
import '../Styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route } from 'react-router-dom'
import BlogHome from '../Components/BlogHome';
import BlogPost from '../Components/BlogPost';
import NavBar from '../Components/NavBar';
import { Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="App">
          <NavBar />
          <Row className='main-content'>
            <Col xs='12' md='9'>
              <Switch>
                <Route exact path='/' component={BlogHome} {...this.props} />
                <Route path="/p/:page" component={BlogHome} {...this.props} />
                <Route path="/post/:slug" component={BlogPost} {...this.props} />
              </Switch>
            </Col>
            <Col xs='12' md='3' style={{border: '1px dotted black'}}>
              This is the side bar
            </Col>
          </Row>
        </div>
        <div style={{height: 300, backgroundColor: 'lightGray', color: 'white'}}>This is the footer</div>
      </div>
    );
  }
}

export default App;
