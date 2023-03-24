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
        {
            src: '/logos/tiktok-logo.png',
            alt: 'tiktok logo',
            url: 'https://www.tiktok.com/@maryjane_berlin?is_from_webapp=1&sender_device=pc',
        },
        {
            src: '/logos/twt-logo.png',
            alt: 'twitter logo',
            url: 'https://twitter.com/hanfmesse',
        },
        {
            src: '/logos/in-logo.png',
            alt: 'linkedin logo',
            url: 'https://www.linkedin.com/company/mary-jane-berlin/',
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