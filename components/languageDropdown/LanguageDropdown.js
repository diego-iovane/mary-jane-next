import { useState, useEffect } from "react"
import { GetLanguageContext } from "../../context/LanguageContext"
import {
    Button,
    DropdownBox,
    DropdownContainer,
    DropdownItem,
    FlagContainer,
    Flag,
    Arrow,
} from "./Elements"


const LanguageDropdown = ({ flags }) => {

    const [active, setActive] = useState('')
    const [opened, setOpened] = useState(false)

    const { language, setLanguage } = GetLanguageContext()

    // console.log('mmmmmmmmm', flags)

    useEffect(() => {
        setActive(flags[0])
    }, [])

    const handleOpen = () => setOpened(!opened)

    const changeLanguage = (value) => {

        setLanguage({
            ...language,
            locale: value
        })

        setOpened(!opened)

        setActive(flags.find(lng => lng.value === value))
    }

    return (
        <DropdownContainer>
            <Button onClick={handleOpen}>
                <FlagContainer>
                    <Flag src={active.src} />
                </FlagContainer>
                <Arrow opened={opened} />
            </Button>
            <DropdownBox opened={opened}>
                {
                    flags
                    .filter(lng => lng.value !== active.value)
                    .map(lng => {
                        return(
                            <DropdownItem key={lng.value}>
                                <FlagContainer onClick={() => changeLanguage(lng.value)}>
                                    <Flag src={lng.src} alt={lng.value}/>
                                </FlagContainer>
                            </DropdownItem>
                        )
                    })
                }
            </DropdownBox>
        </DropdownContainer>
    )
}

export default LanguageDropdown