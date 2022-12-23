import React from 'react'
import { GetContentContext } from '../../../context/ContentContext'
import InstaCard from '../../instaCard/InstaCard'
import {
    Section,
    Inner,
    Title,
} from '../Elements'
import {
    Content,
    Left,
    Right,
    Subtitle,
    Details,
    FilesContainer,
    FileContainer,
    FileName,
    FileIcon,
} from './Elements'

const Furniture = () => {

    const { content } = GetContentContext()

    return (
        <Section id="furniture-section" bgColor="var(--bg-gray)">
            <Inner>
                <Title>{content.exhibitorsPage.furniture.title}</Title>
                <Content>
                    <Left>
                        <InstaCard
                            x="2rem"
                            y="50%"
                            rt="5"
                            src={content.exhibitorsPage.furniture.imgs.instaOne.src}
                            alt={content.exhibitorsPage.furniture.imgs.instaOne.alt}
                        />
                        <InstaCard
                            x="3.5rem"
                            y="25%"
                            rt="-1"
                            src={content.exhibitorsPage.furniture.imgs.instaTwo.src}
                            alt={content.exhibitorsPage.furniture.imgs.instaTwo.alt}
                        />
                    </Left>
                    <Right>
                        <Subtitle>{content.exhibitorsPage.furniture.subtitle}</Subtitle>
                        <Details dangerouslySetInnerHTML={{ __html: content.exhibitorsPage.furniture.details.info }} />
                    </Right>
                </Content>
                <FilesContainer>
                    {
                        content.exhibitorsPage.furniture.files.map(item => {
                            return (
                                <FileContainer>
                                    <FileIcon
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM64 224H88c30.9 0 56 25.1 56 56s-25.1 56-56 56H80v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V320 240c0-8.8 7.2-16 16-16zm24 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H80v48h8zm72-64c0-8.8 7.2-16 16-16h24c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H176c-8.8 0-16-7.2-16-16V240zm32 112h8c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16h-8v96zm96-128h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H304v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H304v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V304 240c0-8.8 7.2-16 16-16z" /></svg>
                                    </FileIcon>
                                    <FileName>{item.title}</FileName>
                                </FileContainer>
                            )
                        })
                    }
                </FilesContainer>
            </Inner>
        </Section>
    )
}

export default Furniture