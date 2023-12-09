import styles from './Navbar.module.css'
import SearchInput from '../../common/searchInput/SearchInput'
const Navbar = () => {
  return (
    <header className={styles.nav}>
        <img className={styles.logo} src='https://res.cloudinary.com/didni0nof/image/upload/v1700822365/hlnxfhwzwt7yvtokenmc.png' alt='Alibaba' />
        <nav>
            <form className={styles.inputWrapper}>
                <input type='search' placeholder='Search' />
                {/* <svg xmlns="http://www.w3.org/2000/svg" className={styles.inputIcon} viewBox="0 0 20 20" fill="red">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /> */}
                {/* </svg> */}
            </form>
            <SearchInput scale={0.5}/>
        </nav>
    </header>
  )
}

export default Navbar