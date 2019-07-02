import React, {useState} from 'react'
import AppBar from './appbar'
import TransactionResult from './transaction-result'

import {
  Box,
  Heading,
} from 'grommet'
import '../app.css'
import SmartContract from './smartcontract';

const Content = function (props) {

  const [url, setUrl] = useState('')

  return (
    <Box justify='center'>
      <AppBar>
        <Heading level='3' margin='none'>VISUAL PETITION DEMO</Heading>
      </AppBar>
      <Box pad='large' align='start' gap='large'>
        <SmartContract onResponse={(resp) => setUrl(resp)} />
        <TransactionResult result={url} />
      </Box>
    </Box>)
}

export default Content