import { useEffect } from "react";
import { fetchNFTs } from "../api/nft";
import scrollToTop from "../utils/scrollToTop";

export function useFetchNFT(setUIState, uiState, setNFTs) {
  useEffect(() => {
    setUIState({
      ...uiState,
      state: "loading",
    });

    fetchNFTs(uiState)
      .then((nfts) => {
        setNFTs(nfts);
        setUIState({
          ...uiState,
          state: "idle",
        });
        scrollToTop();
      })
      .catch((error) => {
        setUIState({
          ...uiState,
          state: "error",
          error: error.message,
        });
      });
  }, [uiState.limit, uiState.offset]);
}
