import SmallCta from '../../buttons/SmallCta'
import SmallCtaPink from '../../buttons/SmallCtaPink'
import {
    Section,
    Inner,
    Title,
    Subtitle,
    ButtonsContainer,
    ButtonContainer,
} from './Elements'

const FooterCta = ({ content }) => {

    return (
        <Section>
            <Inner>
                <Title>{content.title}</Title>
                <Subtitle>{content.subtitle}</Subtitle>
                <ButtonsContainer>
                    <ButtonContainer href={content.button1.url}>
                        <SmallCta>
                            {content.button1.text}
                        </SmallCta>
                    </ButtonContainer>
                    <ButtonContainer href={content.button2.url}>
                        <SmallCtaPink>
                            {content.button2.text}
                        </SmallCtaPink>
                    </ButtonContainer>
                </ButtonsContainer>
            </Inner>
        </Section>
    )
}

export default FooterCta