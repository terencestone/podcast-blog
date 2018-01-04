import React from 'react';
import logo from '../Images/logo.svg';
import { Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap';

const NavBar = (props) => {
  return (
    <Row className="App-header">
      <Col style={{maxWidth: 1200, margin: 'auto'}}>
        <Row>
          <Col sm='6' className="logo-title">
            <img src={logo} className="app-logo" alt="logo" />
            <div className='title'>The Invisible Landscape</div>
          </Col>
          <Col sm='6' className='custom-navbar'>
            <Link className='custom-nav-link' to={'/'}>Blog</Link>
            <Link className='custom-nav-link' to={'/'}>Podcast</Link>
            <Link className='custom-nav-link' to={'/'}>About</Link>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default NavBar;