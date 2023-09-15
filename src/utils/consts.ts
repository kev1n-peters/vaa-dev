import { ChainId } from "../sdk/consts";

export const MAINNET_RPCS_BY_CHAIN: { [id in ChainId]?: string } = {
  1: "https://api.mainnet-beta.solana.com",
  2: "https://rpc.ankr.com/eth",
  3: "https://columbus-lcd.terra.dev",
  4: "https://rpc.ankr.com/bsc",
  5: "https://rpc.ankr.com/polygon",
  6: "https://rpc.ankr.com/avalanche",
  7: "https://emerald.oasis.dev",
  8: "https://mainnet-api.algonode.cloud",
  10: "https://rpc.ankr.com/fantom",
  11: "https://eth-rpc-karura.aca-api.network",
  12: "https://eth-rpc-acala.aca-api.network",
  13: "https://rpc.ankr.com/klaytn",
  14: "https://forno.celo.org",
  15: "https://rpc.mainnet.near.org",
  16: "https://rpc.ankr.com/moonbeam",
  18: "https://phoenix-lcd.terra.dev",
  19: "https://k8s.mainnet.lcd.injective.network",
  22: "https://fullnode.mainnet.aptoslabs.com/",
  23: "https://rpc.ankr.com/arbitrum",
  24: "https://rpc.ankr.com/optimism",
  28: "https://dimension-lcd.xpla.dev",
  30: "https://mainnet.base.org",
};

export const TESTNET_RPCS_BY_CHAIN: { [id in ChainId]?: string } = {
  1: "https://api.devnet.solana.com",
  2: "https://rpc.ankr.com/eth_goerli",
  4: "https://rpc.ankr.com/bsc_testnet_chapel",
  5: "https://rpc.ankr.com/polygon_mumbai",
  6: "https://rpc.ankr.com/avalanche_fuji",
  7: "https://testnet.emerald.oasis.dev",
  8: "https://testnet-api.algonode.cloud",
  10: "https://rpc.ankr.com/fantom_testnet",
  11: "https://eth-rpc-karura-testnet.aca-staging.network",
  12: "https://eth-rpc-acala-testnet.aca-staging.network",
  13: "https://rpc.ankr.com/klaytn_testnet",
  14: "https://alfajores-forno.celo-testnet.org",
  15: "https://rpc.testnet.near.org",
  16: "https://moonbeam-alpha.api.onfinality.io/public",
  22: "https://rpc.ankr.com/http/aptos_testnet/v1/",
  23: "https://goerli-rollup.arbitrum.io/rpc",
  24: "https://rpc.ankr.com/optimism_testnet",
  30: "https://goerli.base.org",
};
