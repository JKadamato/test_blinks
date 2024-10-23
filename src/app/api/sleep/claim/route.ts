import { PublicKey } from "@solana/web3.js";
// import * as anchor from "@coral-xyz/anchor";
import { ACTIONS_CORS_HEADERS, ActionPostRequest } from "@solana/actions";

// import { Sleep } from "../../../anchor/Sleep";
// import idl from "../../../anchor/idl.json";

export async function POST(req: Request) {
  // const wallet = useAnchorWallet();

  // const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  // const program = new anchor.Program<Sleep>(idl as Sleep, { connection });

  const body: ActionPostRequest = await req.json();

  let account;

  try {
    account = new PublicKey(body.account);
    console.log(account);
  } catch (error) {
    console.log(error);
  }

  return Response.json({ msg: "good" }, { headers: ACTIONS_CORS_HEADERS });
}
