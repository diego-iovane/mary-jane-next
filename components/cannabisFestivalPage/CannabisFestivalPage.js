import SmallCta from '../buttons/SmallCta'
import {
    HeadSection,
    HeadBg,
    Content,
    Inner,
    Title,
    PosterContainer,
    Poster,
    ButtonContainer,
} from './Elements'

const CannabisFestivalPage = ({ data, language }) => {

    const content = language === 'en' ? 
    {
        titleOne: data.titleOneEn || '',
        titleTwo: data.titleTwoEn || '',
        cta: data.ctaFestivalEn || '',
    } :
    {
        titleOne: data.titleOneDe || '',
        titleTwo: data.titleTwoDe || '',
        cta: data.ctaFestivalDe || '',
    }

    return (
        <>
            <HeadSection>
                <HeadBg src="/temp/contact-media-header-image.png" alt="" fill />
            </HeadSection>
            <Content>
                <Inner>
                    <Title>{content.titleOne}</Title>
                    <PosterContainer>
                        <Poster src={data.imageOne.sourceUrl} alt={data.imageOne.altText} fill />
                    </PosterContainer>
                    <ButtonContainer href={content.cta.url} target="_blank" rel="noopener noreferrer">
                        <SmallCta>{content.cta.text}</SmallCta>
                    </ButtonContainer>
                    <PosterContainer>
                        <Poster src={data.imageThree.sourceUrl} alt={data.imageThree.altText} fill />
                    </PosterContainer>
                    <Title>{content.titleTwo}</Title>
                    <PosterContainer>
                        <Poster src={data.imageTwo.sourceUrl} alt={data.imageTwo.altText} fill />
                    </PosterContainer>
                </Inner>
            </Content>
        </>
    )
}

export default CannabisFestivalPage