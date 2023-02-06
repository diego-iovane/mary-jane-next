import { useRef, useState } from 'react'
import PrimaryButton from '../../buttons/PrimaryButton'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-cards"
import { EffectCards } from "swiper"
import Link from 'next/link'
import {
    Section,
    Inner,
    BgGreen,
    BgPink,
    Content,
    Title,
    Text,
    Images,
    InstaCard,
    InstaImgContainer,
    // InstaText,
    InstaImg,
    IconContainer,
    Icon,
    Img,
    IconTxt,
    ButtonsContainer,
    Button,
} from './Elements'

const Exhibition = () => {

    const data = [
        {
            text: 'Exhibition',
            img: 'https://firebasestorage.googleapis.com/v0/b/mary-jane-app.appspot.com/o/hover-gallery%2F_J7A4480%201.png?alt=media&token=1d8a2dca-44c0-489d-9d2a-0bfeab039a83',
        },
        {
            text: 'Concerts',
            img: 'https://firebasestorage.googleapis.com/v0/b/mary-jane-app.appspot.com/o/hover-gallery%2F_J7A4732%201.png?alt=media&token=ddf950c2-ad83-46d8-9b59-721620b43c9d',
        },
        {
            text: 'Festival',
            img: 'https://firebasestorage.googleapis.com/v0/b/mary-jane-app.appspot.com/o/hover-gallery%2F_J7A3938%201.png?alt=media&token=68cec2c8-5169-4f73-a8b2-72a589ffb580',
        },
        {
            text: 'Food Stands',
            img: 'https://firebasestorage.googleapis.com/v0/b/mary-jane-app.appspot.com/o/hover-gallery%2F_J7A4446%201.png?alt=media&token=184439a7-6496-41f4-a63b-b29970933916',
        },
        {
            text: 'Conferences',
            img: 'https://firebasestorage.googleapis.com/v0/b/mary-jane-app.appspot.com/o/hover-gallery%2F_J7A4170%201.png?alt=media&token=a54039c9-4b51-4ce2-8432-2de21164aaa3',
        },
    ]

    const swp = useRef(null)
    const [rotate, setRotate] = useState(false)

    const handleNext = () => {
        swp.current.swiper.slideNext(200, false)
    }

    const handlePrev = () => {
        swp.current.swiper.slidePrev(200, false)
    }

    return (
        <Section>
            <Inner>
                <BgGreen />
                <BgPink />
                <Content
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    viewport={{ once: true }}
                    amount="200"
                >
                    <Title>Germanys leading Cannabis Expo & Festival Since 2016</Title>
                    <Text>Mary Jane Berlin is not only an expo, but also a festival with large live acts, and in combination with our exhibitors, we offer food stands, live concerts, conference on therapeutic properties, we have an extensive cultural and entertainment program offered to our visitors. As a visitor of Mary Jane Berlin, we inform you about the variety of THE green power plant – as food, cosmetic, building material, medicine and much more! As the world’s biggest Cannabis Expo, the Mary Jane Berlin offers a beach area with pool for the hot days of the Expo!</Text>
                    <PrimaryButton>
                        <Link href="/">learn more...</Link>
                    </PrimaryButton>
                </Content>
                <Images
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0, transition: { delay: .5, duration: 1 } }}
                    onHoverStart={() => setRotate(true)}
                    onHoverEnd={() => setRotate(false)}
                    viewport={{ once: true }}
                    amount="200"
                >
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="instaGallerySwyper"
                        ref={swp}
                    >
                        {
                            data.map(item => {
                                return (
                                    <SwiperSlide key={item.text}>
                                        <InstaCard>
                                            <InstaImgContainer>
                                                <InstaImg src={item.img} alt="expo image" fill />
                                            </InstaImgContainer>
                                            {/* <InstaText>{item.text}</InstaText> */}
                                        </InstaCard>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    <IconContainer>
                        <Icon rotate={rotate}>
                            <Img src="/icons/swipe-icon-pink.png" alt="swipe icon" fill />
                        </Icon>
                        <IconTxt>Swipe</IconTxt>
                    </IconContainer>
                    <ButtonsContainer className="small-arrows">
                        <Button onClick={handlePrev}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg></Button>
                        <Button right={true} onClick={handleNext}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg></Button>
                    </ButtonsContainer>
                </Images>
            </Inner>
        </Section>
    )
}

export default Exhibition