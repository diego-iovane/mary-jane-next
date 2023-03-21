import {
    Section,
    Inner,
    Content,
    Title,
    IconsContainer,
    IconContainer,
    Icon,
} from './Elements'

const SocialSection = () => {

    const socials = [
        {
            src: '/logos/face.png',
            alt: 'facebook logo',
            url: '/',
        },
        {
            src: '/logos/insta.png',
            alt: 'instagram logo',
            url: '/',
        },
        {
            src: '/logos/youtu.png',
            alt: 'youtube logo',
            url: '/',
        },
    ]

    return (
        <Section>
            <Content>
                <Title>Follow us</Title>
                <IconsContainer>
                    {
                        socials.map(item => {
                            return (
                                <IconContainer
                                    key={item.src}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                    />
                                </IconContainer>
                            )
                        })
                    }
                </IconsContainer>
            </Content>
        </Section>
    )
}

export default SocialSection