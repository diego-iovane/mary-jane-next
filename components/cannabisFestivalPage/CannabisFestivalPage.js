import {
    HeadSection,
    HeadBg,
    Content,
    Inner,
    Title,
    PosterContainer,
    Poster,
} from './Elements'

const CannabisFestivalPage = ({ data, language }) => {

    const content = language === 'en' ? 
    {
        titleOne: data.titleOneEn || '',
        titleTwo: data.titleTwoEn || '', 
    } :
    {
        titleOne: data.titleOneEn || '',
        titleTwo: data.titleTwoDe || '',
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