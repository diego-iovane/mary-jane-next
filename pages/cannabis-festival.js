import { GetLanguageContext } from "../context/LanguageContext"
import CannabisFestivalPage from "../components/cannabisFestivalPage/CannabisFestivalPage"

const CannabisFestival = ({ res }) => {

  const { language } = GetLanguageContext()

  return (
    <CannabisFestivalPage data={res.data.pages.edges[0].node.cannabisFestival} language={language} />
  )
}

export default CannabisFestival

export async function getServerSideProps(context) {

  const res = await fetch('https://b3ta40.myraidbox.de/graphql', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query NewQuery {
        pages(where: {id: 153}) {
          edges {
            node {
              cannabisFestival {
                titleOneEn
                titleTwoEn
                titleOneDe
                titleTwoDe
                imageOne {
                  altText
                  sourceUrl
                }
                imageTwo {
                  altText
                  sourceUrl
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