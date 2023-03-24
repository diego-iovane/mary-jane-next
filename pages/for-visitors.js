import ForVisitorsPage from '../components/forVisitorsPage/ForVisitorsPage'
import { GetLanguageContext } from '../context/LanguageContext'

const ForVistors = ({ res }) => {

    const { language } = GetLanguageContext()

    const content = res.data.pages.edges[0].node.forVisitors.visitorsContentEn

    return (
        <ForVisitorsPage content={content} />
    )
}

export default ForVistors


export async function getServerSideProps(context) {

    const res = await fetch('https://b3ta40.myraidbox.de/graphql', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query NewQuery {
                pages(where: {id: 991}) {
                edges {
                    node {
                    forVisitors {
                        visitorsContentEn {
                        headerbg {
                            altText
                            sourceUrl
                        }
                        generalInfo {
                            title
                            subtitle
                            text
                            image {
                            altText
                            sourceUrl
                            }
                            cta {
                            text
                            url
                            }
                        }
                        generalCards {
                            title
                            cta {
                              text
                              url
                            }
                            cards {
                              one {
                                title
                                text
                                image {
                                  altText
                                  sourceUrl
                                }
                              }
                              two {
                                title
                                text
                                image {
                                  altText
                                  sourceUrl
                                }
                              }
                              three {
                                title
                                text
                                image {
                                  altText
                                  sourceUrl
                                }
                              }
                              four {
                                title
                                text
                                image {
                                  altText
                                  sourceUrl
                                }
                              }
                            }
                        }
                        productIconsText {
                            text
                            title
                        }
                        whyVisit {
                            title
                            cta {
                                text
                                url
                            }
                            cards {
                                card1 {
                                text
                                backgroundImage {
                                    altText
                                    sourceUrl
                                }
                                }
                                card2 {
                                backgroundImage {
                                    altText
                                    sourceUrl
                                }
                                text
                                }
                                card3 {
                                text
                                backgroundImage {
                                    altText
                                    sourceUrl
                                }
                                }
                            }
                        }
                        agenda {
                            title
                            subtitle
                            opening {
                              title
                              subtitle
                              items {
                                item1 {
                                  text
                                  title
                                }
                                item2 {
                                  text
                                  title
                                }
                                item3 {
                                  text
                                  title
                                }
                              }
                            }
                            afterParty {
                              title
                              items {
                                item1 {
                                  text
                                  title
                                }
                                item2 {
                                  text
                                  title
                                }
                                item3 {
                                  text
                                  title
                                }
                              }
                            }
                            entranceFee {
                              title
                              items {
                                item1 {
                                  condition
                                  offerPrice
                                  offerTitle
                                  price
                                  subtitle
                                  title
                                }
                                item2 {
                                  condition
                                  offerPrice
                                  offerTitle
                                  price
                                  subtitle
                                  title
                                }
                                item3 {
                                  condition
                                  offerPrice
                                  offerTitle
                                  price
                                  subtitle
                                  title
                                }
                              }
                            }
                        }
                        productIcons {
                            icon1 {
                                text
                                icon {
                                altText
                                sourceUrl
                                }
                            }
                            icon2 {
                                text
                                icon {
                                altText
                                sourceUrl
                                }
                            }
                            icon3 {
                                text
                                icon {
                                altText
                                sourceUrl
                                }
                            }
                            icon4 {
                                text
                                icon {
                                altText
                                sourceUrl
                                }
                            }
                            icon5 {
                                text
                                icon {
                                altText
                                sourceUrl
                                }
                            }
                            icon6 {
                                text
                                icon {
                                altText
                                sourceUrl
                                }
                            }
                            icon7 {
                                text
                                icon {
                                altText
                                sourceUrl
                                }
                            }
                            icon8 {
                                text
                                icon {
                                altText
                                sourceUrl
                                }
                            }
                            icon9 {
                                text
                                icon {
                                altText
                                sourceUrl
                                }
                            }
                            icon10 {
                                text
                                icon {
                                altText
                                sourceUrl
                                }
                            }
                            icon11 {
                                text
                                icon {
                                altText
                                sourceUrl
                                }
                            }
                            icon12 {
                                text
                                icon {
                                altText
                                sourceUrl
                                }
                            }
                            icon13 {
                                text
                                icon {
                                altText
                                sourceUrl
                                }
                            }
                            icon14 {
                                text
                                icon {
                                altText
                                sourceUrl
                                }
                            }
                            icon15 {
                                text
                                icon {
                                altText
                                sourceUrl
                                }
                            }
                            icon16 {
                                text
                                icon {
                                altText
                                sourceUrl
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