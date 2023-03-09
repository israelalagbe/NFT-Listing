import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import NFTCard from "../NFTCard";
import './index.scss';

function NFTListing() {
  const [nfts, setNFTs] = useState([]);
  const [selectedNFT, setSelectedNFT] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // const nfts = await getNFTs(address);
      const nfts = [];
      for (let i = 0; i < 10; i++) {
        nfts.push({
          id: i,
          name: "Staff Name",
          image_url:
            "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
          description: "Start editing to see some magic happen :)",
          permalink:
            "https://testnets.opensea.io/assets/goerli/0xf5de760f2e916647fd766b4ad9e85ff943ce3a2b/3070735",
        });
      }
      console.log(nfts);
      setNFTs(nfts);
    }
    fetchData();
  }, []);

  const handleCardClick = (nft) => {
    setSelectedNFT(nft);
  };

  const handleCloseModal = () => {
    setSelectedNFT(null);
  };

  return (
    <div className="nft-listing">
      {nfts.map((nft) => (
        <NFTCard item={nft} handleCardClick={handleCardClick} key={nft.id} />
      ))}

      {selectedNFT && <Modal item={selectedNFT} handleCloseModal={handleCloseModal} />}
    </div>
  );
}

export default NFTListing;