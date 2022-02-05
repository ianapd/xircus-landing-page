import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import { theme } from '../styles/theme'
import { NextIntlProvider } from 'next-intl'

function MyApp({ Component, pageProps, router }) {
  const messages = require(`../i18n/${router.locale}.json`)

  return (
    <NextIntlProvider messages={messages}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </NextIntlProvider>
  )  
}

export default MyApp
