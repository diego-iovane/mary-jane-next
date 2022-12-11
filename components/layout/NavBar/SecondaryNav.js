import React from 'react'
import Link from 'next/link'
import LanguageDropdown from '../../languageDropdown/LanguageDropdown'
import {
    Nav,
    Links,
    LinkContainer,
} from './Elements'

const SecondaryNav = ({ links, flags, scrolled }) => {
    return (
        <Nav scrolled={scrolled}>
            <Links>
                {
                    links.map(link => {
                        return (
                            <LinkContainer key={link.url}>
                                <Link href={link.url}>{link.title}</Link>
                            </LinkContainer>
                        )
                    })
                }
            </Links>
            <LanguageDropdown flags={flags}/>
        </Nav>
    )
}

export default SecondaryNav