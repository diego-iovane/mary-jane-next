import React from 'react'
import Link from 'next/link'
import LanguageDropdown from '../../languageDropdown/LanguageDropdown'
import {
    Nav,
    TicketsBtn,
    StandBtn,
    DropdownContainer,
} from './Elements'

const SecondaryNav = ({ scrolled }) => {

    return (
        <Nav scrolled={scrolled}>
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
            <DropdownContainer>
                <LanguageDropdown />
            </DropdownContainer>
        </Nav>
    )
}

export default SecondaryNav