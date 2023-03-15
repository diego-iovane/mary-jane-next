import {
    HeadSection,
    HeadBg,
    Inner,
    Content,
    Title,
    SubTitle,
    Item,
    Icon,
    I,
    Text,
} from './Elements'

const ContactPage = () => {

    const temp = [
        {
            title: "Address of the office",
            content: [
                {
                    icon: "/icons/temp/placeholder.png",
                    text: "Rocket Cannabis GmbH<br></br>Attilastr. 18<br></br>12529 Schönefeld | Germany",
                },
                {
                    icon: "/icons/temp/placeholder.png",
                    text: "+49 (0) 175 88 666 47 (12 – 3 pm)",
                },
                {
                    icon: "/icons/temp/placeholder.png",
                    text: "+49 (0) 30 221 85334",
                },
                {
                    icon: "/icons/temp/placeholder.png",
                    text: "info@maryjane-berlin.com",
                },
            ]
        },
        {
            title: "PR & Marketing",
            content: [
                {
                    icon: "/icons/temp/placeholder.png",
                    text: "info@maryjane-berlin.com",
                }
            ]
        },
        {
            title: "Conference & Speeches",
            content: [
                {
                    text: "Nhung Nguyen",
                },
                {
                    icon: "/icons/temp/placeholder.png",
                    text: "nhung@maryjane-berlin.com",
                }
            ]
        },
    ]

    return (
        <>
            <HeadSection>
                <HeadBg src="/temp/contact-media-header-image.png" fill />
            </HeadSection>
            <Content>
                <Inner>
                    <Title>Contact</Title>
                    {
                        temp.map(item => {
                            return (
                                <div key={item.title}>
                                    <SubTitle>{item.title}</SubTitle>
                                    {
                                        item.content.map(item => {
                                            return (
                                                <Item>
                                                    {
                                                        item.icon &&
                                                        <Icon>
                                                            <I src={item.icon} fill />
                                                        </Icon>
                                                    }
                                                    <Text dangerouslySetInnerHTML={{ __html: item.text }} />
                                                </Item>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </Inner>
            </Content>
        </>
    )
}

export default ContactPage