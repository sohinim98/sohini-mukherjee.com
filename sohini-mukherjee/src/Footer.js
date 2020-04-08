import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <section className="footer">
      <div className="socials">
        <a
          aria-label="go to github"
          href="https://github.com/sohinim98"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <i className="fa fa-github fa-3x"></i>
        </a>
        <a
          aria-label="go to stack overflow"
          href="https://stackoverflow.com/users/9011529/sohinim98"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <i class="fa fa-stack-overflow fa-3x"></i>
        </a>
        <a
          aria-label="go to linkedin"
          href="https://www.linkedin.com/in/sohinim98"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <i className="fa fa-linkedin fa-3x"></i>
        </a>
        <a
          aria-label="go to facebook"
          href="https://www.facebook.com/sohini.a.mukherjee"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <i className="fa fa-facebook fa-3x"></i>
        </a>
        <a
          aria-label="go to twitter"
          href="https://twitter.com/sohinim98"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <i className="fa fa-twitter fa-3x"></i>
        </a>
        <a
          aria-label="send an email"
          href="mailto:sohinim98@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <i className="fa fa-envelope fa-3x"></i>
        </a>
        <a
          aria-label="go to instagram"
          href="https://www.instagram.com/sohmusoblue"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <i className="fa fa-instagram fa-3x"></i>
        </a>
        <a
          aria-label="go to spotify"
          href="https://open.spotify.com/user/gv8w65mujuk7l1ehzw0gqsbcz"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <i class="fa fa-spotify fa-3x"></i>
        </a>
      </div>
      <div>© 2020, Sohini Mukherjee. All rights reserved.</div>
    </section>
  )
}

export default Footer
