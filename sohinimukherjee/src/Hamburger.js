import React from "react"
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
          <a href="#about" className="menu-item" onClick={() => this.closeMenu()}>About</a>
          <a href="#experience" className="menu-item" onClick={() => this.closeMenu()}>Experience</a>
          <a href="#projects" className="menu-item" onClick={() => this.closeMenu()}>Projects</a>
          <a href="#blogs" className="menu-item" onClick={() => this.closeMenu()}>Blogs</a>
          <a href="#education" className="menu-item" onClick={() => this.closeMenu()}>Education</a>
          <a href="#socials" className="menu-item hamburger--contact" onClick={() => this.closeMenu()}>Contact Me</a>
        </Menu>
      </div>
    );
  }
}

export default Hamburger
