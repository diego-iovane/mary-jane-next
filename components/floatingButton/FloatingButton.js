import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Button, ImgContainer, Img, Text } from './Elements'

const FloatingButton = () => {
    
    const { pathname } = useRouter()
    const routes = ['/for-exhibitors', '/guides', '/stand-inquiry', '/furniture-rental-hostesses', '/accomodation', '/sponsoring']
    const [isVisitor, setIsVisitor] = useState()

    useEffect(() => {
        setIsVisitor(!routes.includes(pathname))
    }, [pathname])

    return (
        <Button
            href={ isVisitor ? "https://maryjaneberlin.ticket.io/y7wu2yng/" : "/stand-inquiry"}
            rel="noopener noreferrer"
            target="_blank"
            isVisitor={isVisitor}
        >
            <ImgContainer visible={isVisitor}>
                <Img
                    src="/logos/floating-ticket.png"
                    alt="floating ticket seeling button"
                    fill
                />
            </ImgContainer>
            <Text isVisitor={isVisitor}>
                { isVisitor ? 'Tickets' : 'Stand inquiry'}
            </Text>
        </Button>
    )
}

export default FloatingButton