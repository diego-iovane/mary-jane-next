import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import LanguageContext from '../context/LanguageContext'
import ContentContext from '../context/ContentContext'

function MyApp({ Component, pageProps }) {

  return(
    <LanguageContext>
      <ContentContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContentContext>
    </LanguageContext>
  )
}

export default MyApp
