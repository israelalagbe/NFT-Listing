import React, { useState } from "react";
import Modal from "../Modal";
import NFTCard from "../NFTCard";
import './index.scss';
import { useFetchNFT } from "../../hooks/useFetchNFT";
import Loader from "../Loader";

function NFTListing() {

  const [state, setState] = useState({
    data: [],
    state: "idle", // idle, loading, error
    error: null,
    limit: 20,
    offset: 0,
  });

  const [selectedNFT, setSelectedNFT] = useState(null);

  useFetchNFT(state, setState);

  const handleCardClick = (nft) => {
    setSelectedNFT(nft);
  };

  const handleCloseModal = () => {
    setSelectedNFT(null);
  };

  const handleNextClick = () => {
    setState({
      ...state,
      offset: state.offset + state.limit
    });
  };

  return (
    <>
      <div className="nft-listing">
        {state.data.map((nft) => (
          <NFTCard item={nft} handleCardClick={handleCardClick} key={nft.id} />
        ))}
        
        {selectedNFT && <Modal item={selectedNFT} handleCloseModal={handleCloseModal} />}
      </div>
      {state.state === "loading" && <Loader />}
      {state.state === "idle" && <button onClick={handleNextClick} className="next-btn">NEXT</button>}
      {state.state === "error" && <p className="error">{state.error}</p>}
    </>
  );
}

export default NFTListing;


