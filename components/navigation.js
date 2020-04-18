import Link from 'next/link';
import styles from './nav.module.css';

const Navigation=()=>{
   
    return(
        <nav className={styles.link}>
             <Link href="/">
                <a >Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
        </nav>
    )
}

export default Navigation;