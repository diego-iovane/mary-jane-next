import '../styles/globals.css'
import '../styles/home.css'
import Layout from '../components/layout/Layout'
import LanguageContext from '../context/LanguageContext'
import ContentContext from '../context/ContentContext'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {

  return(
    <LanguageContext>
      <ContentContext>
        <AnimatePresence>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </ContentContext>
    </LanguageContext>
  )
}

export default MyApp
