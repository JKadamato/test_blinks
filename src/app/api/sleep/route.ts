import {
  createActionHeaders,
  createPostResponse,
  ActionGetResponse,
  ActionPostRequest,
} from "@solana/actions";

import {
  clusterApiUrl,
  Connection,
  PublicKey,
  Transaction,
} from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import { ACTIONS_CORS_HEADERS } from "@solana/actions";

import idl from "../../anchor/idl.json";
import { Sleep } from "@/app/anchor/Sleep";
import { getAssociatedTokenAddressSync } from "@solana/spl-token";

// const TOKEN_2022_PROGRAM_ID = new PublicKey(
//   "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
// );

// const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new PublicKey(
//   "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
// );

const headers = createActionHeaders({
  chainId: "devnet",
  actionVersion: "2.2.1",
  headers: ACTIONS_CORS_HEADERS,
});

export const GET = async () => {
  const payload: ActionGetResponse = {
    title: "Sleep",
    icon: "https://ucarecdn.com/6125283b-b089-42be-a2d3-3ab153c99134/-/preview/1000x1000/",
    description: "Sleep to earn token",
    label: "SLEEP",
    links: {
      actions: [
        {
          label: "Sleep",
          href: "/api/sleep",
          type: "transaction",
        },
        {
          label: "Claim",
          href: "/api/sleep/claim",
          type: "transaction",
        },
      ],
    },
  };

  return Response.json(payload, {
    headers,
  });
};

export const OPTIONS = GET;

export async function POST(req: Request) {
  // const wallet = useAnchorWallet();

  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  const program = new anchor.Program<Sleep>(idl as Sleep, { connection });

  const body: ActionPostRequest = await req.json();

  let account;

  try {
    account = new PublicKey(body.account);
    console.log(account);
  } catch (error) {
    console.log(error);
  }

  if (!account) {
    throw new Error("Invalid account");
  }

  const [mintPDA] = anchor.web3.PublicKey.findProgramAddressSync(
    [Buffer.from("mint_account"), account.toBuffer()],
    program.programId
  );

  // const [sleeperPDA] = anchor.web3.PublicKey.findProgramAddressSync(
  //   [Buffer.from("sleeper_account"), account.toBuffer()],
  //   program.programId
  // );

  // const [tokenAccount] = anchor.web3.PublicKey.findProgramAddressSync(
  //   [account.toBuffer(), TOKEN_2022_PROGRAM_ID.toBuffer(), mintPDA.toBuffer()],
  //   SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID
  // );

  const tokenAddress = getAssociatedTokenAddressSync(mintPDA, account);

  // console.log("token account:", tokenAccount);
  console.log("token address:", tokenAddress);

  const sleeperAccountInstruction = await program.methods
    .createNewSleeper("test")
    .accounts({
      payer: account,
      mint: mintPDA,
      // sleeperAccount: sleeperPDA,
      // tokenAccount: tokenAddress,
    })
    .instruction();

  const blockhash = await connection.getLatestBlockhash();

  const transaction = new Transaction({
    blockhash: blockhash.blockhash,
    feePayer: account,
    lastValidBlockHeight: blockhash.lastValidBlockHeight,
  }).add(sleeperAccountInstruction);

  const response = await createPostResponse({
    fields: {
      type: "transaction",
      transaction: transaction,
    },
    options: {
      commitment: "finalized",
    },
  });

  return Response.json(response, { headers });
}
