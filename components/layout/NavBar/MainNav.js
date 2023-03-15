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
import { GetLanguageContext } from '../../../context/LanguageContext'

const MainNav = ({ scrolled }) => {

    const { language } = GetLanguageContext()
    const [megaMenuOpen, setMegaMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('')

    const enLinks = [
        {
            title: 'Sponsoring',
            url: '',
        },
        {
            title: 'Exhibitors 2023',
            url: '',
        },
        {
            title: 'For exhibitors',
            url: '',
            dropdown: [
                {
                    title: 'General info',
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
                    title: 'General info',
                    url: '',
                },
                {
                    title: 'Cannabis festival',
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
            title: 'Mary Jane',
            url: '',
        },
        {
            title: 'Contact',
            url: '',
            dropdown: [
                {
                    title: 'Media',
                    url: '',
                },
            ]
        },
    ]

    const deLinks = [
        {
            title: 'Sponsoring',
            url: '',
        },
        {
            title: 'Austeller 2023',
            url: '',
        },
        {
            title: 'Für Aussteller',
            url: '',
            dropdown: [
                {
                    title: 'Allgemeine Info',
                    url: '',
                },
                {
                    title: 'Aussteller Guide',
                    url: '',
                },
                {
                    title: 'Standanfrage',
                    url: '',
                },
                {
                    title: 'Mietmöbel & Hostessen',
                    url: '',
                },
                {
                    title: 'Unterkunft',
                    url: '',
                },
            ]
        },
        {
            title: 'Für Besucher',
            url: '',
            dropdown: [
                {
                    title: 'Allgemeine Info',
                    url: '',
                },
                {
                    title: 'Cannabis Festival',
                    url: '',
                },
                {
                    title: 'Cannabis Konferenz',
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
            title: 'Mary Jane',
            url: '',
        },
        {
            title: 'Kontact',
            url: '',
            dropdown: [
                {
                    title: 'Media',
                    url: '',
                },
            ]
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

    const links = language === "en" ? enLinks : deLinks

    return (
        <Nav scrolled={scrolled}>
            <Links>
                {
                    links.map(link => {
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
        </Nav>
    )
}

export default MainNav