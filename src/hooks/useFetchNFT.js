import { useEffect, useState } from "react";
import { fetchNFTs } from "../api/nft";
import scrollToTop from "../utils/scrollToTop";

export function useFetchNFT(state, setState) {
  useEffect(() => {
    setState({
      ...state,
      state: "loading",
    });

    fetchNFTs(state)
      .then((nfts) => {
        setState({
          ...state,
          state: "idle",
          data: nfts,
        });
        scrollToTop();
      })
      .catch((error) => {
        setState({
          ...state,
          state: "error",
          error: error?.message ?? "Oops! Something went wrong.",
        });
      });
  }, [state.limit, state.offset]);

  return state;
}
