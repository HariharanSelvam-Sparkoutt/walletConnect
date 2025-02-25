import { http, createConfig } from "wagmi";
import {
  mainnet,
  bsc,
  polygon,
  gnosis,
  avalanche,
  fantom,
  aurora,
  klaytn,
  arbitrum,
  optimism,
  base,
  zkSync,
  bscTestnet,
  holesky,
} from "wagmi/chains";
import { injected } from "wagmi/connectors";
import { coinbaseWallet } from "wagmi/connectors";

export const config = createConfig({
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    bsc,
    zkSync,
    gnosis,
    avalanche,
    fantom,
    aurora,
    klaytn,
    bscTestnet,
    holesky,
  ],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
    [bsc.id]: http(),
    [zkSync.id]: http(),
    [gnosis.id]: http(),
    [avalanche.id]: http(),
    [fantom.id]: http(),
    [aurora.id]: http(),
    [klaytn.id]: http(),
    [bscTestnet.id]: http(),
    [holesky.id]: http(),
  },
  connectors: [
    injected(), // MetaMask & Browser Wallets
  ],
});
