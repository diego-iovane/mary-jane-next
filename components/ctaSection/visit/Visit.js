import React from 'react'
import { GetContentContext } from '../../../context/ContentContext'
import {
    Container,
    IllustrationsContainer,
    IllustrationInner,
    Img,
} from './Elements'

const Visit = () => {

    const { content } = GetContentContext()

    console.log(content)

    return (
        <Container>
            {
                Object.entries(content).length !== 0 &&
                <IllustrationsContainer>
                    <IllustrationInner
                        left="-14rem"
                        top="-3rem"
                    >
                        <Img
                            src={content.newsletterSection.visitIllustration.src}
                            alt={content.newsletterSection.visitIllustration.alt}
                            fill
                        />
                    </IllustrationInner>
                    <IllustrationInner
                        top="0"
                        left="-6rem"
                    >
                        <Img
                            src={content.newsletterSection.exhibitIllustration.src}
                            alt={content.newsletterSection.exhibitIllustration.alt}
                            fill
                        />
                    </IllustrationInner>
                </IllustrationsContainer>
            }
        </Container>
    )
}

export default Visit