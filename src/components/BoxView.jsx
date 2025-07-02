import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './show.css';

const BoxView = ({ onAddBox }) => {

  const [boxes, setBoxes] = useState("");

  const handlerNotSure = (e) => {
    e.preventDefault();
    if (boxes.trim() !== "") {
      onAddBox(boxes.trim());
      setBoxes("");
      document.querySelector('.input-box').focus();
    }
  };

  return (
    <>
      <form className="box-view" onSubmit={handlerNotSure}>
        <input className='input-box' type="text" value={boxes} onChange={e => setBoxes(e.target.value)} placeholder='Enter your note here' />
        <button className='add-button' type="submit">Add ToDo</button>


      </form>


    </>
  );


};

BoxView.propTypes = {
  onAddBox: PropTypes.func.isRequired,
  onShowBoxes: PropTypes.func, // Optional, only if you use it
  boxes: PropTypes.string,
};

export default BoxView;
