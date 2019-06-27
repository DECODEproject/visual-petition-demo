
import { createContext, CryptoFactory } from 'sawtooth-sdk/signing'
import { createHash } from 'crypto'
import { protobuf } from 'sawtooth-sdk'
const cbor = require('cbor')

export const createZenroomBatch = (payload) => {
  const context = createContext('secp256k1')
  const privateKey = context.newRandomPrivateKey()
  const signer = new CryptoFactory(context).newSigner(privateKey)
  const payloadBytes = cbor.encode(payload)
  const transactionHeaderBytes = protobuf.TransactionHeader.encode({
    familyName: 'zenroom',
    familyVersion: '1.0',
    inputs: ['879e1d'],
    outputs: ['879e1d'],
    signerPublicKey: signer.getPublicKey().asHex(),
    batcherPublicKey: signer.getPublicKey().asHex(),
    dependencies: [],
    payloadSha512: createHash('sha512').update(payloadBytes).digest('hex')
  }).finish()

  const signature = signer.sign(transactionHeaderBytes)
  const transaction = protobuf.Transaction.create({
    header: transactionHeaderBytes,
    headerSignature: signature,
    payload: payloadBytes
  })

  const transactions = [transaction]
  const batchHeaderBytes = protobuf.BatchHeader.encode({
    signerPublicKey: signer.getPublicKey().asHex(),
    transactionIds: transactions.map((txn) => txn.headerSignature)
  }).finish()

  const signaturePost = signer.sign(batchHeaderBytes)
  const batch = protobuf.Batch.create({
    header: batchHeaderBytes,
    headerSignature: signaturePost,
    transactions: transactions
  })

  const batchListBytes = protobuf.BatchList.encode({
    batches: [batch]
  }).finish()

  return batchListBytes
}
