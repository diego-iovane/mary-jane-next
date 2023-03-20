import FurnitureRentalPage from '../components/furnitureRentalPage/FurnitureRentalPage'
import { GetLanguageContext } from '../context/LanguageContext'

const FurnitureRentalAndHostesses = ({ res }) => {

  const { language } = GetLanguageContext()

  const content = language === 'en' ?
    res.data.pages.edges[0].node.furnitureRentalAndHostesses.furnitureContentEn :
    res.data.pages.edges[0].node.furnitureRentalAndHostesses.furnitureContentDe

  const rawGallery = res.data.pages.edges[0].node.furnitureRentalAndHostesses.furnitureRentalImageGallery
  const gallery = Object.keys(rawGallery).map(key => {
    return { ...rawGallery[key] }
  })

  return (
    <FurnitureRentalPage gallery={gallery} content={content} />
  )
}

export default FurnitureRentalAndHostesses

export async function getServerSideProps(context) {

  const res = await fetch('https://b3ta40.myraidbox.de/graphql', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query NewQuery {
        pages(where: {id: 547}) {
          edges {
            node {
              furnitureRentalAndHostesses {
                furnitureRentalImageGallery {
                  one {
                    altText
                    sourceUrl
                  }
                  two {
                    altText
                    sourceUrl
                  }
                  three {
                    altText
                    sourceUrl
                  }
                }
                furnitureContentEn {
                  title
                  subtitle
                  shortText
                  address
                  details {
                    phoneOne
                    phoneTwo
                    mail
                    website
                  }
                  bottomTitle
                }
                furnitureContentDe {
                  title
                  subtitle
                  shortText
                  address
                  details {
                    phoneOne
                    phoneTwo
                    mail
                    website
                  }
                  bottomTitle
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