import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import "../node_modules/font-awesome/css/font-awesome.min.css"; 
import {
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  theme,
} from '@chakra-ui/react'

const customTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    primary: theme.colors.pink,
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
