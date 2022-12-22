import React, { useEffect } from 'react'
import { GetContentContext } from '../../context/ContentContext'
import { useScroll } from 'framer-motion'
import { Button, ImgContainer, Img } from './Elements'

const FloatingButton = () => {

    const { content } = GetContentContext()
    const { scrollYProgress } = useScroll()

    useEffect(() => {
        console.log(scrollYProgress)
    }, [scrollYProgress])

    return (
        <>
        {
            Object.entries(content).length !== 0 &&
            <Button
                href={content.mainNav.ticketButton.url}
                rel="noopener noreferrer"
                target="_blank"
                // appear={scrollYProgress > 0}
            >
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128v80c26.5 0 48 21.5 48 48s-21.5 48-48 48v80c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V304c-26.5 0-48-21.5-48-48s21.5-48 48-48V128c0-35.3-28.7-64-64-64H64zm64 96l0 192H448V160H128zm-32 0c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z" /></svg> */}
                <ImgContainer>
                    <Img
                        src={content.floatingButton.img.src}
                        alt={content.floatingButton.img.alt}
                        fill
                    />
                </ImgContainer>
            </Button>
        }
        </>
    )
}

export default FloatingButton