import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUndo,
  faRedo,
  faImage,
  faFont,
} from '@fortawesome/free-solid-svg-icons';

const Top = () => {
  return (
    <div className="flex-container">
      <div className="divider" />
      <div className="icon-item">
        <button className="top-icon">
          <FontAwesomeIcon icon={faUndo} className="top-font-awesome" />
          Undo
        </button>
      </div>
      <div className="divider" />
      <div className="icon-item">
        <button className="top-icon">
          <FontAwesomeIcon icon={faRedo} className="top-font-awesome" />
          Redo
        </button>
      </div>
      <div className="divider" />
      <div className="icon-item">
        <button className="top-icon">
          <FontAwesomeIcon icon={faImage} className="top-font-awesome" />
          Image
        </button>
      </div>
      <div className="divider" />
      <div className="icon-item">
        <button className="top-icon">
          <FontAwesomeIcon icon={faFont} className="top-font-awesome" />
          Text
        </button>
      </div>
      <div className="divider" />
      <div className="btn-item">
        <a href="# " className="btn btn--red btn--animated">
          Save
        </a>
      </div>
      <div className="btn-item">
        <a href="# " className="btn btn--orange btn--animated">
          Add to Cart
        </a>
      </div>
    </div>
  );
};

export default Top;
