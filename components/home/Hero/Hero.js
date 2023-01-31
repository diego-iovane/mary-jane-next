import VideoBack from '../../videoBg/VideoBg'
import { GetContentContext } from '../../../context/ContentContext'
import PrimaryButton from '../../buttons/PrimaryButton'
import {
    containerMotion,
    elementsMotion,
} from './Motions'
import {
    HeroSection,
    Inner,
    Content,
    Title,
    SubTitle,
    CounterContainer,
    ButtonContainer,
    WhiteOverlay,
} from './Elements'
import Counter from '../../counter/Counter'

const Hero = () => {

    const { content } = GetContentContext()

    return (
        <HeroSection>
            <VideoBack />
            <WhiteOverlay />
            <Inner>
                {
                    Object.entries(content).length !== 0 &&
                    <Content
                        variants={containerMotion}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                    >
                        <SubTitle
                            dangerouslySetInnerHTML={{ __html: content.hero.subTitle }}
                            variants={elementsMotion}
                        />
                        <Title
                            dangerouslySetInnerHTML={{ __html: content.hero.title }}
                            variants={elementsMotion}
                        />
                        <CounterContainer variants={elementsMotion}>
                            <Counter content={content.hero.counter} />
                        </CounterContainer>
                        <ButtonContainer variants={elementsMotion}>
                            <PrimaryButton>
                                <a
                                    href={content.hero.button.url}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    {content.hero.button.text}
                                </a>
                            </PrimaryButton>
                        </ButtonContainer>
                    </Content>
                }
            </Inner>
        </HeroSection>
    )
}

export default Hero
{/* <span style="font-size: 3rem">23. - 25. </span><br></br><span style="font-size: 8rem">June </span><br></br><span style="color: var(--light-green); font-size: 8rem;">2023</span> */ }