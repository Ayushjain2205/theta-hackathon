import {
  ThirdwebProvider,
  localWallet,
  metamaskWallet,
} from "@thirdweb-dev/react";
import "../styles/globals.css";
import { ThetaTestnet } from "@thirdweb-dev/chains";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "ThetaTestnet";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      activeChain={ThetaTestnet}
      supportedWallets={[metamaskWallet(), localWallet()]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
