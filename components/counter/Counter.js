import React from 'react'
import Countdown from 'react-countdown'
import { 
    Container,
    Item,
    Num,
    Text,
} from './Elements'

const Counter = ({ content }) => {

    const date = new Date(2023, 6, 23, 0)

    const renderer = ({ days, hours, minutes, seconds}) => {
        return(
            <Container>
            <Item>
                <Num>{days}</Num>
                <Text>{content.days}</Text>
            </Item>
            <Item>
                <Num>{hours}</Num>
                <Text>{content.hours}</Text>
            </Item>
            <Item>
                <Num>{minutes}</Num>
                <Text>{content.minutes}</Text>
            </Item>
            <Item>
                <Num>{seconds}</Num>
                <Text>{content.seconds}</Text>
            </Item>
        </Container>
        )
    }

    return <Countdown date={date} renderer={renderer}/>
}

export default Counter