import { Outlet } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import styles from './Layout.module.css'
const Layout = () => {
  return (
    <>
    <Navbar />
      <main className={styles.container}>
        <Outlet />
      </main>
    <Footer />
    </>
  )
}

export default Layout