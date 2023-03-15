import {
    HeadSection,
    HeadBg,
    Content,
    Inner,
    Title,
    PosterContainer,
    Poster,
} from './Elements'

const CannabisFestivalPage = () => {
    return (
        <>
            <HeadSection>
                <HeadBg src="/temp/contact-media-header-image.png" fill />
            </HeadSection>
            <Content>
                <Inner>
                    <Title>Cannabis Festival Agenda</Title>
                    <PosterContainer>
                        <Poster src="/temp/festival.png" fill />
                    </PosterContainer>

                    <Title>Hoppetosse Boat Schedule</Title>
                    <PosterContainer>
                        <Poster src="/temp/hope.png" fill />
                    </PosterContainer>
                </Inner>
            </Content>
        </>
    )
}

export default CannabisFestivalPage