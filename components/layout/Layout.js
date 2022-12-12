import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { GetLanguageContext } from '../../context/LanguageContext'
import { GetContentContext } from '../../context/ContentContext'
import { db } from '../../utils/firebase'
import styled from 'styled-components'
import NavBar from "./NavBar/NavBar"
import Footer from "./Footer/Footer"
import { useRouter } from 'next/router'

//Styles
const LayoutContainer = styled.div`
  width: 100%;
  overflow: hidden;
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
        // console.log('doc...', doc.id, doc.data())
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
      <NavBar data={data}/>
      <main>{children}</main>
      <Footer data={data}/>
    </LayoutContainer>
  )
}

export default Layout