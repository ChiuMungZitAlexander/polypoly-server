// import { ClobClient } from "@polymarket/clob-client";
// import { Wallet } from "@ethersproject/wallet";
// import { polygon } from "viem/chains";

// const initClobClient = async () => {
//   const host = "https://clob.polymarket.com";

//   if (!process.env.CLOB_CLIENT_FUNDER || !process.env.CLOB_CLIENT_PRIVATE_KEY) {
//     throw new Error(
//       "CLOB_CLIENT_FUNDER and CLOB_CLIENT_PRIVATE_KEY must be set"
//     );
//   }

//   const funder = process.env.CLOB_CLIENT_FUNDER; //This is your Polymarket Profile Address, where you send UDSC to.
//   const signer = new Wallet(process.env.CLOB_CLIENT_PRIVATE_KEY); //This is your Private Key. If using email login export from https://reveal.magic.link/polymarket otherwise export from your Web3 Application

//   //In general don't create a new API key, always derive or createOrDerive
//   const credsClobClient = new ClobClient(host, polygon.id, signer);
//   const creds = await credsClobClient.createOrDeriveApiKey();

//   //0: EOA
//   //1: Magic/Email Login
//   //2: Metamask
//   const signatureType = 1;

//   const clobClient = new ClobClient(
//     host,
//     polygon.id,
//     signer,
//     creds,
//     signatureType,
//     funder
//   );

//   return clobClient;
// };

// export const clobClient = await initClobClient();
