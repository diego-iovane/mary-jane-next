import { useState, useEffect } from 'react'
import {
    HeadSection,
    HeadBg,
    Content,
    Inner,
    InnerHead,
    Title,
    InputsContainer,
    Search,
    Grid,
    GridItem,
    LogoContainer,
    Logo,
} from './Elements'

const ExhibitorsGridPage = ({ content, exhibitors }) => {

    console.log(content)
    console.log(exhibitors)

    const [currentExhibitors, setCurrentExhibitors] = useState(exhibitors)
    useEffect(() => {

    }, [])

    return (
        <>
            <HeadSection>
                <HeadBg src="/images/exhibitors-grid-page-bg.png" fill />
            </HeadSection>
            <Content>
                <Inner>
                    <InnerHead>
                        <Title>{content.title}</Title>
                        <InputsContainer>
                            <Search type="text" placeholder={content.searchInputPlaceholder}/>
                        </InputsContainer>
                    </InnerHead>
                    <Grid>
                        {
                            currentExhibitors.map(exhibitor => {

                                console.log(exhibitor.node.website)
                                return (
                                    <GridItem key={exhibitor.node.logo.sourceUrl}>
                                        <LogoContainer target="_blank" href={exhibitor.node.website} rel="noopener noreferrer">
                                            <Logo src={exhibitor.node.logo.sourceUrl} alt="" fill />
                                        </LogoContainer>
                                    </GridItem>
                                )
                            })
                        }
                    </Grid>
                </Inner>
            </Content>
        </>
    )
}

export default ExhibitorsGridPage