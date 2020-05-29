import React from "react";
import { Link } from "react-scroll";

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
              href="https://drive.google.com/file/d/1LVCl-J39Fhdoexr9E7ZAN_ZJnG_a_Htv/view"
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
        </div>
      </header>
   )
 }
}

export default Header
