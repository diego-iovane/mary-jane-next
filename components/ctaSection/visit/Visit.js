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
                    <IllustrationInner>
                        <Img 
                            src={content.newsletterSection.visitIllustration.src}
                            alt={content.newsletterSection.visitIllustration.alt}
                            fill
                        />
                    </IllustrationInner>
                </IllustrationsContainer>
            }
        </Container>
    )
}

export default Visit