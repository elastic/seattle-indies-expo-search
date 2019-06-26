import React from 'react';

const Header = () => (
  <header className="homepage-header">
    <video
      className="homepage-header__bgvideo"
      preload="auto"
      loop
      muted
      autoPlay
      poster="https://six.seattleindies.org/assets/videos/hero.jpg"
    >
      <source
        src="https://six.seattleindies.org/assets/videos/hero.webm"
        type="video/webm"
      />
      <source
        src="https://six.seattleindies.org/assets/videos/hero.mp4"
        type="video/mp4"
      />
      <source
        src="https://six.seattleindies.org/assets/videos/hero-mobile.mp4"
        type="video/mp4"
        media="(max-width: 600px)"
      />
    </video>
    <h1 className="homepage-header__title">
      <span className="ani-reveal">Seattle</span>
      <span className="ani-reveal ani-reveal--lighter">Indies</span>
      <span className="ani-reveal ani-reveal--lightest">Expo</span>
    </h1>
    <h2 className="homepage-header__subtitle ani-fadein">
      Search through all the innovative games that an indie festival in the PNW
      has exhibited.
    </h2>
  </header>
);

export default Header;
