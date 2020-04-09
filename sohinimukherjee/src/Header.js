import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: "header--white",
    }
  }

  listenToScrollEvent = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll !== 0) {
      this.setState({color: "header--black"})
    } else {
      this.setState({color: "header--white"})
    }
  }

  componentDidMount() {
    // listen for scroll to change the header state
     window.addEventListener('scroll', this.listenToScrollEvent)
  }

  render() {
    return(
      <header className={"header " + this.state.color}>
        <div className="header--navigation">
          <a href="#about" className="skip-link">Skip to main content</a>
          <div className="header--links">
            <a href="#about" className="header--link">About</a>
            <a href="#experience" className="header--link">Experience</a>
            <a href="#projects" className="header--link">Projects</a>
            <a href="#blogs" className="header--link">Blogs</a>
            <a href="#education" className="header--link">Education</a>
          </div>
          <a href="#socials" className="header--contact">Contact Me</a>
        </div>
      </header>
   )
 }
}

export default Header
