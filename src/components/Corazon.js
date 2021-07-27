import React, { useState } from 'react';

export const Corazon = () => {
  const [like, setLike] = useState(false);
  const [likes, setLikes] = useState(10);

  const heart = () => {
    setLike(value => !value);
    setLikes(likes - 1);
    if (like === false) {
      setLikes(likes + 1);
    }
  };

  return (
    <>
      {like ? (
        <i
          className="fa fa-heart col-heart"
          aria-hidden="true"
          onClick={heart}
        ></i>
      ) : (
        <i className="fa fa-heart" aria-hidden="true" onClick={heart}></i>
      )}
      <div>
        <p className="likes"> {likes} personas les gusta</p>
      </div>
    </>
  );
};
