import React from 'react';

const Games = ({ children }) => (
  <div className="line-up u-word-break">{children}</div>
);

const Game = ({ result: game }) => {
  console.log(game);

  // TODO: Replace this with a more robust method
  const title = game.title.raw.replace(/&amp;/gi, '&').replace(/&shy;/gi, '­');

  return (
    <a className="game" href="#headlinernovinews">
      <img src={game.logo.raw} alt={title} />
      <div className="game__overlay">
        <h3 className="game__title">{title}</h3>
        <h4 className="game__studio">{game.studio.raw}</h4>
      </div>
    </a>
  );
};

export { Games, Game };
