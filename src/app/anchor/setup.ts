import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";

import type { SleepProgram } from "./SleepProgram";
import sleepIdl from "../anchor/idl.json";

const provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);

const connection = provider.connection;
const wallet = provider.wallet as NodeWallet;
export const program = new Program<SleepProgram>(
  sleepIdl as unknown as SleepProgram,
  provider
);
