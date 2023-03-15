import styled from 'styled-components'
import NavBar from "./NavBar/NavBar"
import Footer from "./Footer/Footer"

//Styles
const LayoutContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: var(--bg-color);
`

//Component
const Layout = ({ children }) => {

  return (
    <LayoutContainer>
      <NavBar/>
      <main>{children}</main>
      {/* <Footer data={data}/> */}
    </LayoutContainer>
  )
}

export default Layout