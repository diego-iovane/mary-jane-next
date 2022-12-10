import React from 'react'
import Link from 'next/link'
import {
    Nav,
    Links,
    LinkContainer,
    ButtonContainer,
} from './Elements'
import PrimaryButton from '../../buttons/PrimaryButton'

const MainNav = ({ links }) => {

    return (
        <Nav>
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
                <PrimaryButton>tickets</PrimaryButton>
            </ButtonContainer>
        </Nav>
    )
}

export default MainNav