import React, { useState } from 'react'

import {
  Box,
  Button,
  TextArea,
  TextInput
} from 'grommet'
import { Archive } from 'grommet-icons'
import '../app.css'

const SmartContract = function (props) {
  const [contextId, setContextId] = useState('')
  const [zencode, setZencode] = useState(`Scenario 'coconut': "Citizen creates a new petition, using his own key, the credential and the credential issuer's public"
                                          Given that I am known as 'identifier'
                                              and I have my keypair
                                              and I have a signed credential
                                              and I use the verification key by 'issuer_identifier'
                                          When I aggregate all the verification keys
                                              and I generate a credential proof
                                              and I create a new petition 'petition'
                                          Then print all data`)


  const createPetition = () => {
    const body = { 
      'zencode': zencode,
      'contextId': contextId
    }

    const post = { 
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    }

    fetch('/api/create_petition', post)
      .then(res => res.json())
      .then(response => props.onResponse(response.link))
  }

  return (<Box pad='large' align='start' gap='large' width="100%">
        <TextInput
          margin='large'
          fill='false'
          placeholder='Insert a context for the transaction'
          value={contextId}
          onChange={event => setContextId(event.target.value)} />
        <TextArea
          margin='large'
          rows='10'
          size='large'
          value={zencode}
          onChange={event => setZencode(event.target.value)}
        />
        <Button icon={<Archive />} onClick={createPetition} label='Create a petition' />
        </Box>)
}

export default SmartContract