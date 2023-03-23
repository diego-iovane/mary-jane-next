import GuidesPage from '../components/guides/GuidesPage'
import { GetLanguageContext } from '../context/LanguageContext'

const Guides = ({ res }) => {

    const { language } = GetLanguageContext()
    const content = res.data.pages.edges[0].node.exhibitorsGuides.exhibitorsGuidesContentEn

    return (
        <GuidesPage content={content}/>
    )
}

export default Guides

export async function getServerSideProps(context) {

    const res = await fetch('https://b3ta40.myraidbox.de/graphql', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query NewQuery {
                pages(where: {id: 1273}) {
                  edges {
                    node {
                      exhibitorsGuides {
                        exhibitorsGuidesContentEn {
                          headerBackgroundImage {
                            altText
                            sourceUrl
                          }
                          generalDocuments {
                            title
                            icon {
                              altText
                              sourceUrl
                            }
                            files {
                              file1 {
                                name
                                url
                              }
                              file2 {
                                name
                                url
                              }
                              file3 {
                                name
                                url
                              }
                              file4 {
                                name
                                url
                              }
                              file5 {
                                name
                                url
                              }
                            }
                          }
                          headerSection {
                            title
                            text
                            cardTitle
                            cardText
                            cardCta {
                              text
                              url
                            }
                          }
                          furniture {
                            title
                            icon {
                              altText
                              sourceUrl
                            }
                            files {
                              file1 {
                                url
                                name
                              }
                              file2 {
                                name
                                url
                              }
                            }
                          }
                          shipping {
                            title
                            icon {
                              altText
                              sourceUrl
                            }
                            files {
                              file1 {
                                url
                                name
                              }
                              file2 {
                                name
                                url
                              }
                            }
                          }
                          techSpecification {
                            title
                            icon {
                              altText
                              sourceUrl
                            }
                            files {
                              file1 {
                                name
                                url
                              }
                              file2 {
                                name
                                url
                              }
                              file3 {
                                name
                                url
                              }
                              file4 {
                                name
                                url
                              }
                              file5 {
                                name
                                url
                              }
                            }
                          }
                          plans {
                            title
                            icon {
                              altText
                              sourceUrl
                            }
                            files {
                              file1 {
                                url
                                name
                              }
                              file2 {
                                name
                                url
                              }
                              file3 {
                                name
                                url
                              }
                            }
                          }
                          materials {
                            title
                            icon {
                              altText
                              sourceUrl
                            }
                            files {
                              file1 {
                                name
                                url
                              }
                              file2 {
                                name
                                url
                              }
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