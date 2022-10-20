import {Chain, Common, Hardfork} from "@ethereumjs/common";
import {Transaction} from "@ethereumjs/tx";
import {describe, test} from "@jest/globals";
import {isHexString} from "@ethereumjs/util";

describe("testsuite", () => {

   const txParams = {
      nonce: '0x00',
      gasPrice: '0x09184e72a000',
      gasLimit: '0x2710',
      to: '0x0000000000000000000000000000000000000000',
      value: '0x00',
      data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
   };

   const common = new Common({chain: Chain.Mainnet, hardfork: Hardfork.Istanbul});

   const tx = Transaction.fromTxData(txParams, {common});

   const privateKey = "0xf606ce766d4911a36fb695fdd1db9137c3f65be63d8153de102f005a5e40eac4";

   test('test - Buffer', () => {

      expect(isHexString(privateKey)).toBeTruthy();

      const privateBuffer = Buffer.from(privateKey.substring(2), 'hex');

      const signedTx = tx.sign(privateBuffer);
      const serializedTx = signedTx.serialize();

      expect(isHexString("0x" + serializedTx.toString('hex'))).toBe(true);

      console.log("0x" + serializedTx.toString('hex'));

   });

});
