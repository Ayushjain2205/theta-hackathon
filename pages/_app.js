import {
  ThirdwebProvider,
  localWallet,
  metamaskWallet,
  paperWallet,
} from "@thirdweb-dev/react";
import "../styles/globals.css";
import { ThetaTestnet } from "@thirdweb-dev/chains";
import Head from "next/head";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "ThetaTestnet";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;800&display=swap"
          rel="stylesheet"
        />
        <script src="https://vjs.zencdn.net/7.15.4/video.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/hls.js@0.12.4"></script>
        <script src="https://d1ktbyo67sh8fw.cloudfront.net/js/theta.umd.min.js"></script>
        <script src="https://d1ktbyo67sh8fw.cloudfront.net/js/theta-hls-plugin.umd.min.js"></script>
        <script src="https://d1ktbyo67sh8fw.cloudfront.net/js/videojs-theta-plugin.min.js"></script>
      </Head>
      <ThirdwebProvider
        activeChain={ThetaTestnet}
        supportedWallets={[metamaskWallet(), localWallet(), paperWallet()]}
      >
        <Component {...pageProps} />
      </ThirdwebProvider>
    </>
  );
}

export default MyApp;
