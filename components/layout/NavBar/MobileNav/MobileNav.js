import LanguageDropdown from '../../../languageDropdown/LanguageDropdown'
import {
    MenuContainer,
    List,
    Link,
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
                            <Link
                                key={link.url}
                                href={link.url}
                                onClick={() => setOpened(!opened)}
                            >
                                / {link.title}
                            </Link>
                        )
                    }
                    )
                }
                


                {/* {
                    primaryLinks.map(link => {
                        return (
                            <Link
                                key={link.url}
                                href={link.url}
                                onClick={() => setOpened(!opened)}
                            >
                                / {link.title}
                            </Link>
                        )
                    }
                    )
                }
                {
                    secondaryLinks.map(link => {
                        return (
                            <Link
                                key={link.url}
                                href={link.url}
                                onClick={() => setOpened(!opened)}
                            >
                                / {link.title}
                            </Link>
                        )
                    }
                    )
                } */}
            </List>
            {/* <DropdownContainer>
                <LanguageDropdown flags={flags} />
            </DropdownContainer> */}
        </MenuContainer>
    )
}

export default MobileNav