import React, { Component } from 'react';
import logo from './images/floors2newlogo.PNG';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Jumbotron,
  Button,
  DropdownItem } from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ImageCarousel from './Components/imageCarousel.js';
import Testimonials from './Components/TestimonialCards.js';



class App extends Component {
  constructor(props) {
  super(props);

  this.toggle = this.toggle.bind(this);
  this.state = {
    isOpen: false
  };
}

toggle() {
  this.setState({
    isOpen: !this.state.isOpen
  });
}
render() {
  return (
    <div>
          <Navbar color="faded" light expand="md">
            <NavbarBrand><img alt='Floors2New Logo' src={logo} height='100' object-fit='contain'/></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#OurWork">About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Testimonials</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Gallery</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Contact Us</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Jumbotron>
            <h1 className="display-3">Welcome to Floors2New</h1>
            <p className="lead">Floors 2 New are Newry & Irelands Floor Cleaning Specialists, we operate on a Commercial and Domestic basis in Cities and Counties all over Ireland to Include: Newry, Belfast, Derry, Tyrone, Dublin, Navan, Dundalk, Drogheda, Galway and Cork. Hilltown, Dromore, Banbridge, Rathfriland, Warrenpoint, Rostrevor, Kilkeel, Newcastle</p>
              <hr className="my-2" />
            <p></p>
            <p className="lead">
              <Button color="primary">Get a Quote</Button>
            </p>

          </Jumbotron>
          <div aligin="center">
          <h1>Our Work</h1>
              <ImageCarousel/>
          </div>

            <br />
        <h1>Testimonials</h1>
            <Testimonials/>
  </div>
  )
}
}

export default App;
