import { useState } from 'react'
import Link from 'next/link'
import {
    LinkContainer,
    FakeLink,
    SubLinkContainer,
} from './Elements'

const LinkComponent = ({ link }) => {

    const [opened, setOpened] = useState(false)

    return (
        <LinkContainer opened={opened}>
            {
                link.dropdown !== undefined ?
                    <FakeLink opened={opened} onClick={() => setOpened(!opened)}>
                        / {link.title}
                    </FakeLink> :
                    <Link href={link.url} >
                        / {link.title}
                    </Link>
            }
            {
                link.dropdown?.map(subLink => {
                    return (
                        <SubLinkContainer>
                            <Link href={subLink.url}>{subLink.title}</Link>
                        </SubLinkContainer>
                    )
                })
            }
        </LinkContainer>
    )
}

export default LinkComponent