import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div
      className="tc white dib br3 pa3 ma2 grow bw2 shadow-5"
      style={{
        background:
          'linear-gradient(to bottom, #5679f9, #5679f9, #5679f9, #5679f9, #5679f9)',
      }}
    >
      <img
        src={`https://robohash.org/${id}/set_set3?size=200x200`}
        alt="Robot"
      />
      <div>
        <h2>{name}</h2>
        <p className="light-gray">{email}</p>
      </div>
    </div>
  );
};

export default Card;
