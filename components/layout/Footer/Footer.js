import SocialSection from './SocialSection/SocialSection'
import {
  Section,
  Inner,
  Left,
  LeftLeft,
  LeftRight,
  Right,
  RightLeft,
  RightRight,
  Title,
  Text,
  LogoContainer,
  Logo,
  ScrubbleContainer,
  ScrubbleImg,
  Links,
  FooterLink,
} from './Elements'
import NewsletterForm from './NewsletterForm/NewsletterForm'

const Footer = () => {

  const links = [
    {
      title: 'FAQ',
      url: '',
    },
    {
      title: 'Terms & Conditions',
      url: '',
    },
    {
      title: 'Privacy policy',
      url: '',
    },
    {
      title: 'Press',
      url: '',
    },
    {
      title: 'Blog',
      url: '',
    },
  ]

  return (
    <>
      <SocialSection />
      <NewsletterForm />
      {/* <Section>
        {
          Object.entries(content).length !== 0 &&
          <Inner>
            <Left>
              <LeftLeft>
                <Title dangerouslySetInnerHTML={{ __html: content.footer.information.title }} />
                <Text dangerouslySetInnerHTML={{ __html: content.footer.information.text }} />
                <Title dangerouslySetInnerHTML={{ __html: content.footer.contact.title }} />
                <Text dangerouslySetInnerHTML={{ __html: content.footer.contact.text }} />
              </LeftLeft>
              <LeftRight>
                <Title dangerouslySetInnerHTML={{ __html: content.footer.register.title }} />
                <Text dangerouslySetInnerHTML={{ __html: content.footer.register.text }} />
              </LeftRight>
            </Left>
            <Right>
              <RightLeft>
                <Links>
                  {
                    links.map(link => {
                      return(
                        <FooterLink key={link.url} href={link.url}>
                          {link.title}
                        </FooterLink>
                      )
                    })
                  }
                </Links>
              </RightLeft>
              <RightRight>
                <LogoContainer>
                  <Logo 
                    src={content.footer.icon.src} 
                    alt={content.footer.icon.alt}  
                    fill 
                  />
                </LogoContainer>
                <ScrubbleContainer>
                  <ScrubbleImg  
                    src={content.footer.img.src}
                    alt={content.footer.img.alt}
                    fill
                  />
                </ScrubbleContainer>
              </RightRight>
            </Right>

          </Inner>
        }
      </Section> */}
    </>
  )
}

export default Footer