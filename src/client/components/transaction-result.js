import React from 'react'
import { Box, Button, Heading, } from 'grommet'
import { Cube } from 'grommet-icons'

const TransactionResult = (props) => {
    return (
        <Box pad='large' align='start' gap='large'>
        {props.result
            ?
              <>
              <Heading level='5' color='status-ok' margin='none'>Yay! Transaction committed!</Heading>
              <Button color='accent-1' icon={<Cube />} label='View the transaction' href={props.result} />
              </>
            : ''}
        </Box>
    )
}

export default TransactionResult