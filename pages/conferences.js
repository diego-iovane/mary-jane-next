import ConferencesPage from "../components/conferencesPage/ConferencesPage"

const Conferences = (props) => {

  const content = props.res.data.pages.edges[0].node.conferences.contentEn
  const data = props.res.data.conferences.edges

  return (
    <ConferencesPage data={data} content={content} />
  )
}

export default Conferences

export async function getServerSideProps(context) {

  const res = await fetch('https://b3ta40.myraidbox.de/graphql', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
      query NewQuery {
        conferences(first: 1000) {
          edges {
            node {
              conferenceDate
              conferenceSpeakers {
                edges {
                  node {
                    surname
                    profession
                    name
                    image {
                      altText
                      sourceUrl
                    }
                  }
                }
              }
              conferenceTitle
              description
              topic
              time
            }
          }
        }
        pages(where: {id: 2160}) {
          edges {
            node {
              conferences {
                contentEn {
                  title
                  bgimg {
                    altText
                    sourceUrl
                  }
                  topics {
                    one {
                      label
                      value
                    }
                    two {
                      label
                      value
                    }
                    three {
                      label
                      value
                    }
                    four {
                      label
                      value
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
