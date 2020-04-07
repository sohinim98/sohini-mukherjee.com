import React from 'react';

import './Main.scss';
import JobCarousel from "./JobCarousel"

import imageCompression from "./assets/image-compression.png"
import brickBall from "./assets/brick-ball.png"
import reactLogo from "./assets/react.png"
import goodWillHunting from "./assets/good-will-hunting.png"
import spam from "./assets/spam.png"
import code from "./assets/code.png"

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
          <JobCarousel />
      </section>

      <section className="side-projects">
        <h1 className="heading section-header">Projects</h1>
        <div className="projects">
          <a
            aria-label="go to project"
            href="https://github.com/sohinim98/K-means-Clustering-Image-Compression"
            target="_blank"
            rel="noopener noreferrer"
            className="project"
          >
            <img src={imageCompression} alt="presentation" className="project--image" />
            <h2 className="project--title">
              K-means-clustering Image Compression | M.L.
            </h2>
            <p>
              Implemented K-means clustering algorithm and applied it for image
              compression, along with Principal Component Analysis (PCA) to find
              a low-dimensional representation of face images.
            </p>
          </a>
          <a
            aria-label="go to project"
            href="https://github.com/sohinim98/javascript-game-development"
            target="_blank"
            rel="noopener noreferrer"
            className="project"
          >
            <img src={brickBall} alt="presentation" className="project--image" />
            <h2 className="project--title">Bricks and Ball | Game Dev</h2>
            <p>
              Implemented a 2-D ball, paddle, and bricks game using JS, Canvas,
              and linear kinematics. Takes mouse and keyboard handling into
              account, and gives you 3 lives!
            </p>
          </a>
          <a
            aria-label="go to project"
            href="https://github.com/sohinim98/sohini-mukherjee.com"
            target="_blank"
            rel="noopener noreferrer"
            className="project"
          >
            <img src={reactLogo} alt="presentation" className="project--image" />
            <h2 className="project--title">React Web App | App & Web Dev</h2>
            <p>
              Created a personal web app using React for content generation, and
              audience interaction.
              100% test coverage for performance, accessibility, and SEO using
              web.dev.
              Followed React best practices, and design principles.
            </p>
          </a>
        </div>
        <div className="projects">
          <a
            aria-label="go to project"
            href="https://github.com/sohinim98/Server-Anomaly-Detection-and-Movie-Recommender-System"
            target="_blank"
            rel="noopener noreferrer"
            className="project"
          >
            <img src={goodWillHunting} alt="presentation" className="project--image" />
            <h2 className="project--title">
              Movie Recommender & Anomaly Detection | M.L.
            </h2>
            <ul>
              <li>
                 Implemented an anomaly detection algorithm and applied it to
                 detect failing servers on a network.
              </li>
              <li>
                Used collaborative filtering to build a recommender system for
                movies.
              </li>
            </ul>
          </a>
          <a
            aria-label="go to project"
            href="https://github.com/sohinim98/SVM-Spam-Classifier"
            target="_blank"
            rel="noopener noreferrer"
            className="project"
          >
            <img src={spam} alt="presentation" className="project--image" />
            <h2 className="project--title">Spam Classifier | M.L.</h2>
            <p>
              Used Support Vector Machines (SVMs), and Gaussian Kernels to
              build a spam classifier for emails based on the text.
            </p>
          </a>
          <a
            aria-label="go to project"
            href="https://github.com/sohinim98/quarantineAlgorithms"
            target="_blank"
            rel="noopener noreferrer"
            className="project"
          >
            <img src={code} alt="presentation" className="project--image" />
            <h2 className="project--title">
              QuarantLeetCode | Data Structures & Algorithms
            </h2>
            <p>
              A stockpile of data structure and algorithm questions in C during
              Quarantine 2020 for cracking the coding interview!
            </p>
          </a>
        </div>
      </section>

      <section className="blogs">
      </section>
    </main>
  )
}

export default Main
