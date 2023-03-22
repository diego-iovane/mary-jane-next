import SmallCta from '../buttons/SmallCta'
import SmallCtaPink from '../buttons/SmallCtaPink'
import {
    HeadBg,
    HeadSection,
    Body,
    Inner,
    SectionHeader,
    Title,
    Subtitle,
    HeaderButtonContainer,
    InnerSection,
    LeftContainer,
    Text,
    ButtonsContainer,
    ButtonContainer,
    RightContainer,
    Img,
    Grid,
    GridItem,
    GridIconContainer,
    GridIcon,
    GridText,
    LocationTitle,
    LocationSubtitle,
    LocationText,
    LocationButtonContainer,
} from './Elements'

const ForExhibitorsPage = ({ content }) => {

    console.log(content)
    const features = Object.keys(content.features).map(key => {
        return {...content.features[key]}
    })
    
    return (
        <>
            <HeadSection>
                <HeadBg src={content.headerBg.sourceUrl} alt="" fill />
            </HeadSection>
            <Body>
                <Inner>
                    <SectionHeader>
                        <Title>{content.generalInfo.title}</Title>
                        <Subtitle>{content.generalInfo.subtitle}</Subtitle>
                        <HeaderButtonContainer href={content.generalInfo.titleCta.url}>
                            <SmallCta>{content.generalInfo.titleCta.text}</SmallCta>
                        </HeaderButtonContainer>
                    </SectionHeader>
                    <InnerSection>
                        <LeftContainer>
                            <Text dangerouslySetInnerHTML={{ __html: content.generalInfo.text}} />
                            <ButtonsContainer>
                                <ButtonContainer href={content.generalInfo.ctaOne.url}>
                                    <SmallCta>{content.generalInfo.ctaOne.text}</SmallCta>
                                </ButtonContainer>
                                <ButtonContainer href={content.generalInfo.ctaTwo.url}>
                                    <SmallCtaPink>{content.generalInfo.ctaTwo.text}</SmallCtaPink>
                                </ButtonContainer>
                            </ButtonsContainer>
                        </LeftContainer>
                        <RightContainer>
                            <Img src={content.generalInfo.image.sourceUrl} alt={content.generalInfo.image.altText} fill />
                        </RightContainer>
                    </InnerSection>
                    {/* FEATURES */}
                    <Grid>
                        {
                            features.map(feature => {
                                return(
                                    <GridItem key={feature.text}>
                                        <GridIconContainer>
                                            <GridIcon src={feature.icon.sourceUrl} alt={feature.icon.altText} fill />
                                        </GridIconContainer>
                                        <GridText dangerouslySetInnerHTML={{ __html: feature.text}} />
                                    </GridItem>
                                )
                            })
                        }
                    </Grid>
                    {/* LOCATION */}
                    <InnerSection>
                        <LeftContainer>
                            <LocationTitle>{content.location.title}</LocationTitle>
                            <LocationSubtitle>{content.location.subtitle}</LocationSubtitle>
                            <LocationText>{content.location.text}</LocationText>
                            <LocationButtonContainer href={content.location.cta.url}>
                                <SmallCta>{content.location.cta.text}</SmallCta>
                            </LocationButtonContainer>
                        </LeftContainer>
                    </InnerSection>
                </Inner>
            </Body>
        </>
    )
}

export default ForExhibitorsPage