import React from 'react';
import './Main.scss';

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
            <a href="https://uwaterloo.ca/" target="_blank">University of
              Waterloo
            </a>
            <p>
              I have a keen interest in artificial intelligence and software
              development.
            </p>

          </p>
        </div>
      </section>

      <section className="experience">
      </section>

      <section className="projects">
      </section>

      <section className="blogs">
      </section>
    </main>
  )
}

export default Main
