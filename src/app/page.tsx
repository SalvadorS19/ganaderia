import Footer from './components/footer/footer'
import Landing from './components/landing/landing'
import Login from './pages/login/login'
import Nav from './components/nav/nav'

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <Login></Login>
      {/* <Landing></Landing> */}
      <Footer></Footer>
    </>
  )
}
