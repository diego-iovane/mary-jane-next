import React from 'react'
import VideoBack from '../videoBg/VideoBg'
import { GetContentContext } from '../../context/ContentContext'
import SecondaryButton from '../buttons/SecondaryButton'
import {
    HeroSection,
    Content,
    Title,
    SubTitle,
} from './Elements'
import Counter from '../counter/Counter'

const Hero = () => {

    const { content } = GetContentContext()

    return (
        <HeroSection>
            <VideoBack />
            {
                Object.entries(content).length !== 0 &&
                <Content>
                    <SubTitle dangerouslySetInnerHTML={{ __html: content.hero.subTitle }} />
                    <Title dangerouslySetInnerHTML={{ __html: content.hero.title }} />
                    <Counter content={content.hero.counter} />
                    <SecondaryButton>{content.hero.button}</SecondaryButton>
                </Content>
            }
        </HeroSection>
    )
}

export default Hero