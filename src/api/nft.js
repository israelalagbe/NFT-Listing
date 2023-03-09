
export function fetchNFTs({offset,limit}) {
  return fetch(`https://testnets-api.opensea.io/api/v1/assets?order_direction=desc&offset=${offset}&limit=${limit}&include_orders=false`)
    .then((response) => response.json())
    .then((data) => data.assets)
    .then((nfts) => nfts.map((nft) => ({
      ...nft,
      //Set default values for null values
      image_url: nft.image_url ?? "https://via.placeholder.com/600x400", // if image_url is null, use placeholder image
      name: nft.name ?? "NFT Name",
      description: nft.description ?? "NFT Description",
      permalink: nft.permalink ?? "https://opensea.io",
    })));
}