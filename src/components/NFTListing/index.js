import React, { useState } from "react";
import Modal from "../Modal";
import NFTCard from "../NFTCard";
import './index.scss';
import { useFetchNFT } from "../../hooks/useFetchNFT";
import Loader from "../Loader";

function NFTListing() {
  const [nfts, setNFTs] = useState([]);
  const [uiState, setUIState] = useState({
    state: "idle", // idle, loading, error
    error: null,
    limit: 20, 
    offset: 0
  }); // idle, loading, error

  const [selectedNFT, setSelectedNFT] = useState(null);

  useFetchNFT(setUIState, uiState, setNFTs);

  const handleCardClick = (nft) => {
    setSelectedNFT(nft);
  };

  const handleCloseModal = () => {
    setSelectedNFT(null);
  };

  const handleNextClick = () => {
    setUIState({
      ...uiState,
      offset: uiState.offset + uiState.limit
    });
  };

  return (
    <>
      <div className="nft-listing">
        {nfts.map((nft) => (
          <NFTCard item={nft} handleCardClick={handleCardClick} key={nft.id} />
        ))}
        
        {selectedNFT && <Modal item={selectedNFT} handleCloseModal={handleCloseModal} />}
      </div>
      {uiState.state === "loading" && <Loader />}
      {uiState.state !== "loading" && <button onClick={handleNextClick} className="next-btn">NEXT</button>}
    </>
  );
}

export default NFTListing;


