import React from 'react'
import { GetContentContext } from '../../../context/ContentContext'
import {
    Container,
    IllustrationsContainer,
    IllustrationInner,
    Img,
    Button,
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
                        left="-16rem"
                        top="-3rem"
                    >
                        <Img
                            src={content.newsletterSection.visitIllustration.src}
                            alt={content.newsletterSection.visitIllustration.alt}
                            fill
                        />
                        <Button
                            href={content.newsletterSection.visitButton.url}
                            top="14rem"
                            left="-2rem"
                        >
                            {content.newsletterSection.visitButton.text}
                        </Button>
                    </IllustrationInner>
                    <IllustrationInner
                        top="7rem"
                        left="-10rem"
                        height="23rem"
                    >
                        <Img
                            src={content.newsletterSection.illustration.src}
                            alt={content.newsletterSection.illustration.alt}
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
                        <Button
                            top="14rem"
                            left="15rem"
                            href={content.newsletterSection.exhibitButton.url}
                        >
                            {content.newsletterSection.exhibitButton.text}
                        </Button>
                    </IllustrationInner>
                </IllustrationsContainer>
            }
        </Container>
    )
}

export default Visit