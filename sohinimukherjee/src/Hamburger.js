import React from "react"
import { Link } from "react-scroll";
import { slide as Menu } from 'react-burger-menu'

import './Hamburger.scss';

class Hamburger extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
      lastScroll: 0,
    }
    this.handleStateChange = this.handleStateChange.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.customToggle = this.customToggle.bind(this);
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false })
  }

  customToggle() {
    this.setState((state) => ({
      menuOpen: !state.menuOpen
    }));
  }

  render () {
    return (
      <div className="hamburger--wrapper">
        <div className="hamburger--fixed-header">
            <button
              onClick={() => this.customToggle()}
              className="hamburger--custom-button">
              <div className="hamburger--custom-icon"></div>
              <div className="hamburger--custom-icon"></div>
              <div className="hamburger--custom-icon"></div>
            </button>
          </div>
        <Menu
          customBurgerIcon={false}
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
          >
          <Link
            className="menu-item"
            to="about"
            smooth={true}
            offset={-125}
            duration= {500}
            onClick={() => this.closeMenu()}
          >
            About
          </Link>
          <Link
            className="menu-item"
            to="experience"
            smooth={true}
            offset={-125}
            duration= {500}
            onClick={() => this.closeMenu()}
          >
            Experience
          </Link>
          <Link
            className="menu-item"
            to="projects"
            smooth={true}
            offset={-125}
            duration= {500}
            onClick={() => this.closeMenu()}
          >
            Projects
          </Link>
          <Link
            className="menu-item"
            to="blogs"
            smooth={true}
            offset={-125}
            duration= {500}
            onClick={() => this.closeMenu()}
          >
            Blogs
          </Link>
          <Link
            className="menu-item"
            to="education"
            smooth={true}
            offset={-125}
            duration= {500}
            onClick={() => this.closeMenu()}
          >
            Education
          </Link>
          <Link
            className="menu-item hamburger--contact"
            to="socials"
            smooth={true}
            offset={-125}
            duration= {500}
            onClick={() => this.closeMenu()}
          >
            Contact Me
          </Link>
        </Menu>
      </div>
    );
  }
}

export default Hamburger
