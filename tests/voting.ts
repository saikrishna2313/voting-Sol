import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Voting } from "../target/types/voting";

describe("voting", () => {
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Voting as Program<Voting>;

  it("Is initialized!", async () => {
    const tx = await program.methods.initializePoll(new anchor.BN(1),"New Voting Platform to Work Vote..!", new anchor.BN(1),new anchor.BN(2),new anchor.BN(1000)).rpc();
    

    console.log("Your transaction signature", tx);
  });
});
