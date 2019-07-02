import express from 'express'
import request from 'request'
import dotenv from 'dotenv'

import { createZenroomBatch } from '../lib/sawtooth'

const app = express()
dotenv.config()

app.use(express.json())
app.use(express.static('dist'))

app.post('/api/create_petition', (req, res) => {
  const { zencode, contextId } = req.body
  const ciVerifyKeys = `{"issuer_identifier":{"verify":{"beta":"0d619263c6048d0ab94f825f0f9f30d5f441df3d78e6c34e64eb3d6a2d3b764d51f7722dc18456b986a8291a525985e747841ebd9788b1c505ca5584d752a3b9e5d294666745cf14b0df49fd81dd35ffe16f752fcd8dc9a4f69579528cdebf932272a28dc8c9c7d70af121e8061b8dc0867f0540e2b05306344c987d65c63d63179bf5d64ea7c6211a4e65bebc5b4eae4e649e46eb70094c5ae8fb271dfccce5d56ef7385ebb46c7e538a07fa8e4afbdeba03c71cc882a72a9042f8db2374a6b","alpha":"12835db70ccae8be2b58e6b73068368871189b19e2602dbfbf05bcbe7702d9b92916b3ecbaff93c6c560f48bc13cdc80469275f1adac04b5e568cda5a6c56651a2f8976dd947e9c72910432b495e6a605b99f97c5f3b955979e1668cac3f4ca13739b6e7a1866f7da679e8764d6f2ff54450f74b2033d1f2ae8cd1f32379df9242c255a773c0d44f23a5b666fcd20b0938e99c7b8f9d61bfa7982dcdd054d691266d3271fac6ea7491a8af4597dee7c1d409040a8014e1ad3c32370852ca4dc7"}}}`
  const credential = `{"identifier":{"schema":"cred_keypair","zenroom":"0.9","encoding":"hex","public":"04356878b230d0bffc7e913736dbc2cdcfecfc21f02195177c1d501513a1c10fafc534668a306db5a7dcd57df8242226d61920f766bc0dca690598bdcd7aae09490d7681f9ec6197d84c8ed9e5484a8ad21717d7a224697fd3649279089970c71d","private":"aeea220f7c4d3d39b58acc20c84553f6b2864fde01ff1373018e5197074302b3","curve":"bls383"},"credential":{"h":"04424954e09f573023b34e5c764ee3ea07b0942cadc9f738ba057afed1a52eef78edd3172d58c4cdfcfbd393686a0b11fe25662dd4e632752e26814236699cde98b4c04139fe73a63414cb1775c72654e2024559a1b46ea164f41a2e53f9bdb90f","zenroom":"0.9","curve":"bls383","schema":"aggsigma","encoding":"hex","s":"042c52807efc2506e16ec1f0db6002d5cf6d55b16e9645be9ba3a557a7bde9f2302272014f63591bc05a3bae35a7462a4b3ef2ef956e34210cdde9be9286ad9571d2c18c8ebd175924c42270e425391e4f279c5d498ae9f97f06d40f4bf6cd21a1"}}`

  const payload = {
    keys: credential,
    zencode: zencode,
    data: ciVerifyKeys,
    'context-id': contextId
  }

  const batchListBytes = createZenroomBatch(payload)

  request.post({
    url: `http://${process.env.SAWTOOTH_SERVER || "localhost"}:${process.env.SAWTOOTH_PORT || 8090}/batches`,
    body: batchListBytes,
    headers: { 'Content-Type': 'application/octet-stream' }
  }, (err, response) => {
    if (err) return console.log(err)
    console.log(response.body)
    res.send(response.body)
  })
})

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`))
