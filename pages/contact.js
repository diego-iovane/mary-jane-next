import ContactPage from '../components/contactPage/ContactPage'
import { GetLanguageContext } from '../context/LanguageContext'

const Contact = ({ res }) => {

  const { language } = GetLanguageContext()

  return (
    <ContactPage data={res.data.pages.edges[0].node.contact} language={language}/>
  )
}

export default Contact

export async function getServerSideProps(context) {

  const res = await fetch('https://b3ta40.myraidbox.de/graphql', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query NewQuery {
        pages(where: {id: 165}) {
          edges {
            node {
              contact {
                contactTitleDe
                contactTitleEn
                content {
                  addressItemEn {
                    title
                    items {
                      itemOne {
                        text
                        icon {
                          altText
                          sourceUrl
                        }
                      }
                      itemTwo {
                        text
                        icon {
                          altText
                          sourceUrl
                        }
                      }
                    }
                  }
                  marketingItemEn {
                    itemOne {
                      icon {
                        altText
                        sourceUrl
                      }
                      text
                    }
                  }
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