import { Goerli } from "@usedapp/core";
require('dotenv').config(); 
console.log("Alchemy env:", process.env.REACT_APP_ALCHEMY)
export const ROUTER_ADDRESS = process.env.REACT_APP_ROUTER 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: process.env.REACT_APP_ALCHEMY 
  },
};
