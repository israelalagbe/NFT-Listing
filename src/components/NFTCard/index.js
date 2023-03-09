import React from "react";
import "./index.scss";

/**
 *
 * @param {Object} props
 * @param {{
 * name: string,
 * image_url: string,
 * description: string,
 * permalink: string,
 * }} props.item
 * @param {Function} props.handleCardClick
 * @returns
 */
function NFTCard({ item, handleCardClick }) {
  return (
    <div className="nft-card" key={item.id} onClick={() => handleCardClick(item)}>
      <img src={item.image_url} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description.substring(0, 20)}</p>
    </div>
  );
}

export default NFTCard;
