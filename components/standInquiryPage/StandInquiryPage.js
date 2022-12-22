import React from 'react'
import Jotform from 'react-jotform'
import { GetContentContext } from '../../context/ContentContext'
import {
    HeroSection,
    HeroImage,
    Overlay,
    HeroContent,
    HeroTitle,
    Inner,
} from './Elements'


const StandInquiryPage = () => {

    const { content } = GetContentContext()

    return (
        <>
            {
                Object.entries(content).length !== 0 &&
                <>
                    <HeroSection>
                        <HeroImage
                            src={content.standInquiry.heroImg.src}
                            alt={content.standInquiry.heroImg.alt}
                            fill
                        />
                        <Overlay />
                        <HeroContent>
                            <HeroTitle dangerouslySetInnerHTML={{ __html: content.standInquiry.title }} />
                        </HeroContent>
                    </HeroSection>
                    <Inner>
                        <Jotform src="https://form.jotform.com/73424744902356" />
                    </Inner>
                </>
            }
        </>
    )
}

export default StandInquiryPage