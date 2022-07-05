import React from "react";
import { Link } from "react-scroll";
import DarkModeToggle from "react-dark-mode-toggle";

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: "header--white",
    }
    this.listenToScrollEvent = this.listenToScrollEvent.bind(this)
  }

  listenToScrollEvent = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll !== 0 && !this.props.darkMode) {
      this.setState({color: "header--black"})
    } else if (currentScroll === 0 && !this.props.darkMode) {
      this.setState({color: "header--white"})
    }
    else if (currentScroll !== 0 && this.props.darkMode) {
      this.setState({color: "header--white"})
    }
    else {
      this.setState({color: "header--black"})
    }
  }


  componentDidMount() {
    // listen for scroll to change the header state
     window.addEventListener('scroll', this.listenToScrollEvent)
  }

  componentDidUpdate(prevProps) {
    if(this.props.darkMode !== prevProps.darkMode) {
      this.listenToScrollEvent()
    }
  }

  render() {
    return(
      <header className={"header " + this.state.color}>
        <div className="header--navigation">
          <a href="#about" className="skip-link">Skip to main content</a>
          <div className="header--links">
            <Link
              className="header--link"
              to="about"
              smooth={true}
              offset={-125}
              duration= {500}
            >
              About
            </Link>
            <Link
              className="header--link"
              to="experience"
              smooth={true}
              offset={-125}
              duration= {500}
            >
              Experience
            </Link>
            <Link
              className="header--link"
              to="projects"
              smooth={true}
              offset={-125}
              duration= {500}
            >
              Projects
            </Link>
            <a
              className="header--link"
              href="https://drive.google.com/file/d/1xwOio5fqbao-g3EGv82H8gzSmWrqS9C7/view"
              rel="noopener noreferrer"
              target="blank"
            >
              Resume
            </a>

            <Link
              className="header--link"
              to="blogs"
              smooth={true}
              offset={-125}
              duration= {500}
            >
              Blogs
            </Link>
            <Link
              className="header--link"
              to="education"
              smooth={true}
              offset={-125}
              duration= {500}
            >
              Education
            </Link>
          </div>
          <Link
            className="header--contact"
            to="socials"
            smooth={true}
            offset={-125}
            duration= {500}
          >
            Contact Me
          </Link>
          <DarkModeToggle
              onChange={this.props.setDarkMode}
              checked={this.props.darkMode}
              size={50}
              className="header--toggle"
          />
        </div>
      </header>
   )
 }
}

export default Header
