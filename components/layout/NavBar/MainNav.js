import Link from 'next/link'
// import PrimaryButton from '../../buttons/PrimaryButton'
import {
    Nav,
    Links,
    LinkContainer,
    // ButtonContainer,
} from './Elements'

const MainNav = ({ links, scrolled, ticketBtn }) => {

    const temp = [
        {
            title: 'Sponsoring',
            url: '',
        },
        {
            title: 'For exhibitors',
            url: '',
        },
        {
            title: 'For visitors',
            url: '',
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

    return (
        <Nav scrolled={scrolled}>
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
            <Links>
                {
                    temp.map(link => {
                        return (
                            <LinkContainer key={link.title} >
                                <Link href={link.url}>
                                    {link.title}
                                </Link>
                            </LinkContainer>
                        )
                    })
                }
            </Links>
            {/* <ButtonContainer>
                <PrimaryButton>
                    <a href={ticketBtn.url} rel="noopener noreferrer" target="_blank">{ticketBtn.title}</a>
                </PrimaryButton>
            </ButtonContainer> */}
        </Nav>
    )
}

export default MainNav