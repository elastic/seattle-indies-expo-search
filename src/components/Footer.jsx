import React from 'react';

const Footer = () => (
  <footer className="site-footer container">
    <section className="site-footer__section">
      This is an experimental demo in implementing Swiftype's
      <br />
      <a className="underlined" href="https://swiftype.com/search-ui">
        Search UI
      </a>{' '}
      and{' '}
      <a className="underlined" href="https://swiftype.com/app-search">
        App Search
      </a>
      . Thanks for checking it out!
    </section>
    <section className="site-footer__section site-footer__socials">
      <a className="underlined" href="https://six.seattleindies.org/">
        Visit the main Seattle Indies Expo site here!
      </a>
    </section>
  </footer>
);

export default Footer;
