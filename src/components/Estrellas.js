import React, { useState } from 'react';

export const Estrellas = () => {
  const [star, setStar] = useState([false, false, false, false, false]);

  const handleStarClick = (e, index) => {
    e.preventDefault();
    let clickStates = [...star];
    for (let i = 0; i < 5; i++) {
      if (i <= index) {
        clickStates[i] = true;
      } else {
        clickStates[i] = false;
      }
    }
    setStar(clickStates);
  };
  // console.log(star)

  return (
    <>
      <i
        className="fa fa-star point"
        aria-hidden="true"
        onClick={e => handleStarClick(e, 0)}
        style={star[0] === true ? { color: '#fff200' } : null}
      ></i>

      <i
        className="fa fa-star point"
        aria-hidden="true"
        onClick={e => handleStarClick(e, 1)}
        style={star[1] === true ? { color: '#fff200' } : null}
      ></i>

      <i
        className="fa fa-star point"
        aria-hidden="true"
        onClick={e => handleStarClick(e, 2)}
        style={star[2] === true ? { color: '#fff200' } : null}
      ></i>

      <i
        className="fa fa-star point"
        aria-hidden="true"
        onClick={e => handleStarClick(e, 3)}
        style={star[3] === true ? { color: '#fff200' } : null}
      ></i>

      <i
        className="fa fa-star point"
        aria-hidden="true"
        onClick={e => handleStarClick(e, 4)}
        style={star[4] === true ? { color: '#fff200' } : null}
      ></i>
    </>
  );
};
