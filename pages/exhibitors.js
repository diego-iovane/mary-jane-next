import ExhibitorsGridPage from '../components/exhibitorsGridPage/ExhibitorsGridPage'
import { GetLanguageContext } from '../context/LanguageContext'

const Exhibitors = ({ res }) => {

  const { language } = GetLanguageContext()
  const content = language === 'en' ? res.data.pages.edges[0].node.exhibitorsGridPage.contentEn : res.data.pages.edges[0].node.exhibitorsGridPage.contentDe
  const exhibitors = res.data.exhibitors.edges

  return (
    <ExhibitorsGridPage content={content} exhibitors={exhibitors} />
  )
}

export default Exhibitors


export async function getServerSideProps(context) {

  const res = await fetch('https://b3ta40.myraidbox.de/graphql', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query NewQuery {
        exhibitors(first: 1000) {
          edges {
            node {
              logo {
                altText
                sourceUrl
                title
              }
              title
              website
              countryDe
              countryEn
              descriptionDe
              descriptionEn
              category
              uri
            }
          }
        }
        pages(where: {id: 475}) {
          edges {
            node {
              exhibitorsGridPage {
                contentEn {
                  title
                  searchInputPlaceholder
                  categoryInputPlaceholder
                }
                contentDe {
                  categoryInputPlaceholder
                  searchInputPlaceholder
                  title
                }
              }
            }
          }
        }
      }
      `
    })
  })

  const json = await res.json()

  return {
    props: {
      res: json
    }
  }
}