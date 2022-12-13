import React from 'react'
import { GetContentContext } from '../../../context/ContentContext'
import {
    Container,
    IllustrationsContainer,
    IllustrationInner,
    Img,
    Button,
    Note,
} from './Elements'

const HandsSection = () => {

    const { content } = GetContentContext()

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
                            left="0rem"
                        >
                            {content.newsletterSection.visitButton.text}
                        </Button>
                        <Note
                            top="17.5rem"
                            left="0rem"
                            width="8rem"
                        >
                            {content.newsletterSection.visitText}    
                        </Note>
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
                            left="12rem"
                            href={content.newsletterSection.exhibitButton.url}
                        >
                            {content.newsletterSection.exhibitButton.text}
                        </Button>
                        <Note
                            top="17.5rem"
                            left="12rem"
                            width="11rem"
                        >
                            {content.newsletterSection.exhibitText}
                        </Note>
                    </IllustrationInner>
                </IllustrationsContainer>
            }
        </Container>
    )
}

export default HandsSection