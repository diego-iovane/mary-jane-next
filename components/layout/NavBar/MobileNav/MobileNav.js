import LanguageDropdown from '../../../languageDropdown/LanguageDropdown'
import LinkComponent from './LinkComponent'
import {
    MenuContainer,
    List,
    DropdownContainer,
} from './Elements'

const MobileNav = ({
    primaryLinks,
    secondaryLinks,
    flags,
    scrolled,
    opened,
    setOpened,


    links
}) => {

    return (
        <MenuContainer opened={opened}>
            <List>
                {
                    links.map(link => {
                        return (
                            <LinkComponent link={link} />
                        )
                    }
                    )
                }              
            </List>
            <DropdownContainer>
                <LanguageDropdown />
            </DropdownContainer>
        </MenuContainer>
    )
}

export default MobileNav