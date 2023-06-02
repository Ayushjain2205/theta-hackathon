import React from "react";
import { Web3Button } from "@thirdweb-dev/react";

const MintButton = () => {
  return (
    <Web3Button
      contractAddress={process.env.NEXT_PUBLIC_CONTRACT_ADDRESS} // Your smart contract address
      action={async (contract) => {
        await someAction(contract);
      }}
    >
      Claim
    </Web3Button>
  );
};
