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

const ContactPage = ({ data, language }) => {

    console.log(data)

    const content = language === 'en' ? 
    {
        title: data.contactTitleEn || '',

    } :
    {
        title: data.contactTitleDe || '',

    }

    return (
        <>
            <HeadSection>
                <HeadBg src="/temp/contact-media-header-image.png" fill />
            </HeadSection>
            <Content>
                <Inner>
                    <Title>{content.title}</Title>
                    {/* {
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
                    } */}
                </Inner>
            </Content>
        </>
    )
}

export default ContactPage