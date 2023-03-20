import { useState, useEffect } from 'react'
import {
    HeadSection,
    HeadBg,
    Content,
    Inner,
    InnerHead,
    Title,
    InputsContainer,
    Search,
    Grid,
    GridItem,
    LogoContainer,
    Logo,
    Categories,
    CategoriesContainer,
    Categorie,
} from './Elements'

const ExhibitorsGridPage = ({ content, exhibitors }) => {

    const [exhibitorsState, setExhibitorsState] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [currentCategory, setCurrentCategory] = useState("")
    const [openCategories, setOpenCategories] = useState(false)
    const [currentExhibitors, setCurrentExhibitors] = useState([])
    const [loading, setLoading] = useState(false)

    // TEMP
    const categories = ['All', 'Cbd', 'Paraphernalia', 'Food']

    const observeClicks = (e) => !e.target.className.includes("cat-btn") && setOpenCategories(false)

    useEffect(() => {
        setLoading(true)
        window.addEventListener('click', observeClicks)
        setTimeout(() => setLoading(false), 2500)
        setExhibitorsState(exhibitors)

        return () => window.removeEventListener('click', observeClicks)
    }, [])

    useEffect(() => {

        if (searchValue.length !== 0) {
            const filtered = exhibitorsState.filter(exhibitor => {
                if (exhibitor.node.title.toLowerCase().includes(searchValue.toLowerCase())) return exhibitor
            })
            setCurrentExhibitors(filtered)
        } else {
            setCurrentExhibitors(exhibitors)
        }

    }, [searchValue])

    useEffect(() => {
        setSearchValue("")

        if(currentCategory === "all") {
            setCurrentExhibitors(exhibitors)
        } else {
            const filtered = exhibitorsState.filter(exhibitor => {
                if (exhibitor.node.category.includes(currentCategory)) return exhibitor
            })

            setCurrentExhibitors(filtered)
        }
        
    }, [currentCategory])


    const handleInput = (e) => setSearchValue(e.target.value)

    const handleOpen = (e) => setOpenCategories(!openCategories)

    const handleClick = (e) => setCurrentCategory(e.target.innerText.toLowerCase())

    return (
        <>
            <HeadSection>
                <HeadBg src="/images/exhibitors-grid-page-bg.png" fill />
            </HeadSection>
            <Content>
                <Inner>
                    <InnerHead>
                        <Title>{content.title}</Title>
                        <InputsContainer>
                            <Categories className="cat-btn" onClick={handleOpen}>
                                {content.categoryInputPlaceholder}
                                <CategoriesContainer open={openCategories}>
                                    {
                                        categories.map(category => {
                                            return(
                                                <Categorie onClick={handleClick}className="cat-btn" >{category}</Categorie>
                                            )
                                        })
                                    }
                                </CategoriesContainer>
                            </Categories>
                            <Search onChange={handleInput} type="text" placeholder={content.searchInputPlaceholder} />
                        </InputsContainer>
                    </InnerHead>
                    {
                        exhibitorsState.length !== 0 ?
                            <Grid>
                                {
                                    currentExhibitors.length !== 0 ?
                                        currentExhibitors.map(exhibitor => {
                                            return (
                                                <GridItem key={exhibitor.node.logo.sourceUrl}>
                                                    <LogoContainer target="_blank" href={exhibitor.node.website} rel="noopener noreferrer" loading={loading}>
                                                        <Logo src={exhibitor.node.logo.sourceUrl} alt="" fill isLoading={loading} />
                                                    </LogoContainer>
                                                </GridItem>
                                            )
                                        }) : <p>No results</p>
                                }
                            </Grid> : null
                    }
                </Inner>
            </Content>
        </>
    )
}

export default ExhibitorsGridPage