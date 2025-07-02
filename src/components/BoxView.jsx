import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './show.css';
import { useTranslation } from 'react-i18next';

const BoxView = ({ onAddBox }) => {
  const { t } = useTranslation();
  const [boxes, setBoxes] = useState('');

  const handlerNotSure = (e) => {
    e.preventDefault();
    if (boxes.trim() !== '') {
      onAddBox(boxes.trim());
      setBoxes('');
      document.querySelector('.input-box').focus();
    }
  };

  return (
    <>
      <form className="box-view" onSubmit={handlerNotSure}>
        <input
          className="input-box"
          type="text"
          value={boxes}
          onChange={(e) => setBoxes(e.target.value)}
          placeholder={t('enter_note_placeholder')}
        />
        <button className='add-button' type="submit">{t('add_task')}</button>
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
