import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { GetContentContext } from '../../../context/ContentContext'
import Lg from '/public/logos/logo-white.webp'
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

const NavBar = () => {

  const router = useRouter()
  const pathname = router.pathname
  const { content } = GetContentContext()
  const [opened, setOpened] = useState(false)
  const [scrollPos, setScrollPos] = useState(false)

  const toTop = () => scrollTo(top)
  const handleScroll = () => setScrollPos(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <Container scrolled={scrollPos > 0.1}>
      {
        Object.entries(content).length !== 0 &&
        <Inner>
          <Left>
            {
              pathname === '/' ?
                <LogoContainer onClick={toTop} scrolled={scrollPos > 0.1}>
                  <Logo src={Lg} alt='logo' placeholder='blur' priority />
                </LogoContainer> :
                <Link href='/'>
                  <LogoContainer scrolled={scrollPos > 0.1}>
                    <Logo src={Lg} alt='logo' laceholder='blur' priority />
                  </LogoContainer>
                </Link>
            }
            <MainNav
              links={content.mainNav.links}
              ticketBtn={content.mainNav.ticketButton}
              scrolled={scrollPos > 0.1}
            />
          </Left>
          <Right>
            <SecondaryNav
              links={content.secondaryNav.links}
              flags={content.secondaryNav.flags}
              scrolled={scrollPos > 0.1}
            />
            <Hamburguer 
              opened={opened}
              setOpened={setOpened}
            />
          </Right>
            <MobileNav
              primaryLinks={content.mainNav.links}
              secondaryLinks={content.secondaryNav.links}
              flags={content.secondaryNav.flags}
              scrolled={scrollPos > 0.1}
              opened={opened}
              setOpened={setOpened}
            />
        </Inner>
      }
    </Container>
  )
}

export default NavBar