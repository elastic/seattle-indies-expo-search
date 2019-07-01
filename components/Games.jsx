import React, { useState } from 'react';

import { ModalContext } from '../components/Modal';
import getVideoUrls from '../utils/video';

const Games = ({ children }) => (
  <div className="line-up u-word-break">{children}</div>
);

const Game = ({ result: game }) => {
  // TODO: Replace this with a more robust method
  const title = game.title.raw.replace(/&amp;/gi, '&').replace(/&shy;/gi, '­');

  return (
    <ModalContext.Consumer>
      {({ openModal, updateModal }) => {
        // Some older years don't have enough game info for a modal
        // - these should link directly to their website
        const hasGameModal = !(game.modal && game.modal.raw === 'false');
        const openGameModal = () => {
          updateModal(game);
          openModal();
        };
        const clickAction = hasGameModal
          ? { onClick: openGameModal }
          : {
              href: game.website.raw,
              target: '_blank',
              rel: 'noreferrer noopener',
            };

        return (
          <a className="game" {...clickAction}>
            <img src={game.logo.raw} alt={title} />
            <div className="game__overlay">
              <h3 className="game__title">{title}</h3>
              <h4 className="game__studio">{game.studio.raw}</h4>
            </div>
          </a>
        );
      }}
    </ModalContext.Consumer>
  );
};

const GameModal = ({ game }) => {
  const screenshots = game.screenshots.raw || [];
  const platforms = game.platforms.raw || [];
  const video = getVideoUrls(game.video);

  const [isTrailerPlaying, showTrailer] = useState(false);
  const [currentScreenshot, showScreenshot] = useState(screenshots[0]);

  return (
    <article className="game-modal">
      <aside className="game-modal__media">
        {!isTrailerPlaying && <img alt="" src={currentScreenshot} />}
        {video && isTrailerPlaying && (
          <div className="game-modal__video-wrapper">
            <iframe
              src={video.src}
              width="560"
              height="253"
              frameBorder="0"
              allowFullScreen
              title={`${game.title.raw} Trailer`}
            ></iframe>
          </div>
        )}
        <div className="game-modal__media-select">
          {video && (
            <a
              href={video.url}
              onClick={e => {
                e.preventDefault();
                showTrailer(true);
              }}
              className="game-modal__video-thumbnail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={video.thumb} alt="" />
            </a>
          )}
          {screenshots.map(src => (
            <a
              href={src}
              onClick={e => {
                e.preventDefault();
                showScreenshot(src);
                showTrailer(false);
              }}
              target="_blank"
              rel="noopener noreferrer"
              key={src}
            >
              <img
                className="js-game-media-select"
                data-media="image"
                src={src}
                alt=""
              />
            </a>
          ))}
        </div>
      </aside>

      <section className="game-modal__copy">
        <h1>{game.title.raw}</h1>

        <ul className="game-modal__details">
          <li>
            <strong>Show Year:</strong> {game.year.raw}
          </li>
          <li>
            <strong>Developers:</strong> {game.studio.raw}
          </li>
          {platforms && (
            <li>
              <strong>Platforms:</strong> {platforms.join(', ')}
            </li>
          )}
        </ul>

        <div dangerouslySetInnerHTML={{ __html: game.description.raw }}></div>

        <a
          className="game-modal__cta button button--important"
          href={game.website.raw}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Game Website
        </a>
      </section>
    </article>
  );
};

export { Games, Game, GameModal };
