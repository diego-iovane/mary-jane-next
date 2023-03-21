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
} from './Elements'
import MobileNav from './MobileNav/MobileNav'
import Hamburguer from './MobileNav/Hamburguer'
import { GetLanguageContext } from '../../../context/LanguageContext'

const NavBar = () => {

  const router = useRouter()
  const pathname = router.pathname
  const [opened, setOpened] = useState(false)
  const [scrollPos, setScrollPos] = useState(false)
  // const { language } = GetLanguageContext()

  const toTop = () => scrollTo(top)
  const handleScroll = () => setScrollPos(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navState = () => {
    if(scrollPos > 0.1 || pathname === '/furniture-rental-hostesses' || pathname === '/accomodation') return true
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
          <MainNav scrolled={navState()} />
        </Left>
        <Right>
          <SecondaryNav scrolled={navState()} />
          <Hamburguer
            opened={opened}
            setOpened={setOpened}
          />
        </Right>
        {/* <MobileNav
          primaryLinks={content.mainNav.links}
          secondaryLinks={content.secondaryNav.links}
          flags={content.secondaryNav.flags}
          scrolled={scrollPos > 0.1}
          opened={opened}
          setOpened={setOpened}
        /> */}
      </Inner>
    </Container>
  )
}

export default NavBar