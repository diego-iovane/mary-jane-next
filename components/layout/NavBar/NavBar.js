import React from 'react'
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

const NavBar = ({ data }) => {

  const router = useRouter()
  const pathname = router.pathname
  const { content } = GetContentContext()

  const toTop = () => scrollTo(top)

  return (
    <Container>
      {
        Object.entries(content).length !== 0 &&
        <Inner>
          <Left>
            {
              pathname === '/' ?
                <LogoContainer onClick={toTop}>
                  <Logo src={Lg} alt='logo' placeholder='blur' priority />
                </LogoContainer> :
                <Link href='/'>
                  <LogoContainer>
                    <Logo src={Lg} alt='logo' laceholder='blur' priority />
                  </LogoContainer>
                </Link>
            }
            <MainNav links={content.mainNav.links} />
          </Left>
          <Right>
            <SecondaryNav links={content.secondaryNav.links} flags={content.secondaryNav.flags} />
          </Right>
        </Inner>
      }
    </Container>
  )
}

export default NavBar