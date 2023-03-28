import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import MainNav from './MainNav'
import SecondaryNav from './SecondaryNav'
import {
  Container,
  Inner,
  Left,
  Right,
  LogoContainer,
  Logo,
  Links,
} from './Elements'
import MobileNav from './MobileNav/MobileNav'
import Hamburguer from './MobileNav/Hamburguer'
import { GetLanguageContext } from '../../../context/LanguageContext'

const NavBar = () => {

  const router = useRouter()
  const pathname = router.pathname
  const [opened, setOpened] = useState(false)
  const [scrollPos, setScrollPos] = useState(false)
  const { language } = GetLanguageContext()

  const enLinks = [
    {
      title: 'Sponsoring',
      url: '/sponsoring',
    },
    {
      title: 'Exhibitors 2023',
      url: 'exhibitors',
    },
    {
      title: 'For exhibitors',
      url: '/for-exhibitors',
      dropdown: [
        {
          title: 'General info',
          url: '/for-exhibitors',
        },
        {
          title: 'Exhibitors guide',
          url: '/guides',
        },
        {
          title: 'Stand inquiry',
          url: '/stand-inquiry',
        },
        {
          title: 'Furniture rental & Hostesses',
          url: 'furniture-rental-hostesses',
        },
        {
          title: 'Accomodation',
          url: '/accomodation',
        },
      ]
    },
    {
      title: 'For visitors',
      url: '/for-visitors',
      dropdown: [
        {
          title: 'General info',
          url: '/for-visitors',
        },
        {
          title: 'Cannabis festival',
          url: '/cannabis-festival',
        },
        // {
        //   title: 'Cannabis conferences',
        //   url: '',
        // },
        {
          title: 'Tickets',
          url: '/',
        },
        {
          title: 'FAQs',
          url: '/for-visitors',
        },
      ]
    },
    {
      title: 'About us',
      url: '/mary-jane',
    },
    {
      title: 'Contact',
      url: '/contact',
      dropdown: [
        {
          title: 'Media',
          url: '/media',
        },
      ]
    },
  ]

  const deLinks = [
    {
      title: 'Sponsoring',
      url: '/sponsoring',
    },
    {
      title: 'Austeller 2023',
      url: '/exhibitors',
    },
    {
      title: 'Für Aussteller',
      url: '/for-exhibitors',
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
      title: 'Über uns',
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

  useEffect(() => {
    setOpened(false)
  }, [pathname])


  const links = language === "en" ? enLinks : deLinks

  const toTop = () => scrollTo(top)
  const handleScroll = () => setScrollPos(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navState = () => {
    if (scrollPos > 0.1) return true
    return false
  }

  return (
    <Container scrolled={navState()}>
      <Inner>
        <Left>
          {
            pathname === '/' ?
              <LogoContainer onClick={toTop} scrolled={navState()}>
                {
                  navState() ?
                    <Logo src="/logos/logo-light-green.png" alt='brand logo' priority fill /> :
                    <Logo src="/logos/logo-white.png" alt='logo' priority fill />
                }
              </LogoContainer> :
              <Link href='/'>
                <LogoContainer scrolled={navState()}>
                  {
                    navState() ?
                      <Logo src="/logos/logo-light-green.png" alt='brand logo' priority fill /> :
                      <Logo src="/logos/logo-white.png" alt='logo' priority fill />
                  }
                </LogoContainer>
              </Link>
          }
          <MainNav scrolled={navState()} links={links}/>
        </Left>
        <Right>
          <SecondaryNav scrolled={navState()} />
          <Hamburguer
            opened={opened}
            setOpened={setOpened}
            scrolled={navState()}
          />
        </Right>
        <MobileNav
          // flags={content.secondaryNav.flags}
          links={links}
          scrolled={scrollPos > 0.1}
          opened={opened}
          setOpened={setOpened}
        />
      </Inner>
    </Container>
  )
}

export default NavBar