import React from 'react'
import {
    Card,
    ImgContainer,
    Img,
} from './Elements'

const InstaCard = ({ src, x, y, rt }) => {
  return (
    <Card x={x} y={y} rt={rt}>
        <ImgContainer>
            <Img src={src} alt="mary jane berlin experience" fill />
        </ImgContainer>
    </Card>
  )
}

export default InstaCard