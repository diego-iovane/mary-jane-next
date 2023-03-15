import { useSwiperSlide } from 'swiper/react'
import { 
  CardContainer,
  Img,
  ImgContainer,
  Content,
  Title,
} from './Elements'

const AccomodationCard = ({ content }) => {

  const thisSlide = useSwiperSlide()

  return (
    <CardContainer active={thisSlide.isNext}>
      <ImgContainer>
        <Img src={content.img} alt="hotel image" fill />
      </ImgContainer>
      <Content>
        <Title>{content.title}</Title>
      </Content>
    </CardContainer>
  )
}

export default AccomodationCard