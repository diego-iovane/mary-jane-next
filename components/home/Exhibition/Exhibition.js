import SecondaryButton from '../../buttons/SecondaryButton'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/effect-cards"
import { EffectCards } from "swiper";
import {
    Section,
    Inner,
    Content,
    Title,
    Text,
    Images,
    InstaCard,
    InstaImgContainer,
    InstaText,
    IconContainer,
    Icon,
    Img,
    IconTxt,
} from './Elements'

const Exhibition = () => {


    const data = [
        {
            text: 'Exhibition',
            img: '',
        },
        {
            text: 'Concerts',
            img: '',
        },
        {
            text: 'Food Stands',
            img: '',
        },
        {
            text: 'Conferences',
            img: '',
        },
        {
            text: 'Party',
            img: '',
        },
    ]

    return (
        <Section>
            <Inner>
                <Content>
                    <Title>Germanys leading Cannabis Expo & Festival Since 2016</Title>
                    <Text>Mary Jane Berlin is not only an expo, but also a festival with large live acts, and in combination with our exhibitors, we offer food stands, live concerts, conference on therapeutic properties, we have an extensive cultural and entertainment program offered to our visitors. As a visitor of Mary Jane Berlin, we inform you about the variety of THE green power plant – as food, cosmetic, building material, medicine and much more! As the world’s biggest Cannabis Expo, the Mary Jane Berlin offers a beach area with pool for the hot days of the Expo!</Text>
                    <SecondaryButton>learn more...</SecondaryButton>
                </Content>
                <Images>
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="instaGallerySwyper"
                    >
                        {
                            data.map(item => {
                                return (
                                    <SwiperSlide key={item.text}>
                                        <InstaCard>
                                            <InstaImgContainer></InstaImgContainer>
                                            <InstaText>{item.text}</InstaText>
                                        </InstaCard>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    <IconContainer>
                        <Icon>
                            <Img src="/icons/swipe-icon.png" alt="swipe icon" fill />
                        </Icon>
                        <IconTxt>Swipe</IconTxt>
                    </IconContainer>
                </Images>
            </Inner>
        </Section>
    )
}

export default Exhibition