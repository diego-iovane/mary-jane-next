import VideoBack from '../../videoBg/VideoBg'
import { GetContentContext } from '../../../context/ContentContext'
import PrimaryButton from '../../buttons/PrimaryButton'
import {
    HeroSection,
    Inner,
    Content,
    Title,
    SubTitle,
} from './Elements'
import Counter from '../../counter/Counter'

const Hero = () => {

    const { content } = GetContentContext()

    return (
        <HeroSection>
            <VideoBack />
            <Inner>
                {
                    Object.entries(content).length !== 0 &&
                    <Content>
                        <SubTitle dangerouslySetInnerHTML={{ __html: content.hero.subTitle }} />
                        <Title dangerouslySetInnerHTML={{ __html: content.hero.title }} />
                        <Counter content={content.hero.counter} />
                        <PrimaryButton>
                            <a
                                href={content.hero.button.url}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                {content.hero.button.text}
                            </a>
                        </PrimaryButton>
                    </Content>
                }
            </Inner>
        </HeroSection>
    )
}

export default Hero
{/* <span style="font-size: 3rem">23. - 25. </span><br></br><span style="font-size: 8rem">June </span><br></br><span style="color: var(--light-green); font-size: 8rem;">2023</span> */}