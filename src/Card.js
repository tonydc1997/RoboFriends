import React from 'react';

const Card = () => {
  return(
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src="https://robohash.org/example?set=set3&200x200" alt="Robot"/>;
      <div>
        <h2>Jane Doe</h2>
        <p>jane.doe@gmail.com</p>
      </div>
    </div>
  );

}

export default Card;
