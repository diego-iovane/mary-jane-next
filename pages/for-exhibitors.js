import ForExhibitorsPage from '../components/forExhibitorsPage/ForExhibitorsPage'
import { GetLanguageContext } from '../context/LanguageContext'

const ForExhibitors = ({ res }) => {

  const { language } = GetLanguageContext()
  // const content = language === 'en' ? res.data.pages.edges[0].node.exhibitorsGridPage.contentEn : res.data.pages.edges[0].node.exhibitorsGridPage.contentDe

  const content = res.data.pages.edges[0].node.forExhibitorsPage.forExhibitorsContentEn

  return (
    <ForExhibitorsPage content={content} />
  )
}

export default ForExhibitors


export async function getServerSideProps(context) {

  const res = await fetch('https://b3ta40.myraidbox.de/graphql', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query NewQuery {
        pages(where: {id: 834}) {
          edges {
            node {
              forExhibitorsPage {
                forExhibitorsContentEn {
                  headerBg {
                    altText
                    sourceUrl
                  }
                  generalInfo {
                    title
                    subtitle
                    text
                    titleCta {
                      text
                      url
                    }
                    ctaOne {
                      text
                      url
                    }
                    ctaTwo {
                      url
                      text
                    }
                    image {
                      altText
                      sourceUrl
                    }
                  }
                  features {
                    one {
                      text
                      icon {
                        altText
                        sourceUrl
                      }
                    }
                    two {
                      text
                      icon {
                        altText
                        sourceUrl
                      }
                    }
                    three {
                      text
                      icon {
                        altText
                        sourceUrl
                      }
                    }
                    four {
                      text
                      icon {
                        altText
                        sourceUrl
                      }
                    }
                    five {
                      text
                      icon {
                        altText
                        sourceUrl
                      }
                    }
                    six {
                      text
                      icon {
                        altText
                        sourceUrl
                      }
                    }
                  }
                  location {
                    title
                    subtitle
                    text
                    cta {
                      text
                      url
                    }
                    image {
                      altText
                      srcSet
                    }
                  }
                  onboarding {
                    title
                    subtitle
                    steps {
                      one
                      two
                      three
                      four
                      five
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