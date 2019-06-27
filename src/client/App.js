import React, { useState } from 'react';
import { Grommet, Button, TextInput, TextArea, Heading, Box, FormField } from 'grommet'
import { Archive, Cube } from 'grommet-icons'
import './app.css';

const theme = {
  global: {
    font: {
      family: 'Montserrat',
      size: '16px',
      height: '22px',
    },
  },
}

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='center'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);
  

const App = function() {
  const [url, setUrl] = useState("")
  const [contextId, setContextId] = useState("")
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
  const body = {'zencode': zencode,
                 'contextId': contextId
                }
  fetch('/api/create_petition', { method: 'POST', 
                                  body: JSON.stringify(body),
                                  headers: { 'Content-Type': 'application/json' }})
      .then(res => res.json())
      .then(response => setUrl(response.link))
  }

  return (<Grommet theme={theme} full>
    <Box justify="center">
      <AppBar>
        <Heading level='3' margin='none'>VISUAL PETITION DEMO</Heading>
      </AppBar>
      <Box pad="large" align="start" gap="large">
        <TextInput 
          margin="large"
          fill="false"
          placeholder="Insert a context for the transaction"
          value={contextId}
          onChange={event => setContextId(event.target.value)} />
        <TextArea
          margin="large"
          rows="10"
          size="large"
          value={zencode}
          onChange={event => setZencode(event.target.value)}
        />
        <Button icon={<Archive />} onClick={createPetition} label="Create a petition" />
        <br/>
        {url ? 
          <>
            <Heading level='5' color="status-ok" margin='none'>Yay! Transaction committed!</Heading>
            <Button color="accent-1" icon={<Cube />}  label="View the transaction" href={url} />
          </> : ""}
        </Box>
    </Box>
  </Grommet>)
}

export default App