import React from 'react';

import './Main.scss';
import Header from "./Header"
import Hamburger from "./Hamburger"
import JobCarousel from "./JobCarousel"
import Footer from "./Footer"

import imageCompression from "./assets/image-compression.png"
import brickBall from "./assets/brick-ball.png"
import reactLogo from "./assets/react.png"
import goodWillHunting from "./assets/good-will-hunting.png"
import spam from "./assets/spam.png"
import code from "./assets/code.png"
import quarantine from "./assets/quarantine.png"
import durgaPuja from "./assets/durga-puja.png"
import pride from "./assets/pride.png"
import uWaterloo from "./assets/uwaterloo.png"
import laMartiniere from "./assets/lamartiniere.png"
import spokenWord from "./assets/spoken-word.png"

const Main = () => {
  return (
    <main id="main" className="main" role="main">
      <Header />
      <Hamburger />

      <section className="about" id="about">
        <div className="about--textbox">
          <h1 className="heading">Hey, I'm Sohini.</h1>
          <p>
            I like Math, Physics, building new things, and performance poetry.
          </p>
          <p>
            I’m a Computer Engineering student with minors in Cognitive Science
            at the&nbsp;
            <a
              href="https://uwaterloo.ca"
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

      <section className="experience" id="experience">
        <h2 className="heading section-header">Work experience</h2>
          <JobCarousel />
      </section>

      <section className="skills-section" id="projects">
        <h2 className="heading section-header">Projects</h2>
        <div className="skills">
          <a
            aria-label="go to project"
            href="https://github.com/sohinim98/K-means-Clustering-Image-Compression"
            target="_blank"
            rel="noopener noreferrer"
            className="skill"
          >
            <img src={imageCompression} alt="presentation" className="skill--image" />
            <h3 className="skill--title">
              K-means-clustering Image Compression | M.L.
            </h3>
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
            className="skill"
          >
            <img src={brickBall} alt="presentation" className="skill--image" />
            <h3 className="skill--title">Bricks and Ball | Game Dev</h3>
            <p>
              Implemented a 2-D ball, paddle, and bricks game using JS, Canvas,
              and linear kinematics. Takes mouse and keyboard handling into
              account, and gives you 3 lives!
            </p>
          </a>
          <a
            aria-label="go to project"
            href="https://github.com/sohinim98/sohinimukherjee.com"
            target="_blank"
            rel="noopener noreferrer"
            className="skill"
          >
            <img src={reactLogo} alt="presentation" className="skill--image" />
            <h3 className="skill--title">React Web App | App & Web Dev</h3>
            <p>
              Created a personal web app using React for content generation, and
              audience interaction.
              100% test coverage for performance, accessibility, and SEO using
              web.dev.
              Followed React best practices and design principles, and used a
              mobile-first approach.
            </p>
          </a>
        </div>
        <div className="skills">
          <a
            aria-label="go to project"
            href="https://github.com/sohinim98/Server-Anomaly-Detection-and-Movie-Recommender-System"
            target="_blank"
            rel="noopener noreferrer"
            className="skill"
          >
            <img src={goodWillHunting} alt="presentation" className="skill--image" />
            <h3 className="skill--title">
              Movie Recommender & Anomaly Detection | M.L.
            </h3>
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
            className="skill"
          >
            <img src={spam} alt="presentation" className="skill--image" />
            <h3 className="skill--title">Spam Classifier | M.L.</h3>
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
            className="skill"
          >
            <img src={code} alt="presentation" className="skill--image" />
            <h3 className="skill--title">
              QuarantLeetCode | Data Structures & Algorithms
            </h3>
            <p>
              A stockpile of data structure and algorithm questions in C during
              Quarantine 2020 for cracking the coding interview!
            </p>
          </a>
        </div>
      </section>

      <section className="skills-section" id="blogs">
        <h2 className="heading section-header">Blogs & Photos</h2>
        <div className="skills">
          <a
            aria-label="go to blog post"
            href="https://throwsioexception.wordpress.com/2020/03/24/quarantine-in-california"
            target="_blank"
            rel="noopener noreferrer"
            className="skill"
          >
            <img src={quarantine} alt="presentation" className="skill--image" />
            <h3 className="skill--title">
              Quarantine in California
            </h3>
            <p>
              A pack of coyotes, a roller blader in tennis shorts, a police
              helicopter, two starlets wearing the same dress, a dog in a
              stroller, a palm tree on fire, and an off-brand super hero –
              legend has it that if you spot these seven totems in LA, you’re
              guaranteed to live here forever...
            </p>
          </a>
          <div className="embedded-photo--container">
            <img src={pride} alt="presentation" className="embedded-photo"/>
            <h3 className="skill--title">
              Pride | Toronto, 2018
            </h3>
          </div>
          <a
            aria-label="go to blog post"
            href="https://throwsioexception.wordpress.com/2018/01/24/yours-sincerely"
            target="_blank"
            rel="noopener noreferrer"
            className="skill"
          >
            <img src={durgaPuja} alt="presentation" className="skill--image" />
            <h3 className="skill--title">
              Yours Sincerely,
            </h3>
            <p>
              On some days, your heart just wants to break out of your rib
              cage and lie on your bed back home, next to your mother. You
              wonder how far you’ve travelled from the place where you really
              belonged by virtue of birth; a place which tied you down with
              strings of familiarity...
            </p>
          </a>
        </div>
      </section>

      <section className="skills-section" id="education">
        <h2 className="heading section-header">Education & Hobbies</h2>
        <div className="skills">
          <a
            aria-label="go to university website"
            href="https://uwaterloo.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="skill skill--short"
          >
            <img src={uWaterloo} alt="presentation" className="skill--image" />
            <h3 className="skill--title">
              University of Waterloo | 2017-2022
            </h3>
            <p>
              Computer Engineering, Bachelor of Applied Science
            </p>
          </a>
          <div className="embedded-photo--container">
            <img src={spokenWord} alt="presentation" className="embedded-photo"/>
            <h3 className="skill--title">
              Performance Poetry
            </h3>
          </div>
          <a
            aria-label="go to school website"
            href="http://www.lamartiniere.co"
            target="_blank"
            rel="noopener noreferrer"
            className="skill skill--short"
          >
            <img src={laMartiniere} alt="presentation" className="skill--image" />
            <h3 className="skill--title">
              La Martiniere for Girls | 2015-2017
            </h3>
            <p>
              Computer Science, CISCE
            </p>
          </a>
        </div>
      </section>

      <section className="socials--section" id="socials"><Footer /></section>
    </main>
  )
}

export default Main
