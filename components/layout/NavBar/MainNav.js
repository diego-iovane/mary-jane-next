import React from 'react'
import Link from 'next/link'
import {
    Nav,
    Links,
    LinkContainer,
    ButtonContainer,
} from './Elements'
import PrimaryButton from '../../buttons/PrimaryButton'

const MainNav = ({ links, scrolled, ticketBtn }) => {

    return (
        <Nav scrolled={scrolled}>
            <Links>
                {
                    links.map(link => {
                        return (
                            <LinkContainer key={link.title} >
                                <Link href={link.url}>
                                    {link.title}
                                </Link>
                            </LinkContainer>
                        )
                    })
                }
            </Links>
            <ButtonContainer>
                <PrimaryButton>
                    <a href={ticketBtn.url} rel="noopener noreferrer" target="_blank">{ticketBtn.title}</a>
                </PrimaryButton>
            </ButtonContainer>
        </Nav>
    )
}

export default MainNav