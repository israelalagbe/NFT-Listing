import React from "react";
import './index.scss';

/**
 *
 * @param {Object} props
 * @param {{
 * name: string,
 * image_url: string,
 * description: string,
 * permalink: string,
 * }} props.item
 * @param {Function} props.handleCloseModal
 * @returns
 */
function Modal({ item, handleCloseModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleCloseModal}>
          &times;
        </span>
        <h2>{item.name}</h2>
        <img src={item.image_url} alt={item.name} />
        <p>{item.description}</p>
        <a href={item.permalink} target="_blank" rel="noreferrer">
          Purchase on OpenSea
        </a>
      </div>
    </div>
  );
}

export default Modal;
