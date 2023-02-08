import React from 'react'
import Link from 'next/link'
import LanguageDropdown from '../../languageDropdown/LanguageDropdown'
import {
    Nav,
    TicketsBtn,
    StandBtn,
} from './Elements'

const SecondaryNav = ({ links, flags, scrolled }) => {

    const temp = [
        {
            title: 'Get tickets',
            url: '/',
        },
        {
            title: 'Stand inquiry',
            url: '/',
        }
    ]

    return (
        <Nav scrolled={scrolled}>
            {/* <Links>
                {
                    links.map(link => {
                        return (
                            <LinkContainer key={link.url}>
                                <Link href={link.url}>{link.title}</Link>
                            </LinkContainer>
                        )
                    })
                }
            </Links> */}
            <TicketsBtn
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 1 }}
                transition={{ type: "spring", bounce: .5 }}
            >
                <Link href="/">Get tickets</Link>
            </TicketsBtn>
            <StandBtn
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 1 }}
                transition={{ type: "spring", bounce: .5 }}
            >
                <Link href="/">Stand inquiry</Link>
            </StandBtn>
            <LanguageDropdown flags={flags} />
        </Nav>
    )
}

export default SecondaryNav