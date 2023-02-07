import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'
import {
    Nav,
    Links,
    LinkContainer,
    MegaMenu,
    MenuLinkContainer,
} from './Elements'

const MainNav = ({ links, scrolled, ticketBtn }) => {

    const [megaMenuOpen, setMegaMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('')

    const temp = [
        {
            title: 'Sponsoring',
            url: '',
        },
        {
            title: 'For exhibitors',
            url: '',
            dropdown: [
                {
                    title: 'General info.',
                    url: '',
                },
                {
                    title: 'Exhibitors guide',
                    url: '',
                },
                {
                    title: 'Stand inquiry',
                    url: '',
                },
                {
                    title: 'Furniture rental & Hostesses',
                    url: '',
                },
                {
                    title: 'Accomodation',
                    url: '',
                },
            ]
        },
        {
            title: 'For visitors',
            url: '',
            dropdown: [
                {
                    title: 'General info.',
                    url: '',
                },
                {
                    title: 'Agenda',
                    url: '',
                },
                {
                    title: 'Cannabis conferences',
                    url: '',
                },
                {
                    title: 'Tickets',
                    url: '',
                },
                {
                    title: 'FAQs',
                    url: '',
                },
            ]
        },
        {
            title: 'Mary Jane 2023',
            url: '',
        },
        {
            title: 'Contact',
            url: '',
        },
    ]

    const handleMouseEnter = (id) => {
        setMegaMenuOpen(true)
        setActiveLink(id)
    }

    const handleMouseLeave = () => {
        setMegaMenuOpen(false)
        setActiveLink('')
    }

    const megaMenuMotion = {
        initial: {
            opacity: 0,
            y: 2,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .05,
            }
        },
        exit: {
            y: 2,
            opacity: 0,
        }
    }

    return (
        <Nav scrolled={scrolled}>
            <Links>
                {
                    temp.map(link => {
                        return (
                            <LinkContainer
                                key={link.title}
                                scrolled={scrolled}
                                active={activeLink === link.title}
                                onMouseEnter={() => handleMouseEnter(link.title)}
                                onMouseLeave={() => handleMouseLeave()}
                            >
                                <Link href={link.url}>
                                    {link.title}
                                </Link>
                                {
                                    link.dropdown ?
                                        <>
                                            {
                                                link.title === activeLink && megaMenuOpen ?
                                                    <AnimatePresence>
                                                        <MegaMenu
                                                            scrolled={scrolled}
                                                            variants={megaMenuMotion}
                                                            initial="initial"
                                                            animate="animate"
                                                            exit="exit"
                                                        >
                                                            {
                                                                link.dropdown.map(link => {
                                                                    return (
                                                                        <MenuLinkContainer key={link.title}>
                                                                            <Link href={link.url}>
                                                                                {link.title}
                                                                            </Link>
                                                                        </MenuLinkContainer>
                                                                    )
                                                                }
                                                                )
                                                            }
                                                        </MegaMenu>
                                                    </AnimatePresence> : null
                                            }
                                        </> : null
                                }
                            </LinkContainer>
                        )
                    })
                }
            </Links>
            {/* <Links>
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
            </Links> */}
            {/* <ButtonContainer>
                <PrimaryButton>
                    <a href={ticketBtn.url} rel="noopener noreferrer" target="_blank">{ticketBtn.title}</a>
                </PrimaryButton>
            </ButtonContainer> */}
        </Nav>
    )
}

export default MainNav