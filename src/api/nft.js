
export function fetchNFTs() {
  return fetch("https://testnets-api.opensea.io/api/v1/assets?offset=0&limit=20&include_orders=false")
    .then((response) => response.json())
    .then((data) => data.assets)
    .then((nfts) => nfts.map((nft) => ({
      ...nft,
      image_url: nft.image_url ?? "https://via.placeholder.com/600x400", // if image_url is null, use placeholder image
      name: nft.name ?? "NFT Name",
      description: nft.description ?? "NFT Description",
      permalink: nft.permalink ?? "https://opensea.io",
    })));
}