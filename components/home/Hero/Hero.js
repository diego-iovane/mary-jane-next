import VideoBack from '../../videoBg/VideoBg'
import { GetContentContext } from '../../../context/ContentContext'
import PrimaryButton from '../../buttons/PrimaryButton'
import {
    containerMotion,
    elementsMotion,
    titleMotion,
} from './Motions'
import {
    HeroSection,
    Inner,
    Content,
    Title,
    Date,
    Month,
    Year,
    SubTitle,
    CounterContainer,
    ButtonContainer,
    // WhiteOverlay,
} from './Elements'
import Counter from '../../counter/Counter'

const Hero = () => {

    const { content } = GetContentContext()

    const subTitle = ` <span class="subtitle">Germanys leading<span class="subtitle-span"> Cannabis<br></br> Expo & Festival</span> since 2016</span>`

    return (
        <HeroSection>
            <VideoBack />
            {/* <WhiteOverlay /> */}
            <Inner>
                {
                    Object.entries(content).length !== 0 &&
                    <Content
                        variants={containerMotion}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                    >
                        {/* <SubTitle
                            dangerouslySetInnerHTML={{ __html: content.hero.subTitle }}
                            variants={elementsMotion}
                        /> */}
                        <SubTitle
                            dangerouslySetInnerHTML={{ __html: subTitle }}
                            variants={elementsMotion}
                        />
                        <Title variants={elementsMotion}>
                            <Date>23.-25.</Date>
                            <Month> June</Month>
                            <Year> 2023</Year>
                        </Title>
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