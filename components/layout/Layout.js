import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { GetLanguageContext } from '../../context/LanguageContext'
import { GetContentContext } from '../../context/ContentContext'
import { db } from '../../utils/firebase'
import styled from 'styled-components'
import NavBar from "./NavBar/NavBar"
import Footer from "./Footer/Footer"
import { useRouter } from 'next/router'
import Bg from './bg/Bg'

//Styles
const LayoutContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: var(--bg-color);
`

//Component
const Layout = ({ children }) => {


  const { locale } = useRouter()
  const { language, setLanguage } = GetLanguageContext()
  const { content, setContent } = GetContentContext()
  const [data, setData] = useState({})

  useEffect(() => {

    const col = language.locale || locale
    const getData = async () => {
      let obj = {}
      const query = await getDocs(collection(db, col))
      query.forEach((doc) => {
        const docId = doc.id
        const value = doc.data()
        obj = {
          ...obj,
          [docId]: value
        }
      })

      setData(obj)

      setContent(obj)
      
    }

    getData()

  }, [language.locale])

  return (
    <LayoutContainer>
      <Bg />
      <NavBar data={data}/>
      <main>{children}</main>
      <Footer data={data}/>
    </LayoutContainer>
  )
}

export default Layout