import { useSwiperSlide } from 'swiper/react'
import {
  ReviewContainer,
  LogoContainer,
  Logo,
} from './Elements'

const Review = ({ content }) => {

  const thisSlide = useSwiperSlide()

  return (
    <ReviewContainer href='/' active={thisSlide.isNext}>
      <LogoContainer>
        <Logo src={content.src} alt={content.alt} fill />
      </LogoContainer>
    </ReviewContainer>
  )
}

export default Review