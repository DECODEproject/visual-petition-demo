import React from 'react'
import Content from './components/content'
import {Grommet} from 'grommet'


const theme = {
  global: {
    font: {
      family: 'Montserrat',
      size: '16px',
      height: '22px'
    }
  }
}

const App = function () {
  return (
    <Grommet theme={theme} full>
      <Content />
    </Grommet>
  )
}

export default App
