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

    console.log(content.exhibitorsPage.buttonsSection.buttons)

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
                                                src={item.src} 
                                                alt={item.title}
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