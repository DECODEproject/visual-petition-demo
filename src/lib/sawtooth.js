import { createContext, CryptoFactory } from 'sawtooth-sdk/signing'
import { createHash } from 'crypto'
import { protobuf } from 'sawtooth-sdk'
import cbor from 'cbor'

const context = createContext('secp256k1')
const privateKey = context.newRandomPrivateKey()
const signer = new CryptoFactory(context).newSigner(privateKey)

export const createZenroomTransaction = (payload, inputs=['879e1d'], outputs=['879e1d']) => {
  const payloadBytes = cbor.encode(payload)
  const transactionHeaderBytes = protobuf.TransactionHeader.encode({
    familyName: 'zenroom',
    familyVersion: '1.0',
    inputs: inputs,
    outputs: outputs,
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

  return transaction
}

export const createZenroomBatch = (payload) => {
  const transaction = createZenroomTransaction(payload)
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
