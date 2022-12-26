import React from 'react'
import { GetContentContext } from '../../../context/ContentContext'
import InstaCard from '../../instaCard/InstaCard'
import {
    IllustrationsSectionContainer,
    IllustrationsContainer,
    IllustrationInner,
    Illustration,
    Button,
    BigLogoContainer,
    BigLogo,
} from './Elements'

const HandsSection = () => {

    const { content } = GetContentContext()

    return (
        <IllustrationsSectionContainer>
            <InstaCard
                x="-2rem"
                y="5rem"
                rt="5"
                src={content.exhibitorsPage.furniture.imgs.instaOne.src}
                alt={content.exhibitorsPage.furniture.imgs.instaOne.alt}
            />
            <BigLogoContainer>
                <BigLogo src={content.mainNav.logo.src} alt='logo' priority fill />
            </BigLogoContainer>
            <IllustrationsContainer>
                <IllustrationInner
                    top="0rem"
                    left="-5rem"
                >
                    <Illustration
                        src={content.newsletterSection.exhibitIllustration.src}
                        alt={content.newsletterSection.exhibitIllustration.alt}
                        priority
                        fill
                    />
                    <Button
                        href={content.exhibitorsPage.exhibitorButton.href}
                        top="14rem"
                        left="14rem"
                    >
                        {content.exhibitorsPage.exhibitorButton.title}
                    </Button>
                </IllustrationInner>
                <IllustrationInner
                    top="3rem"
                    left="-19rem"
                >
                    <Illustration
                        src={content.newsletterSection.visitIllustration.src}
                        alt={content.newsletterSection.visitIllustration.alt}
                        priority
                        fill
                    />
                    <Button
                        href={content.exhibitorsPage.exhibitButton.href}
                        top="15rem"
                        left="0rem"
                    >{content.exhibitorsPage.exhibitButton.title}</Button>
                </IllustrationInner>
            </IllustrationsContainer>
        </IllustrationsSectionContainer>
    )
}

export default HandsSection