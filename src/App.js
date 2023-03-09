import React, { useState, useEffect } from 'react';
import "./App.css";
import Modal from './components/Modal';

// import { getNFTs } from './api'; // function to retrieve NFTs from API

function NFTGrid({ address }) {
  const [nfts, setNFTs] = useState([]);
  const [selectedNFT, setSelectedNFT] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // const nfts = await getNFTs(address);
      const nfts = [];
      for(let i=0;i<10;i++) {
        nfts.push({
          id: i,
          name: "Staff Name",
          image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
          description: "Start editing to see some magic happen :)"
        });
      }
      console.log(nfts)
      setNFTs(nfts);
    }
    fetchData();
  }, [address]);

  const handleCardClick = (nft) => {
    setSelectedNFT(nft);
  };

  const handleCloseModal = () => {
    setSelectedNFT(null);
  };

  return (
    <div className="nft-grid">
      {nfts.map((nft) => (
        <div className="nft-card" key={nft.id} onClick={() => handleCardClick(nft)}>
          <img src={nft.image} alt={nft.name} />
          <h3>{nft.name}</h3>
          <p>{nft.description}</p>
        </div>
      ))}
      {selectedNFT && (
        <Modal item={selectedNFT} handleCloseModal={handleCloseModal} />
      )}
    </div>
  );
}


export default function App() {
  return (
    <NFTGrid address="abala" />
  );
}
