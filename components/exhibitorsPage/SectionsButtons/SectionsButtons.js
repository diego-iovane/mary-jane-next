import React from 'react'
import { GetContentContext } from '../../../context/ContentContext'
import {
    Section,
    Inner,
    Title,
    ButtonsContainer,
    Button,
    IconContainer,
    Icon,
} from './Elements'

const SectionsButtons = () => {

    const { content } = GetContentContext()

    return (
        <Section>
            {/* { */}
                {/* // Object.entries(content).length !== 0 && */}
                <Inner>
                    <Title>{content.exhibitorsPage.buttonsSection.title}</Title>
                    <ButtonsContainer>
                        {
                            content.exhibitorsPage.buttonsSection.buttons.map(item => {
                                return(
                                    <Button
                                        href={item.href}
                                    >
                                        <IconContainer>
                                            <Icon 
                                                src={content.exhibitorsPage.buttonsSection.buttons.src?.src} 
                                                alt=""
                                                fill
                                            />
                                        </IconContainer>
                                        {item.title}
                                    </Button>
                                )
                            })
                        }
                    </ButtonsContainer>
                </Inner>
            {/* } */}
        </Section>
    )
}

export default SectionsButtons