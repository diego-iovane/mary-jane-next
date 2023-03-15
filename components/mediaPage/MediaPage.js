import {
    HeadSection,
    HeadBg,
    Inner,
    Content,
    Title,
    SubTitle,
    Item,
    Dot,
    Text,
} from './Elements'

const MediaPage = () => {

    const tempIntro = "We are always very happy and thankful for the media that is written about our cannabis expo, and we wish for you to read the following information below before publishing.<br></br>To use our logo, please download it <a href="/">HERE</a><br></br>If you wish to become a media sponsor for our event, please contact us at: presse@maryjane-berlin.com with the title MEDIA SPONSOR and we will get back to you as soon as we can."

    const temp = [
        {
            title: "Accreditation Guidelines of Mary Jane Berlin",
            content: [
                {
                    dot: true,
                    text: "Accreditation is solely for the purpose of journalistic reporting.",
                },
                {
                    dot: true,
                    text: "Mary Jane Berlin is entitled to demand proof of a journalistic activity within the accreditation process of journalists.",
                },
                {
                    dot: true,
                    text: "The easy accreditation is facilitated by the automatic sending or presentation of expo-related documents. This especially refers to freelance journalists. Editorial acknowledgments are only accepted in exceptional cases. Submission of articles without an expo reference can lead to non-accreditation and should therefore be justified.<br></br>Mary Jane Berlin reserves the right to refuse an accreditation without giving reasons.",
                },
                {
                    dot: true,
                    text: "The presentation of a press card can serve as an indication of a main activity as a journalist. The expo organizer reserves the right to request further proofs for the review of the journalistic activity.",
                },
                {
                    dot: true,
                    text: "With the accreditation, Mary Jane Berlin is given the irrevocable consent to include the accredited person with name and contact details in the press mailing list and to send him/her press information about the respective series of events."
                },
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
                    <Title>Media</Title>
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
                                                        item.dot && <Dot />
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

export default MediaPage