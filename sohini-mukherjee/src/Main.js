import React from 'react';

import './Main.scss';
import JobCarousel from "./JobCarousel"

const Main = () => {
  return (
    <main id="main" className="main" role="main">
      <section className="bio">
        <div className="bio--textbox">
          <h1 className="heading">Hey, I'm Sohini.</h1>
          <p>
            I like Math, Physics, building new things, and performance poetry.
          </p>
          <p>
            I’m a Computer Engineering student with minors in Cognitive Science
            at the&nbsp;
            <a
              href="https://uwaterloo.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              University of Waterloo
            </a>
            .
          </p>
          <p>
            I have a keen interest in artificial intelligence and software
            development.
          </p>
        </div>
      </section>

      <section className="experience">
        <h1 className="heading section-header">Work experience</h1>
      </section>

      <section className="projects">
        <JobCarousel />
      </section>

      <section className="blogs">
      </section>
    </main>
  )
}

export default Main
