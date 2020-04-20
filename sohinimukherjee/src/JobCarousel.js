import React from "react";

import './JobCarousel.scss';

import arrow from "./assets/right-arrow.png"
import nuffsaid from "./assets/nuffsaid-logo.svg"
import sibros from "./assets/sibros-logo.png"
import oanda from "./assets/oanda-logo.png"
import cesc from "./assets/cesc-logo.png"
import spc from "./assets/spc-logo.png"

class JobCarousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      leftArrow: false,
      rightArrow: true,
    }
    this.carouselRef = React.createRef();
    this.onScroll = this.onScroll.bind(this);
  }

  onScroll = event => {
    const carousel = event.target;
    if (carousel.scrollLeft !== 0) {
      this.setState({
        leftArrow: true,
      })
    } else {
      this.setState({
        leftArrow: false,
      })
    }

    if (carousel.scrollLeft !== carousel.scrollWidth - carousel.offsetWidth) {
      this.setState({
        rightArrow: true,
      })
    } else {
      this.setState({
        rightArrow: false,
      })
    }
  }

  render () {
    const leftArrow = (
        <button
          type="button"
          aria-label="scroll to the left"
          className="navigation--button"
          onClick={() => {
            this.carouselRef.current.scrollLeft = this.carouselRef.current.scrollLeft - 485;
          }}
          >
            <i aria-label="previous" className="active-arrow left" />
        </button>
      );
      const rightArrow = (
        <button
          type="button"
          aria-label="scroll to the right"
          className="navigation--button"
          onClick={() => {
            this.carouselRef.current.scrollLeft = this.carouselRef.current.scrollLeft + 485;
          }}
          >
          <i aria-label="next" className="active-arrow right" />
        </button>
      );
    return (
      <div className="carousel--container">
        { this.state.leftArrow ? leftArrow : null }
        <div className="carousel" ref={this.carouselRef} onScroll={this.onScroll}>
          <div className="carousel-item">
            <div className="carousel-item--template">
              <h2 className="experience-template--header">
                Here's where I've worked so far
              </h2>
              <div className="experience-template--footer">
                <p>Sorted by recency</p>
                <img
                  src={arrow}
                  alt="presentation"
                  className="right-arrow"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
              <a
                href="https://www.nuffsaid.com"
                className="carousel-item--experience"
                aria-label="go to nuffsaid"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <img
                    src={nuffsaid}
                    alt="nuffsaid logo"
                    className="experience--logo"
                  />
                </div>
                <h3 className="experience--header">
                  &#39;nuffsaid, SWE Intern
                </h3>
                <p className="experience--copy">
                  Palo Alto, California | Jan 2020 - Present
                </p>
                <ul className="experience--copy experience--footer">
                  <li>
                    Used ReactJS, and Gatsby to build the &#39;nuffsaid website
                    and blog from scratch
                  </li>
                  <li>Built the  &#39;nflow app that uses React Hooks and GCP</li>
                  <li>
                    Made crucial design and engineering decisions that improved
                    pipeline efficiency by 27%
                  </li>
                  <li>
                    Improved web.dev performance by 64% for Performance, SEO and
                    Accessibility
                  </li>
                </ul>
              </a>
            </div>
            <div className="carousel-item">
                <a
                  href="https://www.sibros.tech"
                  className="carousel-item--experience"
                  aria-label="go to sibros"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <img
                      src={sibros}
                      alt="sibros logo"
                      className="experience--logo"
                    />
                  </div>
                  <h3 className="experience--header">
                    Sibros, SWE Intern
                  </h3>
                  <p className="experience--copy">
                    San Jose, California | May 2019 - Aug 2019
                  </p>
                  <ul className="experience--copy experience--footer">
                    <li>
                      Implemented the Sibros React portal that is used to connect
                      the vehicle fleet to the cloud
                    </li>
                    <li>
                      Led the redesign project for the Sibros website, and built
                      it from scratch from UX to implementation
                    </li>
                    <li>
                      Worked on the Python backend that uses Flask to write APIs
                      to download packages and manage permissions
                    </li>
                    <li>
                      Implemented Firebase authentication that reduced bloat code
                      by 34%
                    </li>
                  </ul>
                </a>
              </div>
              <div className="carousel-item">
                <a
                  href="https://www.oanda.com"
                  className="carousel-item--experience"
                  aria-label="go to oanda"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <img
                      src={oanda}
                      alt="oanda logo"
                      className="experience--logo"
                    />
                  </div>
                  <h3 className="experience--header">
                    Oanda, Software Developer
                  </h3>
                  <p className="experience--copy">
                    Toronto, Ontario | Sep 2018 - Dec 2018
                  </p>
                  <ul className="experience--copy experience--footer">
                    <li>
                      Integrated cross-platform prediction tools to analyze
                      trading preferences into the fxTrade web service
                    </li>
                    <li>Completed over 50 tickets, written over 30 test cases
                      , and code-reviewed for the web, android, and iOS teams
                    </li>
                    <li>
                      Detected 17 crucial bugs that improved application
                      performance by 25%
                    </li>
                    <li>
                      Collaborated with the UX and Product Teams to improve
                      accessibility
                    </li>
                  </ul>
                </a>
              </div>
              <div className="carousel-item">
                <a
                  href="https://github.com/UW-Side-Project-Club"
                  className="carousel-item--experience"
                  aria-label="go to SPC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <img
                      src={spc}
                      alt="SPC logo"
                      className="experience--logo"
                    />
                  </div>
                  <h3 className="experience--header">
                    SPC, UWaterloo, Supervisor
                  </h3>
                  <p className="experience--copy">
                    Waterloo, Ontario | May 2018 - Aug 2018
                  </p>
                  <ul className="experience--copy experience--footer">
                    <li>
                      Built the Recommender System Model of the official
                      Side Project Club website
                    </li>
                    <li>
                      Supervised 16 students as part of the Machine Learning
                      sub-team
                    </li>
                    <li>
                      Taught concepts ranging from Logistic Regression to Anomaly
                      Detection during the span of 4 months as part of the
                      intensive weekly workshops
                    </li>
                  </ul>
                </a>
              </div>
              <div className="carousel-item">
                  <a
                    href="https://www.oanda.com"
                    className="carousel-item--experience"
                    aria-label="go to oanda"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <img
                        src={oanda}
                        alt="oanda logo"
                        className="experience--logo"
                      />
                    </div>
                    <h3 className="experience--header">
                      Oanda, JS Application Engineer
                    </h3>
                    <p className="experience--copy">
                      Toronto, Ontario | Jan 2018 - April 2018
                    </p>
                    <ul className="experience--copy experience--footer">
                      <li>
                        Shipped 3 new responsive web applets in Polymer 1.0
                      </li>
                      <li>
                        Wrote asynchronous API routes in Node.js to improve
                        performance by 10%
                      </li>
                      <li>
                        Reduced overall application size by 15% by refactoring
                        existing code using Prettier
                      </li>
                      <li>
                        Designed and implemented web utilities to improve code
                        reusability
                      </li>
                    </ul>
                  </a>
                </div>
                <div className="carousel-item">
                    <a
                      href="https://www.cesc.co.in"
                      className="carousel-item--experience"
                      aria-label="go to cesc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div>
                        <img
                          src={cesc}
                          alt="cesc logo"
                          className="experience--logo"
                        />
                      </div>
                      <h3 className="experience--header">
                        CESC, Software Developer
                      </h3>
                      <p className="experience--copy">
                        Kolkata, India | Jun 2017 - Aug 2017
                      </p>
                      <ul className="experience--copy experience--footer">
                        <li>
                          Deployed a CRUD web application to manage client
                          details, product transaction details, and material
                          details using Java, JS, Sass, and MySQL for Haldia
                          Energy Limited (H.E.L), a core client
                        </li>
                        <li>Implemented a custom export-to-Excel function as
                          part of the client requirements
                        </li>
                        <li>
                          Wrote a bash script to increase data download speed
                          by 35%
                        </li>
                      </ul>
                    </a>
                  </div>
                </div>
                { this.state.rightArrow ? rightArrow : null }
            </div>
    )
  }
}

export default JobCarousel;
